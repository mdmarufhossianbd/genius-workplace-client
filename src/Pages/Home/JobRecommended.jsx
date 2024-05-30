import { useEffect, useState } from "react";
import JobCard from "./JobCard/JobCard";

const JobRecommended = () => { 
    const [recJobs, setRecJobs] = useState()
    const [userRecJobs, setUserRecJobs] = useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/all-jobs`)
        .then(res=>res.json())
        .then(data=>setRecJobs(data))
    },[])

    const handleRecJobSubmit = (e) => {        
        const userRec = e.target.job_category.value;       
        const userJob = recJobs.filter(job => job.jobCategory === userRec)
        localStorage.setItem('userJob', JSON.stringify(userJob));
        setUserRecJobs(userJob)
    }

    useEffect(() => {
        const storedUserJob = localStorage.getItem('userJob');
        if (storedUserJob) {
            setUserRecJobs(JSON.parse(storedUserJob));
        }
    }, []);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            document.getElementById('my_modal_3').showModal();
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">What kind of job are you looking for ?</h3>
                    <form onSubmit={handleRecJobSubmit} method="dialog" className="flex flex-col gap-4 p-8">
                        <select name="job_category" className="mb-6">
                           <option value="On Site">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Part Time">Part-Time</option>
                            <option value="Hybrid">Hybrid</option>                            
                        </select>   
                        <input className="px-4 py-2 bg-[#05A659] text-white font-semibold rounded hover:cursor-pointer" type="submit" value="Submit" />
                    </form>
                </div>
            </dialog>
            <div>
                <h2 className="md:text-5xl text-4xl font-semibold mb-10 text-center">Recommended Jobs for you</h2>
                {
                    <div className='grid md:grid-cols-3 gap-5'>
                       
                    {
                        userRecJobs.length <= 0 ?  <p>You are not selected any interest job category.</p>
                        : userRecJobs?.map(job => <JobCard key={job._id} job={job} ></JobCard>) 
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default JobRecommended;