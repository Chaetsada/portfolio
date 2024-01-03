import React from 'react'
import { useScrollPosition } from '../Hooks/scrollPostion'

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    return (
        <>
            <div id='navbar' className={`drawer sticky z-20 w-[80%] mx-auto ransition-all duration-500  ${scrollPosition> 0 ?'top-5':'top-0'}`}>
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                <div className="drawer-content flex flex-col">
                    {/* DESKTOP NAV */}
                    <div className={` navbar backdrop-blur-lg bg-opacity-30  rounded-xl transition-all duration-500 ${scrollPosition> 0 ?'backdrop-blur-lg bg-opacity-30  bg-base-300':null}`}>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        <div className=" px-2 mx-2 ">
                            <h2 className={` ${scrollPosition> 0 ?'text-white':'text-error'} text-2xl font-bold font-mont `}>C.K</h2>
                        </div>
                        <div className="flex-none ml-auto hidden lg:block">
                            <ul className="menu menu-horizontal">                              
                                <li className='group'><a className=' font-semibold group-hover:text-white' href='#home'>Home</a></li>
                                <li className='group'><a className=' font-semibold group-hover:text-white' href='#about'>About</a></li>
                                <li className='group'><a className=' font-semibold group-hover:text-white' href='#skills'>Skills</a></li>
                                <li className='group'><a className=' font-semibold group-hover:text-white' href='#portfolio'>Portfolio</a></li>
                                <li className='group'><a className=' font-semibold group-hover:text-white' href='#contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* SIDE NAV  */}
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-2/3 min-h-full bg-base-200 bg-opacity-95 flex justify-center items-center">
                            <li className="group">
                                <a
                                    className="text-3xl text-white font-os transition-all duration-300 flex items-start group-hover:translate-x-3"
                                    href="#home"
                                >
                                    <span className="text-xl font-mont me-1">01</span>
                                    Home
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    className="text-3xl text-white font-os transition-all duration-300 flex items-start group-hover:translate-x-3"
                                    href="#about"
                                >
                                    About
                                    <span className="text-xl font-mont me-1">02</span>
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    className="text-3xl text-white font-os transition-all duration-300 flex items-start group-hover:translate-x-3"
                                    href="#skills"
                                >
                                    <span className="text-xl font-mont me-1">03</span>
                                    Skills
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    className="text-3xl text-white font-os transition-all duration-300 flex items-start group-hover:translate-x-3"
                                    href="#portfolio"
                                >
                                    <span className="text-xl font-mont me-1">04</span>
                                    Portfolio
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    className="text-3xl text-white font-os transition-all duration-300 flex items-start group-hover:translate-x-3"
                                    href="#contact"
                                >
                                    Contact
                                    <span className="text-xl font-mont me-1">05</span>
                                </a>
                            </li>                           
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default Navbar