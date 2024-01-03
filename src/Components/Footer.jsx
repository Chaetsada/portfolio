import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='h-[25vh] bg-base-200'>
      <div className='container flex flex-col h-full'>
        <section className='flex-none flex justify-center items-center invisible md:visible md:flex-1'>
          <div>
            <h3 className='md:text-4xl text-accent tracking-widest font-os flex'>LET'S MAKE COOL STUFF <HiOutlineLightBulb /></h3>
          </div>
          <div className='flex-1 flex justify-end items-center space-x-2'>
            <h3 className='md:text-4xl text-error font-os font-bold'>STAY CONNECTED</h3>
            <span className='w-[100px] h-px bg-white hidden md:block'></span>
            <div className='md:space-x-5 flex'>
              <a target='_blank' href="https://www.facebook.com/chaetsada.kulawong/"><FaFacebookSquare className='text-white text-3xl transition-all duration-300 hover:text-error hover:translate-y-2' /></a>
              <a target='_blank' href="https://www.linkedin.com/in/chaetsada-kulawong-6b1107234/"><FaLinkedin className='text-white text-3xl transition-all duration-300 hover:text-error hover:translate-y-2' /></a>
              <a target='_blank' href="https://github.com/JKnochu"><FaGithub className='text-white text-3xl transition-all duration-300 hover:text-error hover:translate-y-2' /></a>
              <a target='_blank' href="https://www.frontendmentor.io/profile/JKnochu"><SiFrontendmentor className='text-white text-3xl transition-all duration-300 hover:text-error hover:translate-y-2' /></a>
            </div>
          </div>
        </section>
        <hr className='hidden md:block' />
        <section className='flex-1 flex flex-col  justify-center items-center md:flex-row md:justify-between'>
          <h2 className='text-center font-mont'>Develop by <span className='text-white'>Chaetsada kulawong</span></h2>
          <h2 className='text-center font-mont'>With ReactJS,DaisyUI and Vercel</h2>
        </section>
        </div>
    </footer>
  )
}
export default Footer