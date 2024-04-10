import React from 'react'
import { useParams } from 'react-router-dom'
import usePlaceData from '../../hooks/usePlaceData';
const PlaceDetails = () => {
    const [places] = usePlaceData()
    const { id } = useParams();
    const intId = parseInt(id)
    const placeDetails = places.find(pl => pl.id === intId)
    if (!placeDetails) {
        return <p>loading</p>
    }
    console.log(placeDetails);
    return (
        <div className='py-28 min-h-screen'>

            <div>
                {placeDetails?.place_name}
            </div>
        </div>
    )
}

export default PlaceDetails