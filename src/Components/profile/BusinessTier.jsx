import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/User';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {toast} from 'react-toastify';

export default function BusinessTier() {
    const { currentUser, isUserPremium, UserCompanyName } = useContext(UserContext);
    


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Upload image to Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, `${UserCompanyName}/images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Get task progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            }, 
            (error) => {
                console.error(error);
                toast.error('An error occurred during the upload.');
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // Add a new document with a generated id to Firestore
                    const db = getFirestore();
                    return addDoc(collection(db, 'PremiumDealStamps'), {
                        name: name,
                        price: price,
                        category: category,
                        imageUrl: downloadURL,
                        likes:0,
                        From:UserCompanyName,
                        description:description
                    });
                })
                .then(() => {
                    // Reset form
                    setName('');
                    setPrice('');
                    setCategory('');
                    setImage(null);
                    setProgress(0);
                    toast.success('Your image has been uploaded successfully!');
                })
                .catch((error) => {
                    console.error(error);
                    toast.error('An error occurred while saving the image data.');
                });
            }
        );
    };

    return (
        <div className="bg-gray-800 text-white p-4 flex flex-col gap-4 items-center justify-center ">
            <h1 className='md:text-4xl'>Welcome,{currentUser}</h1>
            <p className="text-lg">This is the premium tier stamp upload where you can upload a max of 1 image.</p>
    <p className="text-sm text-yellow-300">Note: Premium tier allows for high priority deal stamps to be seen by every user.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="file" onChange={handleImageChange} className="py-2 px-4 bg-gray-700 text-white rounded" />
                <progress value={progress} max="100" className="w-full" />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="py-2 px-4 bg-gray-700 text-white rounded" />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="py-2 px-4 bg-gray-700 text-white rounded" />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="py-2 px-4 bg-gray-700 text-white rounded" />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="py-2 px-4 bg-gray-700 text-white rounded">
                    <option value="">Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>

                <button 
                    type="submit" 
                    className={`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${!name || !price || !category ? 'opacity-50' : ''}`} 
                    disabled={!name || !price || !category}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}