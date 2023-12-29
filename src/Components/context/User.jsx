/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, collection } from 'firebase/firestore';
import { auth, fs } from '../../Firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [ isUserPremium, setIsUserPremium] = useState(null);
    const [ UserCompanyName, setUserCompanyName] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                const docRef = doc(fs, 'BusinessUsers', firebaseUser.uid);
                getDoc(docRef).then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        const userData = docSnapshot.data();
                        if (userData && userData.email === firebaseUser.email) {
                            setCurrentUser(userData.name);
                            setIsUserPremium(userData.premium);
                            setUserCompanyName(userData.Company);      
                        }
                    }
                });
            } else {
                setCurrentUser(null);
            }
        });

        return unsubscribe;
    }, []);



    return (
        <UserContext.Provider value={{currentUser,isUserPremium,UserCompanyName}}>
            {children}
        </UserContext.Provider>
    );
};