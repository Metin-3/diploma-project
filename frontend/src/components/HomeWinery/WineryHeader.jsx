import React from 'react';
import '../../styles/homeWinery/wineryHeader.css';
import slide2 from "../../images/coffeehome2.webp";
import slide1 from "../../images/coffeHome1.webp";

const WineryHeader = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item animate__animated animate__pulse  active">
                    <img src={slide1} className="d-block w-100" alt="slide" />
                    <div className='winery-slide-content'>
                        <h2 className='px-5'>Resca</h2>
                        <h1 className='px-5'>WINERY</h1>
                        <p>ONE PLACE, ONE HISTORY</p>
                        <div className='text-center'>
                            <button>CHECK OUR MENU</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item animate__animated animate__pulse">
                    <img src={slide2} className="d-block w-100" alt="slide" />
                    <div className='winery-slide-content'>
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
                <i className="fa-solid fa-arrow-left-long winery-slide-next-prev-btn"></i>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <i className="fa-solid fa-arrow-right-long winery-slide-next-prev-btn"></i>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default WineryHeader