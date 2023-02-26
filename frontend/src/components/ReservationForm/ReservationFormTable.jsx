import React from 'react'

const ReservationFormTable = () => {
    return (
        <section id='book-table'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='table-header'>
                            <h2>Book a</h2>
                            <h1>Table</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className='table-content text-dark'>Opening Hour <span>8:00</span> AM - <span>10:00</span> PM, every day on week.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-4">
                        <div>
                            <input type="text" placeholder='First name' className='border-secondary rounded-0 w-100 py-2 px-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-4">
                        <div>
                            <input type="email" placeholder='Your email' className='border-secondary rounded-0 w-100 py-2 px-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-4">
                        <div>
                            <input type="text" placeholder='Last name' className='border-secondary rounded-0 w-100 py-2 px-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-4">
                        <div>
                            <input type="time" className='border-secondary rounded-0 w-100 py-2 px-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-4">
                        <div>
                            <input type="date" className='border-secondary rounded-0 w-100 py-2 px1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-4">
                        <div>
                            <select name="people" id="person" className='border-secondary rounded-0 w-100 py-2 px-1'>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="6">6 People</option>
                                <option value="7">7 People</option>
                                <option value="8">8 People</option>
                                <option value="9">9 People</option>
                                <option value="10">10 People</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <div>
                            <button className='rounded-0 w-100 py-2 px-1'>BOOK A TABLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReservationFormTable