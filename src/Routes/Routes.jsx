import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import AddJob from "../Pages/AddJob/AddJob";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Blog from "../Pages/Blog/Blog";
import ExpressWithNextJS from "../Pages/Blog/ExpressWithNextJS";
import JWTAccessToken from "../Pages/Blog/JWTAccessToken";
import NodeJs from "../Pages/Blog/NodeJs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Login from "../Pages/LoginPage/Login";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Register from "../Pages/RegisterPage/Register";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>            
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/add-job',
          element:<PrivateRoutes><AddJob>s</AddJob></PrivateRoutes>
        },
        {
          path: '/all-jobs',
          element: <AllJobs></AllJobs>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-jobs`)
        },
        {
          path: 'my-jobs',
          element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
        },
        {
          path: '/job-details/:id',
          element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job-details/${params.id}`)
        },
        {
          path: '/update-job/:id',
          element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job-details/${params.id}`)
        },
        {
          path: '/profile',
          element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/my-applied-jobs/',
          element: <PrivateRoutes><AppliedJob></AppliedJob></PrivateRoutes>,          
        },
        {
          path: '/blog/jwt-access-token',
          element: <JWTAccessToken></JWTAccessToken>
        },
        {
          path: '/blog/next-with-express-js',
          element: <ExpressWithNextJS></ExpressWithNextJS>
        },
        {
          path: '/blog/what-is-node-js',
          element: <NodeJs></NodeJs>
        }
    ]
  },
]);

export default router;