import React from 'react';
import '../../styles/about/aboutSince.css';

const AboutSince = () => {
    return (
        <section id='about-since'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='about-since-header'>
                            <p>Since</p>
                            <h1>1945</h1>
                        </div>
                    </div>
                    <div className="col-8">
                        <p className='about-since-text1 pt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here, making it look like readable English.</p>
                    </div>
                    <div className="col-8">
                        <p className='about-since-text2 py-4'>" Nullam et lorem magna, in consectetur erat. Aliquam fermentum fringilla libero a vulputate. Curabitur non arcu non tortor semper dictum."</p>
                    </div>
                </div>
            </div>
            <div className="since-paralax"></div>
        </section>
    )
}

export default AboutSince