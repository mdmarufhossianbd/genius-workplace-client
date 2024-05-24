import { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../assets/images/Genius Work Place logo.png';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import login from '../../assets/images/login.jpg';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {registerUser, updateUserProfile, setReload, user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // password validation
        

        if (password.length < 6) {
            toast.error("Password at least 6 charaters.")            
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            toast.error("Please input at least one small later.")            
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("Please input at least one Capital later.")            
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            toast.error("Please input at least one number.")            
            return;
        }
        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])\S+$/.test(password)) {
            toast.error("Please input special charaters.")             
            return;
        }

        // register user
        registerUser(email, password)
            .then(result => {
                result.user
                updateUserProfile(name, photo, email)
                    .then(() => {
                        if (result.user) {
                            toast.success('Your account Create Successfully')                            
                            navigate(location?.state ? location.state : "/")
                            setReload(true);
                        }
                    })

            })
            .catch(error => {
                error.message
                if (error.message) {
                    toast.error("This email already use or invalid email.")                    
                }
            })
    }
    if(user){
        return navigate("/")
       }
    return (
        <div className='w-full'>
            <img className='w-full h-full object-cover absolute' src={login} alt="" />
            <div className='relative xl:w-[30%] lg:w-1/2 md:w-[70%] md:mx-auto mx-4 py-32'>
                <div className='border bg-[#1b30445b] text-white rounded'>
                    <h2 className="text-3xl font-bold py-5 text-center">Please Create an account</h2>
                    <p className="font-medium mb-5 text-center">Let's get started!</p>
                    <div className="p-5">
                        <form onSubmit={handleRegister} className="flex flex-col w-full px-4 mx-auto">
                            <label className="text-lg font-medium py-2">Name</label>
                            <input className="bg-[#05a6584b] rounded-full text-xl py-2 pl-4 text-white focus:outline-none focus:ring-0 placeholder:text-white" type="text" name="name" placeholder="Enter your full name" required />
                            <label className="text-lg font-medium py-2">Email</label>
                            <input className="bg-[#05a6584b] rounded-full text-xl py-2 pl-4 text-white placeholder:text-white focus:outline-none  focus:ring-0" type="email" placeholder="Enter your valid email" name="email" required />
                            <label className="text-lg font-medium py-2">Photo</label>
                            <input className="bg-[#05a6584b] rounded-full text-xl py-2 pl-4 text-white placeholder:text-white focus:outline-none  focus:ring-0" type="text" placeholder="Enter your photo url" name="photo" required />
                            <label className="text-lg font-medium py-2">Password</label>
                            <div className="relative">
                                <input className="bg-[#05a6584b] w-full rounded-full text-xl py-2 pl-4 placeholder:text-white text-white focus:outline-none focus:ring-0" type={showPassword ? "text" : "password"} name="password" placeholder="Enter strong plassword" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="text-white absolute top-[30%] right-4">
                                    {showPassword ? <IoEyeOff /> : <IoEye />
                                    }  </span>
                            </div>
                            <input className="bg-[#05A659] rounded-full py-2 my-5 text-white font-medium text-xl hover:cursor-pointer hover:bg-white hover:text-black" type="submit" value="Register" />
                            <p className="text-center">Already have an account? <Link className="font-bold" to={'/login'}>Login</Link></p>
                        </form>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;