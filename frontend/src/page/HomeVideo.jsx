import React from 'react'
import VideoHeader from '../components/HomeVideo/VideoHeader'
import BookTable from '../components/Home/BookTable'
import Events from '../components/Home/Events'
import Menu from '../components/Home/Menu'
import New from '../components/Home/New'
const HomeVideo = () => {
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