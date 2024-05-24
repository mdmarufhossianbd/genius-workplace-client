import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-base-200 relative">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 py-10 text-base-content max-w-7xl mx-auto px-10">
                <nav className="flex flex-col">
                    <Link to={'/'}><h2 className="text-3xl font-semibold pb-5">Genius WorkPlace</h2></Link>
                    <p className="text-justify">Genius WorkPlace, where innovation thrives and creativity knows no bounds, is your destination for career opportunities that challenge and inspire. Join us in shaping the future of technology and making meaningful contributions to the digital landscape.</p>
                </nav>
                <nav className="flex flex-col md:ml-5">
                    <h6 className="footer-title">Important Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <Link to={'/all-jobs'}><button className="hover:underline">All Jobs</button></Link>
                    <Link to={'/add-job'}><button className="hover:underline">Add Job</button></Link>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Contacts</h6>
                    <p className="font-semibold py-1">Office Address</p>
                    <p>5431 Palichara Hat <br />
                        Rangpur Sadar, Rangpur </p>
                    <p className="font-semibold py-2">Social Link</p>
                    <div className="text-xl flex gap-5">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address & get all job notice.</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="px-4 py-2 rounded bg-[#05A659] text-white font-semibold join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="footer-center p-4 bg-gradient-to-r from-[#7D2AE8] via-purple-500 to-[#05A659]">
                <aside>
                    <p className="text-white">Copyright © 2024 - All right reserved by <Link className="underline" to={'/'}>Genius WorkPlace.</Link></p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;