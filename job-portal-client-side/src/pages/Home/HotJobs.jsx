import React, { useEffect, useState } from 'react'
import HotJobsCart from './HotJobsCart'

export default function HotJobs() {
  const [jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/jobs')
    .then(res=>res.json())
    .then(data=>{
      setJobs(data)
      console.log(data)})
  },[])

  return (
    <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {jobs.map(job=><HotJobsCart job={job}></HotJobsCart>)}
    </div>
  )
}
