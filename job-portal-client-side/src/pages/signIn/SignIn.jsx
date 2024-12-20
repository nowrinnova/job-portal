import React, { useContext } from 'react'
import AuthContext from '../../context/authContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function SignIn() {
  const {signInUser}=useContext(AuthContext)
  const navigate=useNavigate()
  const handledSignin=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=e.target.email.value;
    const password=e.target.password.value
    console.log(email,password)
    signInUser(email,password)
    .then(result=>{console.log(result.user.email)
      const user={email:email}
      axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
      .then(data => console.log(data))
      // navigate('/')
    })
    .catch(error=>{console.log(error.message)})
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      {/* <Lottie  animationData={RegisterLottieData}></Lottie> */}
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl font-bold">Log-In now!</h1>
        <form onSubmit={handledSignin} className="card-body">
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
            <button className="btn btn-primary">Log In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
