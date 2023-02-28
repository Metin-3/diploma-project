import React, { useEffect } from 'react'
import EventHeader from '../components/Event/EventHeader'
import EventDetail from '../components/EventDetail/EventDetail'

const Detail = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <EventHeader />
            <EventDetail />
        </>
    )
}

export default Detail