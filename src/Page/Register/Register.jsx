import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'; //1
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../../Provider/Authprovider';
const Register = () => {
    const navigate = useNavigate()
    const { setUseremail } = useContext(Authcontext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        
        console.log(data)
        const userinfo = {
            name: data.name,
            email: data.email,
            category: data.category,
            password: data.password
        }

        axios.post("http://localhost:3000/users", userinfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire("Good job!", "Registered Successfully & Posted to the database, Welcome", "success");
                    setUseremail(data.email)
                    reset()
                    navigate('/dashboard')
                }
                else if (res.data.insertedId === null) {
                    Swal.fire("Oops!", `${res.data.message}`, "error");
                }
            })


        //signup
        // signup(data.email, data.password)

        //     .then(res => {
        //         //user update
        //         update(data.name, data.photo_url)
        //             .then(() => {

        //                 const userinfo = {
        //                     name: data.name,
        //                     email: data.email,
        //                     photo: data.photo_url,
        //                     bagde: "bronze"
        //                 }
        //                 // user post to the database
        //                 axiospublic.post('/users', userinfo)
        //                     .then(res => {
        //                         console.log(res.data)
        //                         if (res.data.insertedId) {
        //                             Swal.fire("Good job!", "Registered Successfully & Posted to the database, Welcome", "success");
        //                             reset()
        //                             navigate('/')

        //                         }
        //                     })

        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
        //     })
    }//3

    return (
        <>
            <div className="hero min-h-screen bg-pink-100 pt-20">
                <div className="hero-content flex-row lg:flex-row-reverse">
                    <div className="card shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />

                                {errors.name && <span className='text-red-500'>Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>

                                {/* <input type="text" {...register("category", { required: true })} placeholder="Category" className="input input-bordered" required /> */}

                                <select {...register("category", { required: true })} placeholder="User Category" className="input input-bordered" required>
                                    <option value="House Owner">House Owner</option>
                                    <option value="House Renter">House Renter</option>
                                </select>

                                {errors.name && <span className='text-red-500'>Name is required</span>}

                            </div>

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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className="text-base">Already have an account? <span><Link className='text-pink-600' to='/login'>Login</Link></span></p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;