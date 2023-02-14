import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import GoToTop from './GoToTop/GoToTop'
import Navbar from './Navbar/Navbar'


const MainRoot = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <GoToTop />
            <Footer />
        </>
    )
}

export default MainRoot