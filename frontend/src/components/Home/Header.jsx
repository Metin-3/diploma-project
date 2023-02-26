import React from 'react';
import slide1 from "../../images/hero_slide_1.webp";
import slide2 from "../../images/hero_slide_2.webp";
import '../../styles/home/header.css'

const Header = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item  animate__animated animate__pulse active">
                        <img src={slide1} className="d-block w-100" alt="slide" />
                        <div className='slide-content'>
                            <h2>Resca</h2>
                            <h1>Restaurant</h1>
                            <p>Lawrence & Frederick</p>
                            <div className='text-center'>
                                <button>Look menu</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item animate__animated animate__pulse">
                        <img src={slide2} className="d-block w-100" alt="slide" />
                        <div className='slide-content'>
                            <h2>Bienvenue</h2>
                            <h1>Samll panisse</h1>
                            <p>Lawrence & Frederick</p>
                            <div className='text-center'>
                                <button>Detail</button>
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

export default Header