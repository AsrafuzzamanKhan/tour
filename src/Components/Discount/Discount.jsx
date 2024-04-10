import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion"
import { fadeIn } from '../../Animation/Varients';
const Discount = () => {

    return (
        <div className='bg-gray-200 my-12 py-12'>
            <div className='container mx-auto px-[2vw] lg:px-0 '>
                <div className='flex flex-col items-center md:flex-row gap-4'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex-1'>
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/about-one-img-1.e526a0a5.png" alt="" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex-1 flex flex-col items-start justify-between'>
                        <div className='mb-10'>
                            <h2 className='text-2xl italic text-orange-600'>Get to know us
                            </h2>
                            <h1 className='font-bold text-5xl lg:text-7xl mt-2'>Plan Your Trip with Trevily</h1>

                        </div>
                        <p className='text-lg leading-noraml mb-4'>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                        <div className='gap-4 flex flex-col mb-8'>
                            <div className='flex items-center gap-4'>
                                <FaCheckCircle className='text-orange-600' />
                                <p className='font-semibold'>
                                    Invest in your simply neighborhood</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaCheckCircle className='text-orange-600' />
                                <p className='font-semibold'>
                                    Support people in free text extreme need</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaCheckCircle className='text-orange-600' />
                                <p className='font-semibold'>
                                    Largest global industrial business community</p>
                            </div>
                        </div>
                        <button className='px-4 py-2 bg-orange-600 text-white uppercase font-semibold rounded-xl'>Book with us now</button>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Discount