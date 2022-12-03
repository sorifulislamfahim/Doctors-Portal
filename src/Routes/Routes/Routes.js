import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointments/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";

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
            }
        ]
    }
])

export default router;