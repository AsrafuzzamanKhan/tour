import React from 'react'
import Navbar from '../Shared/Navber/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
// import LocomotiveScroll from 'locomotive-scroll'

const Root = () => {
    // const locomotiveScroll = new LocomotiveScroll();
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root