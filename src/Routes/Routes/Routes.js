import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseInfo from "../../Pages/CourseInfo/CourseInfo";
import CheckOut from "../../Pages/Courses/CheckOut/CheckOut";
import CourseNameCard from "../../Pages/Courses/CourseNameCard/CourseNameCard";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import LogIn from "../../shared/LogIn/LogIn";
import LoginDetails from "../../shared/LogIn/LoginDetails";
import Register from "../../shared/LogIn/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
            {
                path: '/courses-name/:id',
                element: <CourseNameCard></CourseNameCard>,
                loader: ({ params }) => fetch(`https://assignment-ten-learning-platform-server-website.vercel.app/courses-name/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseInfo></CourseInfo>,
                loader: ({ params }) => fetch(`https://assignment-ten-learning-platform-server-website.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-ten-learning-platform-server-website.vercel.app/checkout/${params.id}`)
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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])