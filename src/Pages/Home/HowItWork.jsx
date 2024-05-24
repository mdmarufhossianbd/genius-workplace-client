import { motion } from "framer-motion";
import { FaRegCheckCircle, FaSearch, FaUserGraduate } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";

const HowItWork = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="font-semibold text-5xl my-20 text-center">How it Work</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-4 lg:mx-0">
                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.5 }} className="border rounded-md flex flex-col items-center gap-3 p-3 hover:bg-[#05a6584b]">
                    <FaUserGraduate className="text-[#05A659] rounded-full text-5xl bg-[#f2f2f2] p-2" />
                    <h2 className="text-2xl font-semibold">Create an Account</h2>
                    <p className="text-center">Sign up now to create your account and unlock exclusive features tailored just for you!</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.5 }} className="border rounded-md flex flex-col items-center gap-3 p-3 hover:bg-[#05a6584b]">
                    <FaSearch className="text-[#05A659] rounded-full text-5xl bg-[#f2f2f2] p-2" />
                    <h2 className="text-2xl font-semibold">Search Your Job</h2>
                    <p className="text-center">Explore endless career opportunities with Search Your Job, your ultimate destination for finding the perfect job match.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.5 }} className="border rounded-md flex flex-col items-center gap-3 p-3 hover:bg-[#05a6584b]">
                    <MdOutlineCloudUpload className="text-[#05A659] rounded-full text-5xl bg-[#f2f2f2] p-2" />
                    <h2 className="text-2xl font-semibold">Upload Resume or CV</h2>
                    <p className="text-center">Kindly upload your resume or CV for consideration through the provided portal on our website.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.5 }} className="border rounded-md flex flex-col items-center gap-3 p-3 hover:bg-[#05a6584b]">
                    <FaRegCheckCircle className="text-[#05A659] rounded-full text-5xl bg-[#f2f2f2] p-2" />
                    <h2 className="text-2xl font-semibold">Applied</h2>
                    <p className="text-center">Applied successfully: Transforming ideas into tangible achievements with precision and expertise</p>
                </motion.div>               
            </div>
        </div>
    );
};

export default HowItWork;