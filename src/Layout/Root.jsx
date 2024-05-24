import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navber from '../Components/Navber/Navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-457px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;