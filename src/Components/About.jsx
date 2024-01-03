import { motion } from 'framer-motion'
import React from 'react'

import profile from '../assets/profile1.jpg'
import { FaLink } from "react-icons/fa6";

const About = () => {
  return (
    <main id='about' className='min-h-screen relative'>
      <div className='h-screen flex flex-col md:flex-row'>
        {/* ABOUT IMAGE */}
        <motion.div 
          className='flex-1 overflow-hidden group'
          initial={{opacity:0 }}
          whileInView={{opacity:1}}
          viewport={{ once: true }}
          transition={{duration:3}}
        >
          <img className='h-full w-full object-cover transition-all duration-700 group-hover:scale-110' src={profile} alt="profile-image" />
        </motion.div>
        {/* ABOUT INFO */}
        <div className='flex-1 relative bg-base-300'>
          <div className='absolute-center flex flex-col justify-center items-start'>
            <span className='text-xl font-mont'>My name's</span>
            <h2 className='block text-5xl md:text-8xl font-bold font-os uppercase transition-all duration-500 group relative tracking-wide'>
              <span className='text-primary'>C</span>
              haetsada
              <span className='absolute -bottom-1 right-0 bg-primary w-0 h-1 transition-all duration-500 group-hover:w-[100%]'></span>
            </h2>
            <h2 className='block text-5xl md:text-8xl font-bold font-os uppercase transition-all duration-500 group relative tracking-wide'>
              <span className='text-accent'>K</span>
              ulawong
              <span className='absolute -bottom-1 left-0 bg-accent w-0 h-1 transition-all duration-500 group-hover:w-[100%]'></span>
            </h2>
            <h4 className='text-xl md:text-3xl w-full text-center md:text-end font-bold font-poppin'>
              Front-End Developer
            </h4>
            <p className='mt-5 text-base md:text-xl text-center md:text-end font-poppin'>
              I'am a self taugh developer who really found a passion in Frontend-development    
            </p>
            {/* READ RESUME */}
            <div className='mt-10 flex w-full justify-center md:justify-end '>
              <a href="https://read.cv/chaetsada" target='_blank'>
                <button className="btn btn-active text-white font-semibold font-mont hover:bg-warning">
                  Read my resume
                  <FaLink />
                </button>
              </a>
            </div>
          </div>
        </div>       
      </div>
    </main>
  )
}

export default About