import React, { useContext } from 'react';
import { Authcontext } from './Provider/Authprovider';

const Homes = () => {
    const { user, setUser, username, setUsername } = useContext(Authcontext)
    const setuser = () => {
        console.log("ok")
        setUser(true)
        setUsername("adit")
    }
    console.log(user)
    console.log(username)
    return (
        <div>
            this is user name { }
            <button onClick={setuser}>set</button>
        </div>
    );
};

export default Homes;