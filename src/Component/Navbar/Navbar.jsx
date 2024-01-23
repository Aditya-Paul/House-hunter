import React, { useContext } from 'react';
import { Authcontext } from '../../Provider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { useremail, setUseremail } = useContext(Authcontext)
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem('access-token');
        setUseremail('')
        navigate('/')
    }
    //console.log(useremail)
    return (
        <div className="navbar bg-base-100 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52">
                        <li><Link className="text-gray-700 hover:text-pink-500" to='/'>Home</Link></li>
                        <li><Link className="text-gray-700 hover:text-pink-500" to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="text-pink-500 font-bold text-2xl">
                    Home Hunter
                </a>
            </div>
            <div className="navbar-end">
                {
                    useremail ?
                        <button className="btn btn-primary shadow-md hover:shadow-lg" onClick={handlelogout}>Logout</button>
                        :
                        <button className="btn btn-ghost shadow-md hover:shadow-lg">
                            <Link className="text-pink-500" to='/login'>Login</Link>
                        </button>
                }
            </div>
        </div>

    );
};

export default Navbar;