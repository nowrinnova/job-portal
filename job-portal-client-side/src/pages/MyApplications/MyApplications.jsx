import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/authContext/AuthContext'
import MyApplicationCart from './MyApplicationCart'


export default function MyApplications() {
  const {user}=useContext(AuthContext)
  const [jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[user.email])
  return (
    <div>
      <table className="table">
      {/* head */}
      <thead>
        <tr>
          {/* <th></th> */}
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
      
        {
        jobs.map(job=><><tr className="bg-base-200">
          {/* <th>1</th> */}
          <td><img className='w-[100px] h-[60px]' src={job.company_logo} alt="" /></td>
          <td>{job.title}</td>
          <td>{job.company}</td>
        </tr></>)
      }
        {/* row 2 */}
       
      </tbody>
    </table>



      
    </div>
  )
}
