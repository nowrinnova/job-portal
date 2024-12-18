import React, { useContext } from 'react'
import AuthContext from '../../context/authContext/AuthContext'
import Lottie from "lottie-react";
import RegisterLottieData from '../../assets/lottieFiles/Animation - 1734507003740.json'
export default function Register() {
  const {createUser}=useContext(AuthContext)
  const handleRegister=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=e.target.email.value;
    const password=e.target.password.value
    console.log(email,password)
    createUser(email,password)
    .then(result=>{console.log(result.user)})
    .catch(error=>{console.log(error.message)})
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      <Lottie  animationData={RegisterLottieData} loop={true} ></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
