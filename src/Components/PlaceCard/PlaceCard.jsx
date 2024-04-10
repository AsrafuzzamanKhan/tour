import React from 'react'
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
    const { id, place_name, place_continent, image, description } = place;
    return (
        <Link to={`/tour/${id}`}>
            <div className='border flex flex-col rounded'>
                <div className='flex-1 '>
                    <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='flex-1 p-4'>
                    <p className='font-semibold'>{place_name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCard