import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";

const AllJobs = () => {
    const alljobs = useLoaderData()
    const [jobs, setJobs] = useState(alljobs);
    const [searchJob, setSearchJob] = useState('')

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/job-search?search=${searchJob}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[searchJob])

    const handleSearch = e => {
        e.preventDefault();
        const search = e.target.search.value;           
        setSearchJob(search)
        
    }    

    return (
        <div className="h-full max-w-7xl lg:mx-auto mx-4 md:my-20 my-10">
            <PageTitle title='All Jobs || Genius WorkPlace'></PageTitle>
            <div>
                <div className="mb-8 md:flex items-center justify-between gap-8">
                    <div>
                        <h2 className="md:text-3xl text-2xl font-semibold">
                            All Jobs List
                        </h2>
                        <p color="gray" className="mt-1 font-normal">
                            Search your jobs in this list and build your career.
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row my-5 md:my-0">
                        <div className="w-full md:w-80 flex gap-4">
                            <form onSubmit={handleSearch}>
                                <input className="border p-2 rounded" type="text" name="search" placeholder="search here" id="" />
                                <input className="px-4 py-2 bg-[#05A659] text-white font-semibold rounded hover:cursor-pointer" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="overflow-scroll border-x">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Job Title
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Salary Range (monthly)
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Job Publish Date
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Job Apply Deadline
                            </th>
                            <th
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs?.map(job=><tr key={job._id} className="border-b border-blue-gray-50 py-4">
                            <td className="p-4">
                                <h2>{job.jobTitle}</h2>
                            </td>
                            <td className="flex gap-3 p-4">
                                <h1>Min Salary : $ {job.minSalary}</h1>
                                <h1>Max Salary : $ {job.maxSalary}</h1>
                            </td>
                            <td className="p-4">
                                <p>{new Date (job.publishDate).toLocaleDateString()}</p>
                            </td>
                            <td className="p-4">
                                <p>{new Date (job.deadline).toLocaleDateString()}</p>
                            </td>
                            <td className="p-4">
                                <Link to={`/job-details/${job._id}`}><button>View</button></Link>
                            </td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default AllJobs;