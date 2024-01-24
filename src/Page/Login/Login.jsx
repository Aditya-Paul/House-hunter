import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'; //1
import { Link, json, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../../Provider/Authprovider';

const Login = () => {
    const navigate = useNavigate()
    const { useremail,setUseremail,setUsername,setUsernumber } = useContext(Authcontext)
    console.log(useremail)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
        const userinfo = {
            email: data.email,
            password: data.password
        }

        axios.post("https://house-hunter-server-site-two.vercel.app/loginuser", userinfo)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('access-token', JSON.stringify(res.data));
                setUseremail(res.data.email)
                navigate('/dashboard')
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-pink-100 pt-20">
                <div className="hero-content flex-row lg:flex-row-reverse">
                    <div className="card shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />

                                {errors.email && <span className='text-red-500'>Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" {...register("password", {
                                    required: true,
                                })} placeholder="password" className="input input-bordered" required />

                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>Password is required</p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className="text-base">New User? Please <span><Link className='text-pink-600' to='/register'>Register</Link></span></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;