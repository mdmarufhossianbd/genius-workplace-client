import PropTypes from 'prop-types';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className="text-center py-[20%]">
            <span className=" loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    if (!user) {
        toast.error('Please log in First')        
    }
    return <Navigate state={location.pathname} to={'/login'} replace>
        
    </Navigate>

};

PrivateRoutes.propTypes = {
    children: PropTypes.object
}

export default PrivateRoutes;