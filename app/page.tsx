"use client"
import Experience from "@/components/experience"
import MainSection from "@/components/mainSection"
import Skils from "@/components/skils"
import React from "react"
import 'animate.css';
import {useEffect,useRef} from "react";
import Navbar from "@/components/navbar"
import {isMobile} from "@/utils/isMobile";

export default function Home() {
  const isMobileDevice = isMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
useEffect(()=>{
if(videoRef.current){
  videoRef.current.playbackRate = 0.5
}
},[])

  return (
    <main className="relative min-h-screen">
      {/* Navbar */}
      <div className="fixed z-20 w-full">
        <Navbar/> 
      </div>
      
   

      <div className="relative  h-full w-full">
       
        <video src="/3141208-uhd_3840_2160_25fps.mp4" ref={videoRef} autoPlay muted loop className="lg:h-auto h-screen object-fill fixed  opacity-10"></video>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container p-4 md:p-7 pt-20 md:pt-24">
          <MainSection/>
        </div>
        <div className="container p-4 md:p-7">
          <Skils/>
          <Experience/>
          {/* <Education/> */}
        </div>
      </div>
    </main>
  )
}