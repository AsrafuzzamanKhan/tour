import React from 'react'
import './Tours.css'
import { useParams } from 'react-router-dom'
import usePlaceData from '../../hooks/usePlaceData';
import PlaceCard from '../PlaceCard/PlaceCard';

const Tours = () => {
    const [places] = usePlaceData();
    const { continent } = useParams();
    console.log(continent);
    const selectedContinent = continent;
    const filteredContinent = places?.filter(item => item.place_continent === selectedContinent);

    return (
        <div className=' min-h-screen w-full'>
            <div className=' tours text-center bg py-32 mb-8'>
                <h3 className='text-xl font-semibold'>Destination</h3>
                <h1 className='text-4xl font-medium'>{continent}</h1>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4'>
                        {
                            filteredContinent?.map((place, i) => (<PlaceCard key={i} place={place}></PlaceCard>))
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Tours