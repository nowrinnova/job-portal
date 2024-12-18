import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.init'
export default function AuthProvider({children}) {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in user
  const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  //sign out user
  const signOutUser=()=>{
    return signOut(auth)
  }

  //current user observe
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,createUser=>{
      setUser(createUser)
      // console.log('user captures',createUser)
      setLoading(false)
    })
    return ()=>{unsubscribe()}
  },[])
  const authInfo={
    user,loading,createUser,signInUser,signOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
