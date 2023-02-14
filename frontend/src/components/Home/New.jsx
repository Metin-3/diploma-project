import React from 'react';
import '../../styles/home/new.css'
import from1 from '../../images/from1.webp';
import from2 from '../../images/from2.webp';
import from3 from '../../images/from3.webp';
import { Link } from 'react-router-dom';
import ins1 from '../../images/ins1.webp';
import ins2 from '../../images/ins2.webp';
import ins3 from '../../images/ins3.jpg';
import ins4 from '../../images/ins4.webp';
import ins5 from '../../images/ins5.webp';
import ins6 from '../../images/ins6.jpg';
import ins7 from '../../images/ins7.webp';
import ins8 from '../../images/ins8.webp';
import ins9 from '../../images/ins9.webp';


const New = () => {
    return (
        <section id="new">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='new-header'>
                            <p>What</p>
                            <h1>NEW?</h1>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className="new-card">
                            <div className='from-blog-header'>
                                <button className='slide-icon' type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev"><i className="fa-solid fa-arrow-left"></i></button>
                                <h5>FROM BLOG</h5>
                                <button className='slide-icon' type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next"><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                            <div className='from-blog-slider'>
                                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="10000">
                                            <div className='from-slider-inner'>
                                                <div className='from-slider-image'>
                                                    <img src={from1} alt="..." />
                                                </div>
                                                <div className="from-slider-content">
                                                    <h4><Link to="event" className='from-slider-content-link'>Table</Link></h4>
                                                    <p>07 <br />Jul</p>
                                                </div>
                                                <div>
                                                    <p><em>Post by <span>Admin</span></em></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <div className='from-slider-inner'>
                                                <div className='from-slider-image'>
                                                    <img src={from2} alt="..." />
                                                </div>
                                                <div className="from-slider-content">
                                                    <h4><Link to="event" className='from-slider-content-link'>Restaurant</Link></h4>
                                                    <p>07 <br />Jul</p>
                                                </div>
                                                <div>
                                                    <p><em>Post by <span>Admin</span></em></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className='from-slider-inner'>
                                                <div className='from-slider-image'>
                                                    <img src={from3} alt="..." />
                                                </div>
                                                <div className="from-slider-content">
                                                    <h4><Link to="event" className='from-slider-content-link'>White Wine Cheesecake</Link></h4>
                                                    <p>10 <br />Jul</p>
                                                </div>
                                                <div>
                                                    <p><em>Post by <span>Admin</span></em></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className="new-card">
                            <div className='twitter-header'>
                                <h5>TWITTER</h5>
                                <span><i className="fa-brands fa-twitter"></i></span>
                            </div>
                            <div className="twitter-content">
                                <p><Link to="https://twitter.com/realseojoe" className='twitter-link'>@realseojoe</Link> why thank you sir! We'd love to show you around 🙂 ^Dan <span className='py-3'><em>Agu 13 2014</em></span></p>

                                <p>With heartfelt thanks to YOU we have busted into the World's Top 100 ranking on Alexa! WOOHOO! <br /><Link to="https://www.envato.com/blog/australian-website-themeforest-breaks-into-worlds-top-100/" className='twitter-link'> http://t.co/IknnsXr1S1 </Link><span className='py-3'><em>Agu 12 2014</em></span></p>

                                <p>RT <Link to="https://twitter.com/envato" className='twitter-link'>@envato</Link>: #EnvatoStories: By selling one #WP theme on ThemeForest <Link to="https://twitter.com/mharis" className='twitter-link'>@mharis</Link> has been able to build a house for his entire family https://t.…<span className='py-3'><em>Agu 11 2014</em></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className="new-card">
                            <div className='inner-ins-content'>
                                <div className='inner-ins-image'>
                                    <div className='ins-img'>
                                        <img src={ins1} alt="" />
                                    </div>
                                    <div className='ins-img'>
                                        <img src={ins2} alt="" />
                                    </div>
                                    <div className='ins-img'>
                                        <img src={ins3} alt="" />
                                    </div>
                                </div>
                                <div className='inner-ins-image'>
                                    <div className='ins-img'>
                                        <img src={ins4} alt="" />
                                    </div>
                                    <div className='ins-img'>
                                        <img src={ins5} alt="" />
                                    </div>
                                    <div className='ins-img'>
                                        <img src={ins6} alt="" />
                                    </div>
                                </div>
                                <div className='inner-ins-image'>
                                    <div className='ins-img'>
                                        <img src={ins7} alt="" />
                                    </div>
                                    <div className='ins-img'>
                                        <img src={ins8} alt="" />
                                    </div>
                                    <div className='ins-img'>
                                        <img src={ins9} alt="" />
                                    </div>
                                </div>
                                <div className='ins-button'>
                                    <button><Link to="https://www.instagram.com/thimpress.restaurantwp/" className='ins-link'><i className="fa-brands fa-instagram mx-2"></i> Follow on Instagram</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default New