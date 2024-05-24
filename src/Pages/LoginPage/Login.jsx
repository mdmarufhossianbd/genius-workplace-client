import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import bglogin from '../../assets/images/login.jpg';
const Login = () => {
    const { loginUser, auth, user } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    toast.success("Your account login successfuly")
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error("Please check your email or password.")
                }
            })

    }

    // Login With Google
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result.user) {
                    toast.success("Your account login successfuly")
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error("Please check your email or password.")
                }
            })
    }
   if(user){
    return navigate("/")
   }
    return (
        
        <div className='w-full'>
            <PageTitle title="Log in || Genius WorkPlace"></PageTitle>
            <img className='w-full h-full object-cover absolute' src={bglogin} />
            <div className='relative xl:w-[30%] lg:w-1/2 md:w-[70%] md:mx-auto mx-4 py-32'>
                <div className='border bg-[#1b30445b] text-white rounded md:py-10'>
                    <h2 className="text-3xl font-bold py-5 text-center">Please Login your account</h2>
                    <p className="font-medium mb-5 text-center">Let's get started!</p>
                    <div className="p-5">
                        <form onSubmit={handleLogin} className="flex flex-col w-full px-4 mx-auto">
                            <label className="text-lg font-medium py-2">Email</label>
                            <input className="bg-[#05a6584b] rounded-full text-xl py-2 pl-4 text-white placeholder:text-white focus:outline-none focus:ring-0" type="email" placeholder="Enter your valid email" name="email" required />

                            <label className="text-lg font-medium py-2">Password</label>
                            <div className="relative">
                                <input className="bg-[#05a6584b] w-full rounded-full text-xl py-2 pl-4 placeholder:text-white text-white focus:outline-none focus:ring-0" type={showPassword ? "text" : "password"} name="password" placeholder="Enter strong plassword" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="text-white absolute top-[30%] right-4">
                                    {showPassword ? <IoEyeOff /> : <IoEye />
                                    }  </span>
                            </div>
                            <input className="bg-[#05A659] rounded-full py-2 my-5 text-white font-medium text-xl hover:cursor-pointer hover:bg-white hover:text-black" type="submit" value="Login" />                            
                        </form>

                        <div className="flex flex-col lg:w-[95%] md:w-1/2 w-[95%] mx-auto">
                            <div className="divider">OR</div>
                            <Link><button onClick={handleGoogleLogin} className="bg-[#fff] rounded-full py-2 my-2 text-black border border-[#05A659] font-medium text-xl w-full hover:bg-[#05A659] hover:text-white ">Continue with Google</button>
                            </Link>
                            {/* <Link><button onClick={handleGitHubLogin} className="bg-[#3c1b44] rounded-full py-2 my-2 text-white font-medium text-xl w-full hover:bg-[#05A659]">Continue with GitHub</button>
                            </Link> */}
                            <p className="text-center mt-3">Don't have an account? <Link className="font-bold" to={'/register'}>Register</Link></p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;