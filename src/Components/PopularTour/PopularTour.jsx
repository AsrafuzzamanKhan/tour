import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Card from '../Card/Card';
import usePlaceData from '../../hooks/usePlaceData';

const PopularTour = () => {
    const [places] = usePlaceData();

    const sliceData = places.slice(0, 20)
    return (
        <div className='container mx-auto py-12'>
            <div className='text-center'>
                <h3 className='text-3xl italic'>Featured tours</h3>
                <h1 className='text-4xl font-semibold '>Most Popular Tours</h1>
            </div>
            <div>
                <Swiper
                    autoplay={{
                        delay: 3000,

                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >

                    {
                        sliceData?.map((place) => (<SwiperSlide key={place.id} className='p-12'>
                            <Card place={place} />
                        </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default PopularTour