import React, { useContext } from 'react';
import { Authcontext } from '../../Provider/Authprovider';

const RenterDashboard = () => {
    const { username,usernumber } = useContext(Authcontext)
    console.log(username,usernumber)
    return (
        <div>
            this is renter dashboard
        </div>
    );
};

export default RenterDashboard;