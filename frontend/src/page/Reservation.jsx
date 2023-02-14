import React from 'react'
import ReservationHeader from '../components/Reservation/ReservationHeader'
import BookTable from '../components/Home/BookTable'
import ReservationContent from '../components/Reservation/ReservationContent'
const Reservation = () => {
    return (
        <>
            <ReservationHeader />
            <BookTable />
            <ReservationContent />
        </>
    )
}

export default Reservation