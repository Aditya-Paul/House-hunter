import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { Authcontext } from '../Provider/Authprovider';

const UseUserHouse = () => {
    const{useremail} = useContext(Authcontext)

    const {data: userhouses=[],isLoading,refetch} = useQuery({
        queryKey:['userhouses',useremail],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:3000/House/${useremail}`)
            console.log(res.data)
            return res.data
        }
    })
    
    return [userhouses,isLoading, refetch]
};

export default UseUserHouse;