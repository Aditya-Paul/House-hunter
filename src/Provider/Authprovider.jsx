import React, { createContext, useEffect, useState } from 'react';

export const Authcontext = createContext()
const Authprovider = ({ children }) => {
    const [useremail, setUseremail] = useState('')
    
    useEffect(() => {
        const UserData = localStorage.getItem('access-token')
        const parseData = JSON.parse(UserData)
        if (parseData) {
            setUseremail(parseData.email)
        }

    }, [])
    const authinfo = {
        useremail,
        setUseremail,
    }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;