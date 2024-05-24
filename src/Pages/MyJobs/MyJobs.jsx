import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth";
import TableBody from "./TableBody";

const MyJobs = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    const url = `${import.meta.env.VITE_API_URL}/all-jobs/${user?.email}`
    useEffect(() => {
        fetch(url, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [url])

    // delete job
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/all-jobs/${_id}`, {
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{

                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    const remainingJobs = jobs.filter( job=> job._id !== _id)
                    setJobs(remainingJobs)
                    }
                })              
            }
          });
    }

    return (
        <div>
            <PageTitle title='My Jobs || Genius WorkPlace'></PageTitle>           
           <Card className="h-full max-w-7xl mx-auto my-20">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                           My Listed Jobs
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Search your jobs in this list and build your career.
                        </Typography>
                    </div>                    
                </div>                
            </CardHeader>
            {
                jobs.length == 0 ?
                <p>You do not add any job.</p>  :            
                <CardBody className="overflow-scroll px-0">
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
                            
                            jobs.map(job=> <TableBody key={job._id} job={job} handleDelete={handleDelete} ></TableBody>)
                        }

                    </tbody>
                </table>
            </CardBody>
            }
            {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <div className="flex justify-between w-full">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter> */}
        </Card>

        </div>
    );
};

export default MyJobs;