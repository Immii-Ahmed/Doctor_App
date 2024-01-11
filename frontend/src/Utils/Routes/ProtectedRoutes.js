import React, { useEffect } from 'react'
import { useAuthProvider } from '../../Providers';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoutes = ({ children }) => {
    const { cookies } = useAuthProvider();
    const navigate = useNavigate();

    useEffect(() => {
        let messageTime = setTimeout(() => {
           if(!cookies.get('auth'))
                navigate(-1)
        }, 1000);

        if (!cookies.get('auth'))
            toast.error('Please Login!!');

        return () => {
            clearTimeout(messageTime);
        }
    },[])
    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes