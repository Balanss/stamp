

import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useEffect } from 'react';
import right from '../../assets/icons/right.png';


export default function PremiumFunction({setStamps}) {
    const getStamps = (numStamps) => {
        const q = query(collection(db, "PremiumDealStamps"));
    
        // Listen for real-time updates
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // Shuffle the array of documents
            const shuffledDocs = querySnapshot.docs.sort(() => 0.5 - Math.random());
    
            const newStamps = shuffledDocs.map(doc => ({
                imageUrl: doc.data().imageUrl,
                likes: doc.data().likes,
                fromWho: doc.data().From,
                stampId: doc.id,
                discription: doc.data().discription,
                price: doc.data().price,
                title: doc.data().name,
            })).slice(0, numStamps); // Get the first numStamps items
    
            setStamps(newStamps);
        });
    
        // Return the unsubscribe function to clean up the listener
        return unsubscribe;
    }
    
    useEffect(() => {
        // Call getStamps and store the unsubscribe function
        const unsubscribe = getStamps(4);
    
        // Clean up the listener when the component is unmounted
        return () => unsubscribe();
    }, []);

    return (
        <section className='flex items-center gap-10 justify-end'>
        <button className='bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => getStamps(4)}> More </button>
        <img src={right} alt='right' className='w-[30px] h-[30px] cursor-pointer'  onClick={() => { setStamps([]); getStamps(4); }}/>
    </section>
    )
}
