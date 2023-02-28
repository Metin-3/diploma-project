import React, { useEffect } from 'react';
import EventContent from '../components/Event/EventContent';
import EventHeader from '../components/Event/EventHeader';

const Events = () => {

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
            <EventContent />
        </>
    )
}

export default Events