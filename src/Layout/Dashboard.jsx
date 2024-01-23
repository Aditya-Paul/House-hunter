import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUtensils, FaCommentAlt,FaUserCircle  } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
// import Footer from '../Shared/Footer';
// import UseAdmin from '../Hook/UseAdmin';
import Navbar from '../Component/Navbar/Navbar';
import { Authcontext } from '../Provider/Authprovider';
import axios from 'axios';

const Dashboard = () => {
    const [loading, setloading] = useState(true)
    const [currentUsercategory, setcurrentUsercategory] = useState('')
    const { useremail } = useContext(Authcontext)
    
    useEffect(()=>{
        
        axios.get(`http://localhost:3000/user/${useremail}`)
        .then(res=>{
            //setcurrentUser(res.data)
            setloading(false)
            //console.log(res?.data)
            setcurrentUsercategory(res.data.category)
        })
    },[useremail])
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex pt-24 md:pt-6'>
                <div className="w-64 min-h-screen border-r-4 border-pink-200 rounded-xl">
                    <ul className='menu'>
                        {
                            currentUsercategory === "House Owner" ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/managehouse'
                                        className='hover:text-pink-300'>
                                        <MdManageAccounts />Manage House</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myhouse' className='hover:text-pink-300'>
                                        <FaHouse /> My Houses</NavLink>
                                    </li>
                                    <li className='bg-white text-black'>
                                        <Link to='/dashboard/addhouse' className='hover:text-pink-300'>
                                        <BsFillHouseAddFill /> Add New House
                                        </Link>
                                    </li>
                                    <li className='bg-white text-black'>
                                        <Link to='/dashboard/houselist' className='hover:text-pink-300'>
                                        <CiBoxList />  House List
                                        </Link>
                                    </li>

                                </>
                                :
                                <>
                                    <li>

                                        <NavLink to='/dashboard/profile'>
                                            <CgProfile></CgProfile>User Profile</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/reqmeals'>
                                            <GiHotMeal></GiHotMeal> Requested Meals</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/myreviews'>
                                            <FaCommentAlt ></FaCommentAlt > My Reviews</NavLink>
                                    </li>
                                </>
                        }
                        <li>
                            <NavLink to='/dashboard/checkout/price'>
                                <FaHome></FaHome> Payments</NavLink>
                        </li>

                    </ul>
                </div>
                <div className='flex-1 p-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;