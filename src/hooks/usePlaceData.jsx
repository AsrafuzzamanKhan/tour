import React, { useEffect, useState } from 'react'

const usePlaceData = () => {
    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/places.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaces(data)
                setLoading(false)
            })
    }, []);
    return [places, setPlaces]
}

export default usePlaceData