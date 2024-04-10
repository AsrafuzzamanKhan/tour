import React from 'react'
import { Carousel } from "flowbite-react";
import img1 from '../../assets/images/Sajek.png'
import heroImg from '../../assets/images/hero.png'
import bg from '../../assets/bgVideo.mp4'
const Hero = () => {
    return (
        <div className=" w-full ">

            <video autoPlay muted loop src={bg}
                className='w-full h-[80vh] object-cover'>
            </video>
            {/* hero text  */}
            <div className='  absolute w-full h-[80vh] flex top-0 justify-center items-center  '>
                <div className='backdrop-blur-md flex flex-col justify-center items-center py-4 px-8 rounded-full'>
                    <h1 className='text-3xl font-bold'>Travel & Adventures</h1>
                    <p className='text-lg font-semibold'>Where would you like to go</p>
                </div>
            </div>
        </div>
    )
}

export default Hero

// < div className = " max-w-screen-2xl mx-auto min-h-screen h-screen " >
//     <Carousel className='w-full mx-auto'>
//         <div className="flex ">
//             {/* hero text  */}
//             <div className='flex-1 bg-green-600'>
//                 <h1>Travel & Adventures</h1>
//                 <p>Where would you like to go</p>
//             </div>
//             <div className='flex-1 bg-red-700'>
//                 <img src={img1} alt="" className='w-96' />
//             </div>
//         </div>

//     </Carousel>
//         </div >