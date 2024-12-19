import React from 'react'
import { Link } from 'react-router-dom'

export default function HotJobsCart({job}) {
  const {_id,company_logo,hr_name,hr_email,requirements,company,description,salaryRange,applicationDeadline,category,jobType,location,title}=job
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
   <div className='flex justify-between items-center h-[100px]'>
   <figure>
      <img
        src={company_logo} className='w-2/3 h-[50px]'
        alt="Shoes" />
    </figure>
    <div>
      <h1>{company}</h1>
      <p className='text-sm'>{location}</p>
    </div>
   </div>
    <div className="card-body">
      <h2 className="text-base text-start font-bold">{title}</h2>
      <p className='text-start'>{description}</p>
      <div className='flex flex-wrap gap-2 py-2'>
        {requirements.map(skill=><p className='border rounded-md text-center text-xs hover:text-blue-300'>{skill}</p>)}
      </div>
      <div className='text-start'>
          Salary: <span>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</span>
        </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary "><Link to={`/jobs/${_id}`}>Apply Now</Link></button>
      </div>
    </div>
  </div>
  )
}
