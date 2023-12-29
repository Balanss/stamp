import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success('Logged out successfully');
            navigate.push("/");
        } catch (error) {
            console.error(error);
            toast.error('Failed to log out');
        }
    };

    return (
        <div>
            <ToastContainer />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;