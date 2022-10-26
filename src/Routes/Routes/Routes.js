import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import LogIn from "../../shared/LogIn/LogIn";
import LoginDetails from "../../shared/LogIn/LoginDetails";
import SignIn from "../../shared/LogIn/LoginDetails";
import Register from "../../shared/LogIn/Register";
import SignUp from "../../shared/LogIn/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/logindetails',
                element: <LoginDetails></LoginDetails>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])