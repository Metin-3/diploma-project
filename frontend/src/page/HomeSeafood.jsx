import React, { useEffect } from 'react'
import SeafoodEvent from '../components/HomeSeafood/SeafoodEvent'
import SeafoodGoToTop from '../components/HomeSeafood/SeafoodGoToTop'
import SeafoodHeader from '../components/HomeSeafood/SeafoodHeader'
import SeafoodMenu from '../components/HomeSeafood/SeafoodMenu'
import SeafoodNew from '../components/HomeSeafood/SeafoodNew'
import SeafoodStory from '../components/HomeSeafood/SeafoodStory'
import SeafoodTable from '../components/HomeSeafood/SeafoodTable'

const HomeSeafood = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <SeafoodHeader />
            <SeafoodStory />
            <SeafoodTable />
            <SeafoodMenu />
            <SeafoodEvent />
            <SeafoodNew />
            <SeafoodGoToTop />
        </>
    )
}

export default HomeSeafood