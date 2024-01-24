import React, { createContext, useEffect, useState } from 'react';

export const Authcontext = createContext()
const Authprovider = ({ children }) => {
    const [useremail, setUseremail] = useState('')
    const [username, setUsername] = useState(' ')
    const [usernumber, setUsernumber] = useState(' ')
    const [loading,setloading] = useState(true)
    
    useEffect(() => {
        const UserData = localStorage.getItem('access-token')
        const parseData = JSON.parse(UserData)
        if (parseData) {
            setUseremail(parseData.email)
            setUsername(parseData.name)
            setUsernumber(parseData.number)
        }

    }, [])
    const authinfo = {
        useremail,
        setUseremail,
        username,
        setUsername,
        usernumber,
        setUsernumber,
        
    }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;