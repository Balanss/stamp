import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { auth, fs } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;
            toast.success('Signed in successfully');
            setTimeout(() => {
                navigate('/');
            }, 2000);
            
            
        } catch (error) {
            // Handle Errors here.
            console.error(error);
            toast.error(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('Signed in successfully');
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    };

    return (
        <div className="bg-white flex flex-col justify-center items-center h-screen">
            <ToastContainer />
            <div className='flex flex-col gap-10 w-2/5 m-auto'>
                <form className='bg-red-500 p-10 flex flex-col gap-10 rounded-md text-white-100 font-fold' onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='text-black' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Sign In with Email</button>
                </form>
                <button type="button" onClick={handleGoogleSignin} className='bg-red-500 p-10 rounded-md text-white-100 font-fold'>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;