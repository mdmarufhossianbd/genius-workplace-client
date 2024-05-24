import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth";
import AppliedCard from "./AppliedCard";

const AppliedJob = () => {
    const { user } = useAuth();
    const [myAppliedJobs, setMyAppliedJobs] = useState()
    const [filterCategory, setFilterCategory] = useState([])
    const url = (`${import.meta.env.VITE_API_URL}/applied-jobs/${user?.email}`)
    useEffect(() => {
        fetch(url, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setMyAppliedJobs(data)
                setFilterCategory(data)
            }
            )
    }, [url, user])
    const handleFilter = filter => {
        if (filter === "All") {
            setFilterCategory(myAppliedJobs)
        }
        if (filter === "Remote") {
            const categoryRemote = myAppliedJobs.filter(job => job.jobCategory === "Remote")
            setFilterCategory(categoryRemote)
        }
        if (filter === "On Site") {
            const categoryRemote = myAppliedJobs.filter(job => job.jobCategory === "On Site")
            setFilterCategory(categoryRemote)
        }
        if (filter === "Part Time") {
            const categoryRemote = myAppliedJobs.filter(job => job.jobCategory === "Part Time")
            setFilterCategory(categoryRemote)
        }
        if (filter === "Full Time") {
            const categoryRemote = myAppliedJobs.filter(job => job.jobCategory === "Full Time")
            setFilterCategory(categoryRemote)
        }
    }

    return (
        <div className="my-10">
            <PageTitle title='Applied Jobs'></PageTitle>
            <div className="h-full max-w-7xl lg:mx-auto mx-4">
                <div>
                    <div className="mb-5 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                My Applied Jobs
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Search your jobs in this list and build your career.
                            </Typography>
                        </div>
                        <div className="dropdown mb-5">
                            <div tabIndex={0} role="button" className="px-4 py-2 bg-[#05A659] text-white rounded m-1">Filter by Category</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="hover:bg-[#05A659] rounded hover:text-white" onClick={() => handleFilter('All')}><a>All</a></li>
                                <li className="hover:bg-[#05A659] rounded hover:text-white" onClick={() => handleFilter('On Site')}><a>On Site</a></li>
                                <li className="hover:bg-[#05A659] rounded hover:text-white" onClick={() => handleFilter('Part Time')}><a>Part Time</a></li>
                                <li className="hover:bg-[#05A659] rounded hover:text-white" onClick={() => handleFilter('Remote')}><a>Remote</a></li>
                                <li className="hover:bg-[#05A659] rounded hover:text-white" onClick={() => handleFilter('Hybrid')}><a>Hybrid</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    myAppliedJobs?.length == 0 ?
                        <div className=" flex justify-center gap-2">
                            <p>You do not applied any job. </p> <Link className="underline font-semibold" to={'/all-jobs'}>Browse job for apply</Link> </div> :
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
                                            Job Posting Date
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
                                        filterCategory?.map(job => <AppliedCard key={job._id} job={job} ></AppliedCard>)
                                    }

                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default AppliedJob;