import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../Provider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Addhouse = () => {
    const { useremail } = useContext(Authcontext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        //console.log(data, data.category)

        const houseinfo = {
            email: useremail,
            name: data.name,
            address: data.address,
            city: data.city,
            bedrooms: parseInt(data.bedrooms),
            bathrooms: parseInt(data.bathrooms),
            roomsize: parseInt(data.roomsize),
            picture: data.picture,
            availabilitydate: data.availabilitydate,
            rent_per_month: parseInt (data.rent_per_month),
            phone_number: parseInt (data.phone_number),
            description: data.description,
            status:"Ready for rent",
        }
        console.log(houseinfo)
        axios.post('https://house-hunter-server-site-two.vercel.app/houses', houseinfo)
        .then(res=>{
            if (res.data.insertedId) {
                Swal.fire("Good job!", "Houses Added", "success");
                navigate('/dashboard/addhouse')
            }
            else if (res.data.insertedId === null) {
                Swal.fire("Oops!", `something Wrong`, "error");
            }
        })

        // const menures = await axiospublic.post('/meals', mealinfo)
        // //console.log(menures)
        // if (menures.data.insertedId) {
        //     Swal.fire("Good job!", "Add data Successfully & Posted to the database", "success");
        // }
    }//3
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/92jwgNf/cover.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="flex flex-col items-center space-y-4 text-center text-black">
                    {/* Text content */}
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text">
                            Add Your Own Home Which one you want to give on rent
                        </h1>
                    </div>
                    <div className="space-x-4">

                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Add New Home</button>
                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Home Details</h3>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">House Name</span>
                                        </label>

                                        <input type="text" {...register("name", { required: true })} placeholder="House Name" className="input input-bordered" required />

                                        {errors.name && <span className='text-red-500'>Name is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>

                                        <input type="text" {...register("address", { required: true })} placeholder="Address" className="input input-bordered" required />

                                        {errors.address && <span className='text-red-500'>Address is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">City</span>
                                        </label>

                                        <input type="text" {...register("city", { required: true })} placeholder="City" className="input input-bordered" required />

                                        {errors.city && <span className='text-red-500'>City is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bedrooms</span>
                                        </label>

                                        <input type="text" defaultValue={0} {...register("bedrooms", { required: true })} placeholder="Bedrooms" className="input input-bordered" required />

                                        {errors.bedrooms && <span className='text-red-500'>Bedrooms is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bathrooms</span>
                                        </label>

                                        <input type="text"  defaultValue={0} {...register("bathrooms", { required: true })} placeholder="Bathrooms" className="input input-bordered" required />

                                        {errors.bathrooms && <span className='text-red-500'>bathrooms is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Room size</span>
                                        </label>

                                        <input type="text" {...register("roomsize", { required: true })} placeholder="10 square feet" className="input input-bordered" required />

                                        {errors.roomsize && <span className='text-red-500'>Room size is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Picture URL</span>
                                        </label>

                                        <input type="text" {...register("picture", { required: true })} placeholder="Picture URL" className="input input-bordered" required />

                                        {errors.picture && <span className='text-red-500'>Picture URL is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Availability date</span>
                                        </label>

                                        <input type="date" {...register("availabilitydate", { required: true })} placeholder="Availability date" className="input input-bordered" required />

                                        {errors.availabilitydate && <span className='text-red-500'>Availability date is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rent per month</span>
                                        </label>

                                        <input type="text" defaultValue={0} {...register("rent_per_month", { required: true })} placeholder="Rent per month" className="input input-bordered" required />

                                        {errors.rent_per_month && <span className='text-red-500'>Rent per month is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone number</span>
                                        </label>

                                        <input type="text" {...register("phone_number", { required: true })} placeholder="Phone number" className="input input-bordered" required />

                                        {errors.phone_number && <span className='text-red-500'>Phone number is required</span>}

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>

                                        <input type="text" {...register("description", { required: true })} placeholder="Description" className="input input-bordered" required />

                                        {errors.description && <span className='text-red-500'>Description is required</span>}

                                    </div>


                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Room</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Addhouse;