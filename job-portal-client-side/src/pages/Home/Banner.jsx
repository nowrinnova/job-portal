import React from 'react'
import { motion } from "motion/react"
export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <div><img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" /></div>
      <div><img src="../../assets/happy-team.jpg" alt="" /></div>
    <div>
      <motion.h1  animate={{ x: 50 ,transition: { duration: 2 } }} className="text-2xl md:text-5xl font-bold text-start">Box Office News!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
