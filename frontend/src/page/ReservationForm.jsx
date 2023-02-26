import React from 'react';
import ReservationFormHeader from '../components/ReservationForm/ReservationFormHeader';
import ReservationContent from '../components/Reservation/ReservationContent'
import ReservationFormTable from '../components/ReservationForm/ReservationFormTable';

const ReservationForm = () => {
    return (
        <>
            <ReservationFormHeader />
            <ReservationFormTable />
            <ReservationContent />
        </>
    )
}

export default ReservationForm