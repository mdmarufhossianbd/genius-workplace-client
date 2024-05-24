import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";
import error from '../../assets/images/404.png';

const ErrorPage = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <img src={error} alt="" />
                <Link><button className="bg-[#05A659] mb-20 px-10 rounded-full py-2 text-white font-medium">Back to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;