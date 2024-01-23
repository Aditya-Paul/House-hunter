import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../home';
import Register from '../Page/Register/Register';
import Login from '../Page/Login/Login';
import Main from '../Layout/Main';
import Dashboard from '../Layout/Dashboard';
import Dashboardhome from '../Page/Dashboardhome';
import Managehouse from '../Page/ManageHouse/Managehouse';
import Addhouse from '../Page/Add house/Addhouse';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: "/dashboard",
                element: <Dashboardhome></Dashboardhome>,
            },
            {
                path: "managehouse",
                element: <Managehouse></Managehouse>,
            },
            {
                path: "addhouse",
                element: <Addhouse></Addhouse>,
            },
        ]
    },
    
]);

export default Router;