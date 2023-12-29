/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {auth,fs,Timestamp} from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');
    const navigate = useNavigate();


    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;

            // Save the user's information to Firestore
            await setDoc(doc(fs, 'BusinessUsers', user.uid), {
                email: user.email,
                role: 'business',
                createdAt: Timestamp.now(),
                premium: false,
                trusted: false,
                name: user.displayName,
                id: user.uid,
            });

            toast.success('Account created successfully');
            setTimeout(() => {
                navigate('/');
            }
                , 2000);

        } catch (error) {
            // Handle Errors here.
            console.error(error);
            toast.error(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setDoc(doc(fs, 'BusinessUsers', user.uid), {
                email: email,
                role: 'business',
                createdAt: Timestamp.now(),
                premium: false,
                trusted: false,
                name: name,
                id:user.uid,
            }).then(() => {
                toast.success('Account created successfully');
                setTimeout(() => {
                    navigate('/');
                }
                    , 2000);
            }).catch((error) => {
                toast.error(error.message);
            });
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
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='text-black' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Sign Up with Email</button>
                </form>
                <button type="button" onClick={handleGoogleSignup} className='bg-red-500 p-10 rounded-md text-white-100 font-fold'>Sign Up with Google</button>
            </div>
          
        </div>
    );
};

export default Signup;
