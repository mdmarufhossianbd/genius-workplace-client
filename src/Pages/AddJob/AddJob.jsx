import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddJob = () => {
    const {user}  = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    
    const handleAddJob = async e => {
        e.preventDefault();
        const form = e.target;
        const jobBanner = form.job_banner.value;
        const jobTitle = form.job_title.value;
        const emplyoerName = form.employer_name.value;
        const email = form.employer_email.value;
        const jobCategory = form.job_category.value;
        const minSalary = form.min_salary.value;
        const maxSalary = form.max_salary.value;
        const deadline = startDate;
        const jobDescription = form.job_description.value;
        const publishDate = new Date();
        const jobData = {
            jobBanner, jobTitle, jobCategory, minSalary, maxSalary, deadline, jobDescription, publishDate, emplyoer: {
                email: email,
                name: emplyoerName
            },
            applied_count: 0
        }

        try{
            const { data } = await axiosSecure.post('/add-job', jobData)            
            toast.success("your applicaiton successfully added.")
            navigate('/my-jobs')
            form.reset()
        }
        catch (err) {
            toast.error(err.response.data)
            e.target.reset()
          }
    }

    return (
       <div className="bg-gradient-to-r from-[#7c2ae862] to-[#1b304452]">
        <PageTitle title='Add Job || Genius WorkPlace'></PageTitle>
         <div className="max-w-7xl mx-auto flex flex-col items-center pb-20">
            <h2 className="pt-20 pb-10 text-2xl font-semibold">Add New Job</h2>
            <form onSubmit={handleAddJob} className="md:w-[80%] flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="pb-2 text-lg font-medium">Job Banner URL </label>
                    <input className="p-2 rounded bg-[#1B3044] text-white" type="text" name="job_banner" placeholder="Please input a valid banner image url" />
                </div>
                <div className="flex flex-col">
                    <label className="pb-2 text-lg font-medium">Job Title </label>
                    <input className="p-2 rounded bg-[#1B3044] text-white" type="text" name="job_title" placeholder="Please input job title" />
                </div>
                <div className="flex flex-col">
                    <label className="pb-2 text-lg font-medium">Your Name </label>
                    <input className="p-2 rounded bg-[#1B3044] text-white" disabled defaultValue={user?.displayName} type="text" name="employer_name" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="pb-2 text-lg font-medium">Your Email </label>
                    <input className="p-2 rounded bg-[#1B3044] text-white" disabled defaultValue={user?.email} type="email" name="employer_email" id="" />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col w-[90%]">
                        <label className="pb-2 text-lg font-medium">Select Job Category </label>
                        <select className="p-2 rounded bg-[#1B3044] text-white" name="job_category">
                            <option value="On Site">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Part Time">Part-Time</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-lg font-medium">Salary Range / monthly <span>(in USD)</span> </label>
                        <div className="flex gap-4 mt-2">
                            <input className="w-full p-2 rounded bg-[#1B3044] text-white" type="number" name="min_salary" placeholder="Minimum Selary" id="" />
                            <input className="w-full p-2 rounded bg-[#1B3044] text-white" type="number" name="max_salary" placeholder="Minimum Selary" id="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="pb-2 text-lg font-medium">Job Description</label>
                    <textarea className="p-2 rounded bg-[#1B3044] text-white" name="job_description" placeholder="Please input job details" rows={8} id=""></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="pb-2 text-lg font-medium">Deadline</label>
                    <DatePicker className="w-full p-2 rounded bg-[#1B3044] text-white"
                    selected={startDate}
                    onChange={(date) =>
                    setStartDate(date)} />
                </div>
                <input className="my-5 hover:cursor-pointer bg-[#7D2AE8] text-white py-2 w-1/3 rounded" type="submit" value="Add Job" />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </form>
        </div>
       </div>
    );
};

export default AddJob;