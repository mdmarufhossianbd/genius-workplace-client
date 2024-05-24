import html2canvas from "html2canvas-pro";
import jsPDF from 'jsPDF';
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const JobDetails = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loading} = useAuth();
    const job = useLoaderData()
    const navigate = useNavigate()
    const [loader, setloader] = useState(false)

    const downloadPDF = () => {
        const capture = document.querySelector('.job')
        setloader(true);
        html2canvas(capture).then((canvas)=>{
            const imgData = canvas.toDataURL('img/png')
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setloader(false)
            doc.save('job-details.pdf')
        })
    }
      

    if (loading){
        return <div className="text-center py-[20%]">
        <span className=" loading loading-dots loading-lg"></span>
    </div>
    }
    
    const { _id, jobBanner, jobTitle, jobCategory, minSalary, maxSalary, deadline, jobDescription, applied_count, emplyoer, publishDate } = job;

    const handleApply = async e => {
        e.preventDefault();
        const form = e.target;
        const applicantEmail = form.applicant_email.value;
        const applicantName = form.applicant_name.value;
        const applicantResume = form.applicant_resume.value;
        const jobId = _id
        const applyData = {
            jobId, applicantEmail, applicantName, applicantResume, jobTitle, jobCategory, minSalary, maxSalary, deadline, publishDate
        }
        const today = new Date();
        const expriedDate = new Date(deadline);

        if (today > expriedDate) {
            toast.error("This job apply date is expried.")
            return
        }
        if (emplyoer?.email == applicantEmail) {
            toast.error("You can not apply this job because you owner of this job.")
            return
        }

        try{
            const { data } = await axiosSecure.post('/applies', applyData)
            toast.success("your applicaiton successfully added.")
            navigate('/my-applied-jobs')
        }
        catch (err) {
            toast.error(err.response.data)
            e.target.reset()
          }        
    }

    return (
        <div className="job">
            <PageTitle title={jobTitle}></PageTitle>
            <h2 className="text-center text-4xl font-bold md:mt-20 mt-10">Job Details</h2>
            <div className="max-w-7xl lg:mx-auto md:flex gap-5 border-2 px-4 py-8 my-10 rounded md:mx-5 mx-3">
                <div className="md:w-[70%]">
                    <img className="w-full" src={jobBanner} />
                    <h2 className="my-5 text-2xl font-semibold">{jobTitle}</h2>
                    <p>{jobDescription}</p>
                </div>

                <div className="md:ml-10 ml-0 md:mt-0 mt-5">
                    <div className="mb-4">
                        <p className="font-semibold">Job Category </p>
                        <p>{jobCategory}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Salary (monthly)</p>
                        <p>${minSalary} - ${maxSalary}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Deadline  </p>
                        <p >{new Date(deadline).toLocaleDateString()}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Total Apply</p>
                        <p>{applied_count} person</p>
                    </div>
                    <div>
                        <button className="text-xl font-semibold px-4 py-2 rounded bg-[#05A659] text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply Now</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Application From!</h3>
                                <p className="py-4">For apply in this job sumbit your resume link</p>
                                <form onSubmit={handleApply} className="flex flex-col gap-3">
                                    <input className="bg-[#1B3044] text-white p-2 rounded" type="text" name="applicant_name" disabled defaultValue={user?.displayName} />
                                    <input className="bg-[#1B3044] text-white p-2 rounded" type="email" name="applicant_email" disabled defaultValue={user?.email} />
                                    <input className="bg-[#1B3044] text-white p-2 rounded" type="text" name="applicant_resume" required placeholder="enter your resume link" />
                                    <input className="text-xl font-semibold px-4 py-2 rounded bg-[#05A659] text-white" type="submit" value="Apply" />
                                </form>
                            </div>
                        </dialog>
                        
                    </div>
                    <button className="text-xl font-semibold px-4 py-2 rounded bg-[#05A659] text-white my-4" onClick={downloadPDF} disabled={!loader === false} >
                            {loader ?( <span>Downloading</span>) : (<span>Download it</span>)}
                        </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;