import { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth";

const UserProfile = () => {
    const {user} = useAuth() ;
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const jobUrl = `${import.meta.env.VITE_API_URL}/all-jobs/${user?.email}`
    useEffect(() => {
        fetch(jobUrl, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user, jobUrl])

    const appliedJobUrl = `${import.meta.env.VITE_API_URL}/applied-jobs/${user?.email}`
    useEffect(() => {
        fetch(appliedJobUrl, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setAppliedJobs(data)
            })
    }, [appliedJobUrl])

    return (
        <div className="max-w-7xl mx-auto">
            <PageTitle title='User Profile'></PageTitle>
            <div className="flex justify-center items-center h-[200px] my-10 rounded-md bg-[#05a6584b]">
                <h2 className="md:text-5xl text-4xl font-semibold">Profile</h2>
            </div>
            <div className="grid md:grid-cols-2 mx-4 md:mx-0">
                <div>
                    <img className="mb-5" src={user?.photoURL} alt="" />
                    <h4 className="font-medium text-xl my-1">Name : {user?.displayName}</h4>
                    <h4 className="font-medium text-xl">E-mail : {user?.email}</h4>
                </div>                
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold my-2">Your Activity</h2>
                    <h4 className="text-xl font-medium my-2">Total Application : {appliedJobs.length}</h4>
                    <h4 className="text-xl font-medium my-2">Total Job Post : {jobs.length}</h4>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;