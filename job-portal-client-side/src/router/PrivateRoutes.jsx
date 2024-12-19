import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/authContext/AuthContext'

export default function PrivateRoutes({children}) {
  const {user,Loading}= useContext(AuthContext)
  if(Loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  if(user){
    return children
  }
  return (
    <Navigate to={'/signin'}></Navigate>
  )
}