import React, { useEffect } from 'react';
import ReservationFormHeader from '../components/ReservationForm/ReservationFormHeader';
import ReservationContent from '../components/Reservation/ReservationContent'
import ReservationFormTable from '../components/ReservationForm/ReservationFormTable';

const ReservationForm = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <ReservationFormHeader />
            <ReservationFormTable />
            <ReservationContent />
        </>
    )
}

export default ReservationForm