import React from 'react'
import { useParams } from 'react-router-dom'
import usePlaceData from '../../hooks/usePlaceData';
import { FaRegClock } from "react-icons/fa6";
import { LuUserCircle2 } from "react-icons/lu";
import { LuPlane } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";



const PlaceDetails = () => {
    const [places] = usePlaceData()
    const { id } = useParams();
    const intId = parseInt(id)
    const placeDetails = places.find(pl => pl.id === intId)
    console.log(placeDetails);
    if (!placeDetails) {
        return <p>loading</p>
    }
    console.log(placeDetails);
    return (
        <div className='py-28 min-h-screen'>

            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between '>
                    <div>
                        <h1>{placeDetails?.place_name}</h1>
                        <p>$870 / Per Person</p>
                    </div>
                    {/* tour details  */}
                    <div className=' flex flex-col md:flex-row gap-4'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <FaRegClock size={30} />
                            </div>
                            <div>
                                <p>Duration</p>
                                <h4>3 Days
                                </h4>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <LuUserCircle2
                                    size={30} />
                            </div>
                            <div>
                                <p>Min Age</p>
                                <h4>12+
                                </h4>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <LuPlane size={30} />
                            </div>
                            <div>
                                <p>Tour Type</p>
                                <h4>Adventure, Fun
                                </h4>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <IoLocationOutline size={30} />
                            </div>
                            <div>
                                <p>
                                    Location</p>
                                <h4>Los Angeles
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* over view  */}

                <div className='flex'>
                    <div className='flex-1'>
                        <h1>Over view</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat quo sit atque repudiandae similique debitis impedit! Voluptatibus cum exercitationem soluta aut minima iusto eos, laboriosam ratione tenetur debitis perspiciatis et neque repudiandae dicta qui commodi voluptas vero. Corporis, nesciunt quod consequatur rerum nulla perspiciatis debitis cupiditate accusantium voluptates nostrum hic cum totam, odit perferendis delectus, temporibus officiis error aliquam harum. Pariatur cum molestias iure eligendi perferendis natus voluptates modi molestiae commodi fugiat debitis vero, rem consectetur hic non beatae libero praesentium consequatur repellendus animi ratione soluta, similique ducimus. Eaque aut officia consectetur deleniti minus reiciendis doloribus dolores, at eveniet?</p>
                    </div>
                    <div className='flex-1'>
                        <h1>Book Tour</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails