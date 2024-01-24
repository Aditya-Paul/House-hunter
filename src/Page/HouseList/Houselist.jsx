import React, { useContext,  useState } from 'react';
import UseUserHouse from '../../Hook/UseUserHouse';
import { MdDelete } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import { Authcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
const Houselist = () => {
    const { useremail } = useContext(Authcontext)
    const [userhouses, ,refetch] = UseUserHouse()
    const [openModal, setOpenModal] = useState(false);
    const [individualhouse, setindividualhouse] = useState({});
    const [individualhouseid, setindividualhouseid] = useState('');
    // form
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm()

    // form modal open
    const handleupdate = (id) =>{
        console.log(id)
        axios.get(`https://house-hunter-server-site-two.vercel.app/Houses/${id}`)
        .then(res=>{
            console.log(res.data)
            setindividualhouse(res.data)
            setindividualhouseid(id)
        })
    }
    // form update part
    const onSubmit = async (data) => {
        console.log(individualhouseid)

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
        axios.put(`https://house-hunter-server-site-two.vercel.app/singlehouse/${individualhouseid}`, houseinfo)
        .then(res=>{
            //console.log(res.data)
            if (res.data.matchedCount) {
                refetch()
                Swal.fire("Good job!", `${data.name} succesfully updated`, "success");
                
            }
            else if (res.data.matchedCount === null) {
                Swal.fire("Oops!", `something Wrong`, "error");
            }
        })

    }

    // Delete part
    const handledelete = (id) =>{
        console.log(id)
        axios.delete(`https://house-hunter-server-site-two.vercel.app/individualhouse/${id}`)
        .then(res=>{
            console.log(res.data)
            if (res.data.deletedCount) {
                refetch()
                Swal.fire("Good job!", `succesfully deleted`, "success");
                
            }
            else if (res.data.matchedCount === null) {
                Swal.fire("Oops!", `something Wrong`, "error");
            }
        })
    }

    //console.log(individualhouse)
    // const { useremail = {} } = useContext(Authcontext)
    // if (!useremail) {
    //     return 'loading'
    // }
    // const { data: userhouses = [], isLoading, refetch } = useQuery({
    //     queryKey: ['useremail'],
    //     queryFn: async () => {
    //         const response = await fetch(`https://house-hunter-server-site-two.vercel.app/House/${useremail}`)
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok')
    //         }
    //         return response.json()
    //     },
    // })
    // console.log(userhouses)

    // useEffect(() => {
    //     if (useremail) {
    //         axios.get(`https://house-hunter-server-site-two.vercel.app/House/${useremail}`)
    //             .then(res => {
    //                 //setcurrentUser(res.data)
    //                 setdata(res.data)
    //                 console.log(res?.data)
    //                 // setcurrentUsercategory(res.data.category)
    //             })
    //     }

    // }, [useremail])
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>You have {userhouses.length} houses</h1>
            <table className="table clear-start text-center">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Bedroom</th>
                        <th>Bathroom</th>
                        <th>Room Size</th>
                        <th>Rent</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        userhouses?.map((item, index) => (
                            <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center justify-center">
                                        <img onClick={() => setOpenModal(true)} src={item.picture} className="w-[200px] h-[150px] bg-black/30 text-white rounded-lg cursor-pointer" alt="" />
                                        <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full bg-black/70 duration-100`}>
                                            <div onClick={(e_) => e_.stopPropagation()} className={`absolute drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'} group overflow-hidden`}>
                                                {/* Favorite button */}
                                                <svg className="w-8 mx-auto rounded-lg absolute left-2 top-2 drop-shadow-lg cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#0095FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                                {/* close button */}
                                                <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto rounded-lg absolute right-0 drop-shadow-lg cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0095FF"></path></g></svg>
                                                {/* image */}
                                                <img src={item.picture} className="min-w-[300px] min-h-[200px] bg-black/20" alt="" />
                                                <div className="absolute right-0 bottom-0 duration-200 backdrop-blur-sm">
                                                    <button className="text-xl text-[#0095FF] p-3 hover:bg-sky-100 duration-200"><svg className="w-5 inline-block mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#0095FF"></path></g></svg>Share</button>
                                                    <button className="text-xl text-[#0095FF] p-3 hover:bg-sky-100 duration-200"><svg className="w-5 inline-block mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z" fill="#0095FF"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z" fill="#0095FF"></path></g></svg>Download</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.city}</td>
                                <td>{item.bedrooms}</td>
                                <td>{item.bathrooms}</td>
                                <td>{item.roomsize}</td>
                                <td>{item.rent_per_month}</td>
                                <td>{item.status}</td>
                                <th>
                                    {/* <button className="btn btn-ghost btn-xs"><CiEdit /></button> */}
                                    <button className="btn" onClick={() => {document.getElementById('my_modal_3').showModal(), handleupdate(item._id)}}><FaRegEdit /></button>
                                </th>

                                <th>
                                    <button className="btn btn-ghost btn-xs" onClick={()=>handledelete(item._id)}><MdDelete /></button>
                                </th>
                            </tr>
                        ))
                    }

                    {/* modal part */}
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

                                        <input type="text" defaultValue={individualhouse.name} {...register("name", { required: true })} placeholder="House Name" className="input input-bordered" required />

                                        {errors.name && <span className='text-red-500'>Name is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.address} {...register("address", { required: true })} placeholder="Address" className="input input-bordered" required />

                                        {errors.address && <span className='text-red-500'>Address is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">City</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.city} {...register("city", { required: true })} placeholder="City" className="input input-bordered" required />

                                        {errors.city && <span className='text-red-500'>City is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bedrooms</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.bedrooms} {...register("bedrooms", { required: true })} placeholder="Bedrooms" className="input input-bordered" required />

                                        {errors.bedrooms && <span className='text-red-500'>Bedrooms is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bathrooms</span>
                                        </label>

                                        <input type="text"  defaultValue={individualhouse.bathrooms} {...register("bathrooms", { required: true })} placeholder="Bathrooms" className="input input-bordered" required />

                                        {errors.bathrooms && <span className='text-red-500'>bathrooms is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Room size</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.roomsize} {...register("roomsize", { required: true })} placeholder="10 square feet" className="input input-bordered" required />

                                        {errors.roomsize && <span className='text-red-500'>Room size is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Picture URL</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.picture} {...register("picture", { required: true })} placeholder="Picture URL" className="input input-bordered" required />

                                        {errors.picture && <span className='text-red-500'>Picture URL is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Availability date</span>
                                        </label>

                                        <input type="date" defaultValue={individualhouse.availabilitydate} {...register("availabilitydate", { required: true })} placeholder="Availability date" className="input input-bordered" required />

                                        {errors.availabilitydate && <span className='text-red-500'>Availability date is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rent per month</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.rent_per_month} {...register("rent_per_month", { required: true })} placeholder="Rent per month" className="input input-bordered" required />

                                        {errors.rent_per_month && <span className='text-red-500'>Rent per month is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone number</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.phone_number} {...register("phone_number", { required: true })} placeholder="Phone number" className="input input-bordered" required />

                                        {errors.phone_number && <span className='text-red-500'>Phone number is required</span>}

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>

                                        <input type="text" defaultValue={individualhouse.description} {...register("description", { required: true })} placeholder="Description" className="input input-bordered" required />

                                        {errors.description && <span className='text-red-500'>Description is required</span>}

                                    </div>


                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Update</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </dialog>

                </tbody>


            </table>

        </div>
    );
};

export default Houselist;