import React from 'react'
import Hero from '../Hero/Hero'
import PlaceCategories from '../PlaceCategories/PlaceCategories'
import Discount from '../Discount/Discount'
import PopularTour from '../PopularTour/PopularTour'
import Services from '../Services/Services'
import Reviews from '../Reviews/Reviews'
import Benifit from '../Benifit/Benifit'

const Home = () => {
    return (
        <div>
            <Hero />
            <PlaceCategories />
            <Discount />
            <PopularTour />
            <Services />
            <Reviews />
            <Benifit />
        </div>
    )
}

export default Home