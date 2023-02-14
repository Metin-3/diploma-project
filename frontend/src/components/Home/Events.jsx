import React, { useState } from 'react';
import '../../styles/home/events.css';
import event1 from '../../images/event1.webp';
import event2 from '../../images/event2.webp'
import event3 from '../../images/event3.webp'
import { Link } from 'react-router-dom';


const Events = () => {

    let time = new Date().toLocaleTimeString();
    let timeMinutes = new Date().getMinutes()
    let timeHours = new Date().getHours()
    let day = new Date().getDate()

    const [seconds, setSeconds] = useState(time);
    const [minutes, setMinutes] = useState(timeMinutes);
    const [hours, setHours] = useState(timeHours);

    const updateSeconds = () => {
        let time = new Date().getSeconds();
        setSeconds(time);
    };

    const updateMinutes = () => {
        let timeMinutes = new Date().getMinutes();
        setMinutes(timeMinutes)
    }

    const updateHours = () => {
        let timeHours = new Date().getHours();
        setHours(timeHours);
    }

    setInterval(updateSeconds, 1000);
    setInterval(updateMinutes, 1);
    setInterval(updateHours, 1);


    return (
        <section id="events">
            <div className="events-paralax">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='events-inner'>
                                <div className='events-header'>
                                    <p>Upcomming</p>
                                    <h1>EVENTS</h1>
                                </div>
                                <div className='inner-slider'>
                                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className='carousel-item-content'>
                                                    <div className='event-slider-img'>
                                                        <img src={event1} className="w-100 h-100" alt="..." />
                                                    </div>
                                                    <div className='inner-event-slider-content'>
                                                        <h5>Wine Testings</h5>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur ad nesciunt! Quo eos reprehenderit rem aperiam consequuntur totam culpa?</p>
                                                        <h5>02:00 AM Sunday - 20 November 2016</h5>
                                                        <Link to="/" className='button'>VIEW DETAIL</Link>
                                                    </div>
                                                    <div className='inner-date'>
                                                        <div className='date-boxs'>
                                                            <div className='date-box'>
                                                                <p>{day} <span>Day</span></p>
                                                            </div>
                                                            <div className='date-box'>
                                                                <p>{hours} <span>Hours</span></p>
                                                            </div>
                                                        </div>
                                                        <div className='date-boxs'>
                                                            <div className='date-box'>
                                                                <p>{minutes} <span>Minutes</span></p>
                                                            </div>
                                                            <div className='date-box'>
                                                                <p>{seconds} <span>Seconds</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carousel-item-content">
                                                    <div className='event-slider-img'>
                                                        <img src={event2} className="w-100 h-100" alt="..." />
                                                    </div>
                                                    <div className='inner-event-slider-content'>
                                                        <h5>Wine Testings</h5>
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nihil distinctio sequi, explicabo eaque beatae at consequatur deleniti provident voluptatibus.</p>
                                                        <h5>02:00 AM Sunday - 20 November 2016</h5>
                                                        <Link to="/" className='button'>VIEW DETAIL</Link>
                                                    </div>
                                                    <div className='inner-date'>
                                                        <div className='date-boxs'>
                                                            <div className='date-box'>
                                                                <p>{day} <span>Day</span></p>
                                                            </div>
                                                            <div className='date-box'>
                                                                <p>{hours} <span>Hours</span></p>
                                                            </div>
                                                        </div>
                                                        <div className='date-boxs'>
                                                            <div className='date-box'>
                                                                <p>{minutes} <span>Minutes</span></p>
                                                            </div>
                                                            <div className='date-box'>
                                                                <p>{seconds} <span>Seconds</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carousel-item-content">
                                                    <div className='event-slider-img'>
                                                        <img src={event3} className="w-100 h-100" alt="..." />
                                                    </div>
                                                    <div className='inner-event-slider-content'>
                                                        <h5>Wine Testings</h5>
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita suscipit nam maxime magnam ducimus minus quos reiciendis deleniti quo voluptatibus!</p>
                                                        <h5>02:00 AM Sunday - 20 November 2016</h5>
                                                        <Link to="/" className='button'>VIEW DETAIL</Link>
                                                    </div>
                                                    <div className='inner-date'>
                                                        <div className='date-boxs'>
                                                            <div className='date-box'>
                                                                <p>{day} <span>Day</span></p>
                                                            </div>
                                                            <div className='date-box'>
                                                                <p>{hours} <span>Hours</span></p>
                                                            </div>
                                                        </div>
                                                        <div className='date-boxs'>
                                                            <div className='date-box'>
                                                                <p>{minutes} <span>Minutes</span></p>
                                                            </div>
                                                            <div className='date-box'>
                                                                <p>{seconds} <span>Seconds</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                        <button className='events-slider-button events-slider-button-active' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                        <button className='events-slider-button' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button className='events-slider-button' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Events