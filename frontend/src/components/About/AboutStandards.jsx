import React from 'react'
import '../../styles/about/aboutStandards.css';

const AboutStandards = () => {
    return (
        <section id="about-standards">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='about-standards-header'>
                            <p>Our</p>
                            <h1>STANDARDS</h1>
                        </div>
                        <p className='text-center text-secondary py-5'>There are many variations of passages of Lorem Ipsum available.</p>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className='about-standards-content about-standards-content-left py-4'>
                            <h3>1. Choose music carefully.</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <div className='about-standards-content about-standards-content-left py-4'>
                            <h3>3. Keep the restaurant spotless.</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-0 d-flex justify-content-center">
                        <div className='about-standards-center'></div>

                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className='about-standards-content py-4'>
                            <h3>2. Never serve food that has expired.</h3>
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <div className='about-standards-content py-4'>
                            <h3>4. Make deliberate choices with lighting.</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-standards-paralax my-5"></div>
        </section>
    )
}

export default AboutStandards