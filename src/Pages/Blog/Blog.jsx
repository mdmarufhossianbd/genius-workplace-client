import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import jwtToken from '../../assets/images/blog/jwt-structure.png';
import expressWithNextjs from '../../assets/images/blog/next js with express js.jpg';
import nodejs from '../../assets/images/blog/nodejs.png';
const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <PageTitle title='Blog || Genius WorkPlace'></PageTitle>
            <div className="flex justify-center items-center h-[200px] my-10 rounded-md bg-[#05a6584b]">
                <h2 className="md:text-5xl text-4xl font-semibold">Blog</h2>
            </div>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    <Link to={'/blog/jwt-access-token'} className='border-2 p-5 rounded-md hover:bg-[#05a6584b]'><img className='rounded-md' src={jwtToken} alt="" />
                        <h2 className="text-2xl font-semibold">What is an access token and refresh token? How do they work and where should
                            we store them on the client side?</h2></Link>
                    <Link to={'/blog/next-with-express-js'} className='border-2 p-5 rounded-md hover:bg-[#05a6584b]'><img className='rounded-md' src={expressWithNextjs} alt="" />
                        <h2 className="text-2xl font-semibold">What is express JS? What is Nest JS?</h2></Link>
                    <Link to={'/blog/what-is-node-js'} className='border-2 p-5 rounded-md hover:bg-[#05a6584b]'><img className='rounded-md' src={nodejs} alt="" />
                        <h2 className="text-2xl font-semibold">What is Node JS?</h2></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;