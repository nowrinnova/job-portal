import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function JobDetails() {
  const data=useLoaderData()
  console.log(data)
  const {_id,company_logo,hr_name,hr_email,requirements,company,description,salaryRange,applicationDeadline,category,jobType,location,title}=data
  return (
    <div>
      <h1>Company:{company}</h1>
      <h1>Category{category}</h1>
      <h1>job {title}</h1>
      <h1> jobType {jobType}</h1>
      <Link to={`/jobApply/${_id}`}><button className='btn btn-warning m-4'> apply </button></Link>
    </div>
  )
}
