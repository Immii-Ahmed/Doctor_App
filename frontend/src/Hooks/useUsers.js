import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useAuthProvider } from '../Providers';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useUsers = () => {
    const [data, setData] = useState([]);

    const { setUser, cookies } = useAuthProvider();
    const navigate = useNavigate();

    const getUsers = useCallback(async (user) => {
        await axios.post('http://localhost:3184/getUsers')
    }, [])
    
    const handleRegisterUser = useCallback(async (user) => {
        await axios.post('http://localhost:3184/signup', { user });
        navigate('/login')
    }, [navigate]);

    const loginUser = useCallback(async (user) => {
        await axios.post('http://localhost:3184/login', { user }).then((res) => {
            if (res?.data) {
                setData(res.data)
                setUser(res.data);
                cookies.set("auth", res.data._id, { path: '/' })
                navigate('/')
            } else {
                toast.error('Invalid Credentials!');
            }
        })
    }, [setUser, cookies, navigate]);

    const logout = useCallback(async () => {
        cookies.remove('auth');
        navigate('/')
    }, [cookies, navigate]);

    const handleAppointment = useCallback(async(appointments) => {
        await axios.post('http://localhost:3184/appointment', { appointments });
        navigate('/apointments')
},[navigate])

    return {
        data, handleRegisterUser,loginUser,getUsers,logout,handleAppointment
  }
}

export default useUsers
