import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider()

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // console.log(user,loading);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

const signIn=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}

const updateUser=(updatedDta)=>{
  return updateProfile(auth.currentUser,updatedDta);
}

  const logOut=()=>{
    return signOut(auth)
  }

  const handleGoogleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
   }

   const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);  
  };


   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
          unsubscribe();
        }
    },[]);

    const authData={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        handleGoogleLogin,
        resetPassword
    };


    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;