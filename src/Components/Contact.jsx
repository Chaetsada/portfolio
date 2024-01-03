import React,{ useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) =>{
  e.preventDefault();

  const service_id = 'service_cc8k0lh';
  const template_id = 'template_f1cnjtu';
  const public_key = 'k4sVs6Ap23nHp6lns';

  const templateParams = {
    from_name:name,
    from_email:email,
    to_name:'Chaetsada.k',
    subject,
    message,
  }
    emailjs.send(service_id, template_id, templateParams, public_key)
    .then(() => {
      Swal.fire({
        title: "Success",
        text: "Email send successfully ",
        icon: "success"
      });
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, (error) => {
      Swal.fire({
        title: "Somehting went worng!",
        text: "Error sending email",
        icon: {error}
      });
    });
  }
  return (
    <main id='contact' className='min-h-screen'>
      <div className='h-screen  grid place-items-center bg-no-repeat bg-cover md:bg-contact'>
          <div className='h-screen w-[90%] min-w-[375px] max-w-[60%] flex justify-center items-center p-3  rounded-xl  bg-base-100 md:h-auto md:bg-base-200 md:p-10 md:shadow-2xl '>    
            {/* FORM INPUT */}              
            <form onSubmit={handleSubmit} className='w-full mt-5 group '>
              <h2 className='text-center text-5xl font-os '>Get in touch</h2>  
              <div className='flex flex-col space-y-5 mt-5'>
                <input 
                  className="input input-bordered w-full font-mont text-base text-white " 
                  type="text"
                  name='user_name'
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Name"                
                  required 
                />
                <input 
                  className="input input-bordered w-full font-mont text-base text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" 
                  type="email"
                  name='user_email' 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                  required 
                />
                <input 
                  className="input input-bordered w-full font-mont text-base text-white " 
                  type="text"
                  name='subject' 
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                  placeholder="Subject"
                  required 
                />
                <textarea 
                  className="textarea textarea-bordered font-mont text-base text-white" 
                  placeholder="Message"
                  name='message' 
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  rows={7}
                  required
                />
                <button type='submit' className="btn btn-neutral bg-success group hover:bg-warning group-invalid:pointer-events-none group-invalid:opacity-50 group-invalid:bg-error">
                  <span className='text-white font-mont text-xl transition-all duration-500  group-hover:tracking-widest '>Send</span>
                  <IoIosSend className='animate-bounce text-white' />
                </button>
              </div>
            </form>
            {/* CONTACT ADDRESS */}
            <section className='hidden md:block'>
              <div className='flex flex-col p-8 space-y-10'>
                <div className='flex-1 flex flex-col items-center'>
                  <CiLocationOn className='w-12 h-12 text-accent' />
                  <h4 className='text-white font-semibold font-poppin'>Address :</h4>
                  <p className='text-center text-base lg:text-xl font-poppin '>375 Moo.10, Mueangkao Sub-district, Muang District, Khon kaen, 40000</p>
                </div>
                <div className='flex-1 flex flex-col items-center'>
                  <FaPhoneAlt className='w-7 h-7 text-primary' />
                  <h4 className='text-white font-semibold font-poppin'>Phone :</h4>
                  <p className='text-center text-base lg:text-xl font-poppin'>083-2882660</p>
                </div>
                <div className='flex-1 flex flex-col items-center'>
                  <SiMinutemailer className='w-7 h-7 text-warning' />
                  <h4 className='text-white font-semibold font-poppin'>Email :</h4>
                  <p className='text-center text-base lg:text-xl font-poppin'>Chaetsada.k@gmail.com</p>
                </div>
              </div>
            </section>
          </div>
      </div>      
    </main>
  )
}

export default Contact