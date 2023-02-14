import React from 'react';
import '../../styles/reservation/reservationContent.css'


const ReservationContent = () => {
    return (
        <section id="reservation-content">
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-4">
                        <div className='reservation-content-left'>
                            <h1>HOW DO I MAKE RESERVATIONS</h1>
                            <p>In order to make a reservation on behalf of someone else, you must register your OpenTable account as an Administrative Professional.</p>
                            <p>This feature allows executive assistants, travel planners, recruiters, and other administrative professionals to easily make reservations on behalf of others and earn valuable OpenTable Dining Points.</p>
                            <h5><em>The Resca Restaurant.</em></h5>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-4">
                        <div className='reservation-content-right'>
                            <h1>RESERVATION SUPPORT</h1>
                            <p>Address <br />
                                1329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            <p>Telephone <br />
                                <a href="tel:+00 123 456 789">+00 123 456 789</a></p>
                            <p>Toll Free <br />
                                <a href="tel:+00 123 456 789">+00 123 456 789</a></p>
                            <p>Email <br />
                                <a href="mailto:">reservation@resca.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReservationContent