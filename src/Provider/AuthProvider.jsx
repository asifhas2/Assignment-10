import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.info';
export const provider = new GoogleAuthProvider();




const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

const createUserGoogle =()=>{
    return signInWithPopup(auth,provider);
}
const createUserWithEmailPassword=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInWithEmailPassword=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const updateUserProfile =(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo,
    })
}

const signOutUser =()=>{
   return signOut(auth);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(current)=>{
        setUser(current);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
},[])




    const value = {
        user,setUser,
        loading,setLoading,
        error,setError,
        createUserGoogle,
        createUserWithEmailPassword,
        signInWithEmailPassword,
        updateUserProfile,
        signOutUser,



    }

    return <AuthContext value={value}>
        {children}
    </AuthContext>
};

export default AuthProvider;