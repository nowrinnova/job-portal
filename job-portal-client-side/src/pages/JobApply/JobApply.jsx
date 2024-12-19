import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../../context/authContext/AuthContext'

export default function JobApply() {
  const {user}=useContext(AuthContext)
  // console.log(user?.email)
  const {id}=useParams()
  const navigate=useNavigate() 
  const handleJobApply=(e)=>{
    e.preventDefault()
    // const form=e.target
    const linkedIn=e.target.linkedin.value
    const github=e.target.github.value
    const resume=e.target.resume.value
    console.log(linkedIn,github,resume)
    const jobApplications={
      job_id:id,
      applicant_email:user.email,
      linkedIn:linkedIn,github:github,resume:resume
    }
    fetch('http://localhost:5000/job-application',{
      method:'POST',
      headers:{
      'content-type':"application/json"
      },
      body:JSON.stringify(jobApplications)
     
    })
    .then(res=>res.json())
    .then(data=>
      {navigate('/myApplications')})
  }
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Apply job and Good Luck!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleJobApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input type="url" name='linkedin' placeholder="LinkedIn" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input type="url" name='github' placeholder="github" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume Link</span>
          </label>
          <input type="url" name='resume' placeholder="Resume Link" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
