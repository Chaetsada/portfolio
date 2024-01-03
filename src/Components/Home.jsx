import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

import { FaChevronDown } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

const Home = () => {
    return (
        <div id='home' className='min-h-screen'>
            <div className='flex h-screen relative'>
                {/* WHITE SIDE */}
                <div className='h-screen w-full bg-white relative'>
                    <div className='absolute-center w-[300px] hidden md:block'>
                        <h2 className='text-xl text-black font-poppin'>Hi there! , I'm <span className='text-error font-semibold'>JAMES</span></h2>
                        <h2 className='text-4xl text-black font-os font-semibold italic'>
                            <Typewriter
                                options={{
                                    strings: ['< Web developer />', '< Programmer />'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>                    
                </div>
                {/* BLACK SIDE */}
                <div className='h-screen w-full bg-black relative'>
                    {/* CHEVRON ICON */}
                    <a className='absolute-center hidden animate-bounce md:block' href="#about">
                        <FaChevronDown className=' text-white text-3xl ' />
                    </a>
                    {/* SOCIAL NAV */}
                    <ul className='absolute bottom-5 right-5 flex flex-col items-center space-y-4'>
                        <li className='transition-all duration-300 hover:-translate-x-2 '>
                            <a target='_blank' href="https://www.facebook.com/chaetsada.kulawong/"><FaFacebookSquare className='text-white text-3xl' /></a>
                        </li>
                        <li className='transition-all duration-300 hover:-translate-x-2 '>
                            <a target='_blank' href="https://www.linkedin.com/in/chaetsada-kulawong-6b1107234/"><FaLinkedin className='text-white text-3xl' /></a>
                        </li>
                        <li className='transition-all duration-300 hover:-translate-x-2 '>
                            <a target='_blank' href="https://github.com/JKnochu"><FaGithub className='text-white text-3xl' /></a>
                        </li>
                        <li className='transition-all duration-300 hover:-translate-x-2 '>
                            <a target='_blank' href="https://www.frontendmentor.io/profile/JKnochu"><SiFrontendmentor className='text-white text-3xl' /></a>
                        </li>
                        <li className='w-px h-[200px] bg-white'></li>
                    </ul>
                </div>
                {/* MIDDLE LETTER */}
                <div className='absolute-center flex mix-blend-difference'>
                    <motion.span 
                        initial={{y:50,opacity:0.2}} animate={{opacity:1,y:0}} transition={{duration:1}} drag dragConstraints={{top: -50,left: -50,right: 50,bottom: 50,}}
                        className='text-9xl text-white font-semibold font-poppins hover:cursor-grab'>C</motion.span>
                    <motion.span 
                        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} 
                        className='text-9xl text-white font-light font-poppins'>/</motion.span>
                    <motion.span 
                        initial={{y:-50,opacity:0.2}} animate={{opacity:1,y:0}} transition={{duration:1}} drag dragConstraints={{top: -50,left: -50,right: 50,bottom: 50,}}
                        className='text-9xl text-white font-semibold font-poppins hover:cursor-grab'>K</motion.span>
                </div>  
            </div>                      
        </div>
    )
}

export default Home