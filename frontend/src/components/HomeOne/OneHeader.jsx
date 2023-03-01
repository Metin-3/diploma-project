import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from "../../images/homeOne1.jpg";
import slide2 from "../../images/homeOne2.jpg";

const OneHeader = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item  animate__animated animate__pulse active">
                        <img src={slide1} className="d-block w-100" alt="slide" />
                        <div className='slide-content'>
                            <h2>Welcome</h2>
                            <h1>THE RESCA</h1>
                            <p>NEW FLAWOURS</p>
                            <div className='text-center'>
                                <Link to="../menu">
                                    <button>Look menu</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item animate__animated animate__pulse">
                        <img src={slide2} className="d-block w-100" alt="slide" />
                        <div className='slide-content'>
                            <h2>Your Favorite</h2>
                            <h1>COFFEE & FRRES</h1>
                            <p>NEW FLAWOURS</p>
                            <div className='text-center'>
                                <Link to="../menu">
                                    <button>Detail</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <i className="fa-solid fa-arrow-left-long slide-next-prev-btn"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <i className="fa-solid fa-arrow-right-long slide-next-prev-btn"></i>
                </button>
            </div>
        </>
    )
}

export default OneHeader