import { motion } from 'framer-motion';
import React from 'react'

const Skills = () => {
    const skillsData = [
        "HTML","CSS","JAVASCRIPT","TYPESCRIPT","REACT","NEXTJS","DAISYUI","TAILWIND","FRAMER MOTION","MONGO DB","PRISMA"
    ];
    const fadeInAnimation = {
        initial:{ opacity:0 , y:100 },
        animate : (idx) => ({ 
            opacity:1 , 
            y:0 ,
            transition:{ 
                delay: 0.07 * idx, 
            },
        }),
    };

    return (
        <main id='skills' className='h-[50vh] bg-base-200'>
            <div className='h-full flex flex-col'>
                <header className='flex-1 flex justify-center items-center'>
                    <div>
                        <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold font-os uppercase flex justify-center items-center transition-all duration-300'>skills & competencies</h2>                     
                    </div>
                </header>
                {/* SKILL  */}
                <section className='flex-1 flex justify-center items-start'>
                    <ul className='flex justify-center flex-wrap p-5 gap-4 max-w-2xl'>
                        {skillsData.map((skill,idx)=>(
                            <motion.li
                                className='badge badge-secondary-outline md:text-xl font-mont font-semibold  px-5 py-5 hover:text-white'
                                key={idx}
                                variants={fadeInAnimation}
                                initial="initial"           
                                whileInView="animate"
                                viewport={{once:true}}
                                custom={idx}
                            >
                                {skill}
                            </motion.li>
                        ))}                       
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Skills