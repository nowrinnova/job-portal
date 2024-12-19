import React from 'react'
import Banner from './Banner'
import HotJobs from './HotJobs'

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner></Banner>
      <HotJobs></HotJobs>
    </div>
  )
}
