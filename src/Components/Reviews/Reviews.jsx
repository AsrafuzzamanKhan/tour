import React from 'react'
import { FaStar } from "react-icons/fa";


const Reviews = () => {
    return (
        <section className='pb-12'>
            <div className='container mx-auto'>
                <div className='py-12'>
                    <h1 className=' max-w-md mx-auto text-4xl text-center font-semibold'>What our customers are saying about us
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='flex border gap-4 p-8 rounded'>
                        <div className='flex-none'>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 h-20 rounded-full object-cover' />
                        </div>
                        <div className='flex-1 flex flex-col gap-6'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2>Brittany Clark
                                    </h2>
                                    <p>San Francisco
                                    </p>
                                </div>
                                <div>
                                    <FaStar />

                                </div>
                            </div>
                            <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                        </div>
                    </div>
                    <div className='flex border gap-4 p-8 rounded'>
                        <div className='flex-none'>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 h-20 rounded-full object-cover' />
                        </div>
                        <div className='flex-1 flex flex-col gap-6'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2>Brittany Clark
                                    </h2>
                                    <p>San Francisco
                                    </p>
                                </div>
                                <div>
                                    <FaStar />

                                </div>
                            </div>
                            <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                        </div>
                    </div>
                    <div className='flex border gap-4 p-8 rounded'>
                        <div className='flex-none'>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 h-20 rounded-full object-cover' />
                        </div>
                        <div className='flex-1 flex flex-col gap-6'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2>Brittany Clark
                                    </h2>
                                    <p>San Francisco
                                    </p>
                                </div>
                                <div>
                                    <FaStar />

                                </div>
                            </div>
                            <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Reviews