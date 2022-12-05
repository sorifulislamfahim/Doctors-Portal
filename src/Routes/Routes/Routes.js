import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointments/Appointment/Appointment";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/LogIn/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main> , 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/appointment', 
                element: <Appointment></Appointment>
            },
            {
                path: '/login', 
                element: <LogIn></LogIn>
            }, 
            {
                path: '/signup', 
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashbord', 
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
    }
])

export default router;