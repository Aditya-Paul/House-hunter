import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import axios from 'axios';

const Dashboardhome = () => {
    const [currentUsercategory, setcurrentUsercategory] = useState('')
    const { useremail } = useContext(Authcontext)

    useEffect(() => {
        if (useremail) {
            axios.get(`https://house-hunter-server-site-two.vercel.app/user/${useremail}`)
                .then(res => {
                    setcurrentUsercategory(res.data.category)
                })
        }

    }, [useremail])
    return (
        <div>
            {
                
                    currentUsercategory === "House Owner" ?

                    <h1 className='text-center text-5xl font-normal'>This is {currentUsercategory}  dashboard</h1> : <h1 className='text-center text-5xl font-normal'>This is {currentUsercategory} dashboard</h1>
            }
            
        </div>
    );
};

export default Dashboardhome;