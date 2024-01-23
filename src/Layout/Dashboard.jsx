import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaCommentAlt,  } from 'react-icons/fa';
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

    useEffect(() => {
        if (useremail) {
            axios.get(`http://localhost:3000/user/${useremail}`)
                .then(res => {
                    //setcurrentUser(res.data)
                    setloading(false)
                    //console.log(res?.data)
                    setcurrentUsercategory(res.data.category)
                })
        }

    }, [useremail])

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex  pt-24 md:pt-6'>
                
                <div className="w-60 h-56 flex flex-col justify-center space-y-2 p-4 border-r-4 border-pink-200 rounded-xl ">
                    
                        {
                            currentUsercategory === "House Owner" ?
                                <>
                                    {/* <li>
                                        <NavLink to='/dashboard/managehouse'
                                            className='hover:text-pink-300'>
                                            <MdManageAccounts />Manage House</NavLink>
                                    </li> */}
                                    <Link to='/dashboard/managehouse'>
                                    <button className="rounded-lg text-xl w-full h-10 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Manage House</button>
                                    </Link>
                                    <Link to='/dashboard/myhouse'>
                                    <button className="rounded-lg text-xl w-full h-10 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>My Houses</button>
                                    </Link>
                                    <Link to='/dashboard/addhouse'>
                                    <button className="rounded-lg text-xl w-full h-10 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Add New House</button>
                                    </Link>

                                    <Link to='/dashboard/houselist'>
                                    <button className="rounded-lg text-xl w-full h-10 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>House List</button>
                                    </Link>
                                    
                                    

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
                        

                    
                </div>
                <div className='flex-1 p-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;