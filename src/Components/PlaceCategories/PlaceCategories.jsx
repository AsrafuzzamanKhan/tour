import React from 'react'
import img1 from '../../assets/images/Sajek.png'
import img2 from '../../assets/images/sundorbon.png'
import usePlaceData from '../../hooks/usePlaceData';
import { Link } from 'react-router-dom';

const PlaceCategories = () => {
    const [places] = usePlaceData();
    const uniqueCategories = [...new Set(places.map(item => item.place_continent))];
    console.log(uniqueCategories);
    return (
        <div className='w-full '>
            <div className='container mx-auto px-[2vw] lg:px-0'>
                <div className='text-center py-8'>
                    <h3 className='text-2xl'>Destination lists
                    </h3>
                    <h1 className='text-4xl font-bold'>Go Exotic Places</h1>
                    <p>{uniqueCategories.length}</p>
                </div>
                <div className='grid md:grid-cols-3 auto-rows-[220px]'>
                    {
                        uniqueCategories.map((continent, i) => (
                            <div key={continent} className={`relative group items-center justify-center overflow-hidden cursor-pointer p-4 rounded-lg ${i === 1 && "md:col-span-2"} ${i === 5 && "md:col-span-2"}`}>
                                <div className=' flex justify-center items-center '>
                                    <img src='https://images.unsplash.com/photo-1615039666131-964929ad0f1e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg' />
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-b group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:p-4 rounded-lg'>

                                </div>
                                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 '>
                                    <h1 className='text-white text-3xl font-bold'>{continent}</h1>
                                    <p className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus amet optio fugit id ratione, aperiam vitae quisquam nostrum officia vero.</p>

                                    <button className='btn px-4 py-2 rounded font-semibold text-md text-white bg-orange-600'> <Link to={`/tours/${continent}`}>All Destinations</Link></button>

                                </div>
                            </div>
                        ))
                    }




                </div>
            </div>
        </div>
    )
}

export default PlaceCategories