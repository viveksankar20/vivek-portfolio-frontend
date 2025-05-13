"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'

function MainSection() {
 
  return (
    <div data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="500"
    data-aos-easing="ease-in-out" className='lg:grid flex flex-col-reverse grid-cols-5 lg:gap-0 gap-3 items-center tracking-wide '>
   
   <div className='col-span-2 flex flex-col gap-y-3'>
    <div   className='text-[#FFFFFF] text-4xl font-bold flex flex-col lg:text-start text-center  gap-y-3'>
    <p>Hi, I am </p>
<p>Vivek Sankar</p>
</div>
<div className='flex flex-col gap-y-5 '>
<div   className=' lg:text-2xl text-xl flex gap-x-2 lg:justify-start justify-center '><span className='font-bold text-[#FFFFFF]'>I am a</span>  
<span className="lg:text-2xl text-xl font-bold text-[#00D1EF]">
  <Typewriter
    options={{
      strings: [
        "MERN Stack Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "React.js Developer",
        "Backend Developer",
        "Web Developer",
      ],
      autoStart: true,
      loop: true,
    }}
  />
</span>
</div>
    
    <p   className='text-[#FFFFFF]'>A skilled MERN stack developer with a strong portfolio, passionate about staying updated on modern web technologies. Proficient in building full-stack applications with MongoDB, Express.js, React, and Node.js. Collaborative and committed to delivering high-quality solutions, you thrive in dynamic teams. Eager to contribute creativity and bring innovative, scalable ideas to life across the entire development stack.</p>

    <div className='flex gap-x-5 items-center'>
        <a href='/skills/Java_Developer_Vivek.pdf' target='new'className=" text-[#FFFFFF] bg-gradient-to-r from-[#00D1EF] to-[#0400E0] hover:bg-gradient-to-l hover:from-[#00D1EF] hover:to-[#0400E0] transition-all duration-700 text-lg p-2 rounded-lg whitespace-nowrap"
 >Check Resume</a>
        <a href='https://www.linkedin.com/in/viveksankar2k1/'  className='border  border-[#00E0FF] px-8 text-lg  p-2 rounded text-[#00E0FF] font-medium hover:text-slate-900 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 transition-all duration-700'>Hire Me</a>
    </div>
</div>
   </div>
<div></div>
   <div className='col-span-2 flex justify-center relative'>
   

     <motion.div  initial={{ rotateY: 0 }}
  animate={{ rotateY:360 }}
  transition={{ duration: 2, ease: "easeInOut" }}>

   <Image
  src="/0K8A0785-removebg-preview.png"
  width={300}
  height={300}
  
  alt="vivek"
  className=" shadow-active -rotate-6 lg:h-[300px] h-[250px] lg:w-[300px] w-[250px] object-contain rounded-full"
/>
</motion.div>
   </div>
    </div>
  )
}

export default MainSection





