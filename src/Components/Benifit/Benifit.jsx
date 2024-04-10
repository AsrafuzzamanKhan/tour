import React from 'react'
import './Benifit.css'
import { motion } from "framer-motion"
import { fadeIn } from '../../Animation/Varients';
import earth from '../../assets/icon-earth.png'
import pro from '../../assets/logo-02.png'
const Benifit = () => {
    return (
        <div className='benifit'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row px-[2vw] lg:px-0 items-center justify-center gap-4 py-6'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex-1 flex items-center justify-center'>
                        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-xl w-full object-cover' />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex-1 flex flex-col justify-between backdrop-blur-2xl p-4 rounded-lg text-white'>
                        <div className='text-center mb-8'>
                            <h3 className='text-2xl italic text-orange-600'>Our benefit lists</h3>
                            <h1 className='text-5xl font-semibold'>Why Choose Tevily</h1>
                        </div>
                        <p className='mt-4'>There are many variations of passages of Lorem Ipsum is simply free text available in the market for you, but the majority have suffered alteration in some form.</p>
                        <div className='flex flex-col gap-4 mt-8'>
                            <div className='flex justify-center items-center gap-8'>
                                <img width={50} height={50} src={pro} alt="" />
                                <div>
                                    <h5>Professional and Certified</h5>
                                    <p className=''>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-8'>
                                <img width={50} height={50} src={earth} alt="" />
                                <div>
                                    <h5>Get Instant Tour Bookings</h5>
                                    <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Benifit