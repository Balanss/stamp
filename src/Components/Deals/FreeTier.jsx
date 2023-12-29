import React, { useState, useEffect,useContext } from 'react'
import { collection, getDocs, query,doc,updateDoc,getFirestore,runTransaction,arrayUnion,arrayRemove ,onSnapshot} from "firebase/firestore";
import { db,auth } from "../../Firebase"; // Import your Firestore instance
import like from '../../assets/icons/like.png'
import { toast } from 'react-toastify';
import { UserContext } from '../Context/User';
import FreeTierFunction from './FreeTierFunction';
import Modal from '../Deals/Modal';

export default function FreeTier() {
    const [stamps, setStamps] = useState([]);
    const { currentUser, isUserPremium, UserCompanyName } = useContext(UserContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // State for the current stamp
const [currentStamp, setCurrentStamp] = useState(null);




    const handleLike = async (stampId) => {
        console.log(stampId)

        const user = auth.currentUser;
        if (!user) {
            toast.error('You must be signed in to like a stamp.');
            return;
        }

        const docRef = doc(db, "FreeDealStamps", `Free-${UserCompanyName}`);

        // Run a transaction
        await runTransaction(db, async (transaction) => {
            const stampDoc = await transaction.get(docRef);

            if (!stampDoc.exists()) {
                throw "Document does not exist!";
            }

            const stampData = stampDoc.data()[stampId];
            const likesCollection = stampData.likesCollection || [];

            if (likesCollection.includes(currentUser)) {
                // User has already liked the stamp, so decrement the likes count
                transaction.update(docRef, {
                    [`${stampId}.likes`]: stampData.likes - 1,
                    [`${stampId}.likesCollection`]: arrayRemove(currentUser)
                });

                toast.info('Unliked.');
            } else {
                // User has not liked the stamp yet, so increment the likes count
                transaction.update(docRef, {
                    [`${stampId}.likes`]: stampData.likes + 1,
                    [`${stampId}.likesCollection`]: arrayUnion(currentUser)
                });

                toast.info('Liked.');
            }
        });
    }
  

    const openModal = (stamp) => {
        setCurrentStamp(stamp);
        setModalIsOpen(true);
    }

    return (
        <div className='text-black mt-[120px] flex flex-col items-center'>
            <FreeTierFunction setStamps={setStamps}/>
            <section className='flex flex-row gap-10 items-center justify-center flex-wrap p-5'>
                {stamps.slice(0, 8).map((stamp, index) => (
                    <div key={index} className='flex flex-col justify-between items-center  relative'>
                       <div style={{position: 'relative'}}>
                        <img src={stamp.imageUrl} alt="" className='h-[400px] w-[300px] border-2 border-blue-black rounded-xl' />
                        <span className='bg-red-500 text-white font-bold p-2 cursor-pointer' style={{position: 'absolute', top: 0, left: 0}} onClick={() => {openModal(stamp)}}>  More info</span>
                    </div>
                        <div className='absolute bg-green-700 bottom-0 text-white w-full flex flex-row gap-10 justify-center items-center '>
                            <div className='flex gap-1'>
                                <p> {stamp.likes}</p>
                                <img src={like} className='w-6 h-6 cursor-pointer'  onClick={() => handleLike(stamp.stampId)}/>
                            </div>
                            <p> {stamp.fromWho}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} currentStamp={currentStamp} />
        </div>
    )
}