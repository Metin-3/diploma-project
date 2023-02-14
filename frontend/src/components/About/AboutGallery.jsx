import React from 'react';
import '../../styles/about/aboutGallery.css';
import gallery1 from '../../images/gallery1.jpg'
import gallery2 from '../../images/event2.webp'
import gallery3 from '../../images/gallery2.webp'
import gallery4 from '../../images/reservationHeader.webp'
import gallery5 from '../../images/gallery3.webp'

const AboutGallery = () => {
    return (
        <section id="about-gallery">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='about-standards-header'>
                            <p>Our</p>
                            <h1>GALLERY</h1>
                        </div>
                        <p className='text-center text-secondary py-5'>There are many variations of passages of Lorem Ipsum available.</p>
                    </div>
                    <div className="col-xl-9 col-lg-10 col-md-10 col-sm-12">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item gallery-carousel-item active" data-bs-interval="10000">
                                    <img src={gallery1} className="w-100" alt="..." />
                                </div>
                                <div className="carousel-item gallery-carousel-item" data-bs-interval="2000">
                                    <img src={gallery2} className="w-100" alt="..." />
                                </div>
                                <div className="carousel-item gallery-carousel-item">
                                    <img src={gallery3} className="w-100" alt="..." />
                                </div>
                                <div className="carousel-item gallery-carousel-item">
                                    <img src={gallery4} className="w-100" alt="..." />
                                </div>
                                <div className="carousel-item gallery-carousel-item">
                                    <img src={gallery5} className="w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <i className="fa-solid fa-arrow-left-long gallery-slide-icon"></i>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <i className="fa-solid fa-arrow-right-long gallery-slide-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutGallery