import React, { useEffect } from 'react'
import ReservationHeader from '../components/Reservation/ReservationHeader'
import BookTable from '../components/Home/BookTable'
import ReservationContent from '../components/Reservation/ReservationContent'
const Reservation = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <ReservationHeader />
            <BookTable />
            <ReservationContent />
        </>
    )
}

export default Reservation