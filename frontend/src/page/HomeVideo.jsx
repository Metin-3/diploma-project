import React, { useEffect } from 'react'
import VideoHeader from '../components/HomeVideo/VideoHeader'
import BookTable from '../components/Home/BookTable'
import Events from '../components/Home/Events'
import Menu from '../components/Home/Menu'
import New from '../components/Home/New'
const HomeVideo = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <VideoHeader />
            <BookTable />
            <Menu />
            <Events />
            <New />
        </>
    )
}

export default HomeVideo