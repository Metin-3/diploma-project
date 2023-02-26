import React from 'react';
import '../../styles/homeSeafood/seafoodTable.css';

const SeafoodTable = () => {
    return (
        <section id='seafood-table'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='seafood-table-header'>
                            <h2>Book a</h2>
                            <h1>Table</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className='table-content'>Opening Hour <span>8:00</span> AM - <span>10:00</span> PM, every day on week.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3 my-2">
                        <div>
                            <input type="time" className='w-100 py-2 px-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3 my-2">
                        <div>
                            <input type="date" className='w-100 py-2 px1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3 my-2">
                        <div>
                            <select name="people" id="person" className='w-100 py-2 px-1'>
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
                    <div className="col-sm-12 col-md-4 col-lg-3 my-2">
                        <div>
                            <button className='w-100 py-2 px-1'>BOOK A TABLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeafoodTable