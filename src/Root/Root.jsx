import React from 'react'
import Navbar from '../Shared/Navber/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root