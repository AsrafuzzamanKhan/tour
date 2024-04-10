import React from 'react'

const Card = ({ place }) => {
    const { place_name } = place;
    return (
        <div className='w-32 h-32 border'>
            <div className='flex justify-center'>
                {place_name}
            </div>
        </div>
    )
}

export default Card