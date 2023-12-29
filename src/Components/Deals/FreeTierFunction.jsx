

import { collection, query, onSnapshot,doc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useEffect } from 'react';
import right from '../../assets/icons/right.png';


export default function FreeTierFunction({setStamps}) {

    
    const getStamps = (numStamps) => {
        const q = query(collection(db, "FreeDealStamps"));

        // Listen for real-time updates
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // Convert the documents into an array of objects
            const stampsArray = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return Object.keys(data).map(key => ({
                    ...data[key],
                    stampId: key
                }));
            }).flat();

            // Shuffle the array
            const shuffledStamps = stampsArray.sort(() => 0.5 - Math.random());

            // Get the first numStamps items
            const newStamps = shuffledStamps.slice(0, numStamps);

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
        <button className='bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => getStamps(4)}> Free tier </button>
        <img src={right} alt='right' className='w-[30px] h-[30px] cursor-pointer'  onClick={() => { setStamps([]); getStamps(4); }}/>
    </section>
    )
}
