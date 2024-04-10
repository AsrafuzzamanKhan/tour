import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <section className='services  bg-fixed'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-8 md:flex-row items-center  py-12 px-[2vw] md:px-0'>
                    <div className='flex-1'>
                        <h3 className='text-orange-600 italic text-3xl font-semibold'>
                            Are you ready to travel?</h3>
                        <h1 className='text-4xl max-w-lg font-semibold mt-2'>Tevily is a World Leading Online Tour Booking Platform</h1>
                    </div>
                    <div className='flex-1 flex flex-wrap gap-4'>
                        <div className='h-32 w-32 border rounded bg-white text-black'>
                            <img src="" alt="" />
                            <p>Wildlife
                                Tours</p>
                        </div>
                        <div className='h-32 w-32 border'>
                            <img src="" alt="" />
                            <p>Wildlife
                                Tours</p>
                        </div>
                        <div className='h-32 w-32 border'>
                            <img src="" alt="" />
                            <p>Wildlife
                                Tours</p>
                        </div>
                        <div className='h-32 w-32 border'>
                            <img src="" alt="" />
                            <p>Wildlife
                                Tours</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services