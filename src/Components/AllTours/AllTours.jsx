import React from 'react'
import usePlaceData from '../../hooks/usePlaceData';
import PlaceCard from '../PlaceCard/PlaceCard';

const AllTours = () => {
    const [places] = usePlaceData();
    return (
        <div className=' min-h-screen w-full'>
            <div className=' tours text-center bg py-32 mb-8'>
                <h3 className='text-xl font-semibold'>All Tours</h3>

            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col pb-12'>
                    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4'>
                        {
                            places?.map((place, i) => (<PlaceCard key={i} place={place}></PlaceCard>))
                        }
                    </div>
                </div>
            </div>


        </div>

    )
}

export default AllTours