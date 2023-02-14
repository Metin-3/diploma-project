import React from 'react';
import '../../styles/event/eventContent.css';
import { Link } from 'react-router-dom';
import event1 from '../../images/event1.webp';
import event2 from '../../images/event2.webp';
import event3 from '../../images/event3.webp';
import event4 from '../../images/event4.webp';
import event5 from '../../images/event5.webp';
import event6 from '../../images/from1.webp';
import event7 from '../../images/event6.webp';
import event8 from '../../images/event7.webp';
import event9 from '../../images/event8.webp';
import logoAbout from '../../images/logoAbout.webp';
import ins1 from '../../images/ins1.webp';
import ins2 from '../../images/ins2.webp';
import ins3 from '../../images/ins3.jpg';
import ins4 from '../../images/ins4.webp';
import ins5 from '../../images/ins5.webp';
import ins6 from '../../images/ins6.jpg';
import ins7 from '../../images/ins7.webp';
import ins8 from '../../images/ins8.webp';
import ins9 from '../../images/ins9.webp';


const EventContent = () => {
    return (
        <section id='event-content'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 xol-lg-9 col-md-12 col-sm-12">
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event4} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Big Sale</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>11 <br /><span>MAY</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 02:30-20:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> LONDON</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event5} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Live Music</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>01<br /><span>SEP</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 16:00-22:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> LIVERPOOL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event6} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Wine Tastings</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>20 <br /><span>NOV</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 02:30-04:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> LIVERPOOL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event1} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Free Drinks</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>31 <br /><span>AUG</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 02:30-20:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> PARIS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event2} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Live Music</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>01<br /><span>SEP</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 16:00-22:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> LIVERPOOL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event3} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Wine Tastings</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>20 <br /><span>NOV</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 02:30-04:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> LONDON</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event7} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Food/Wine Pairings</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>15 <br /><span>MAR</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 01:00-23:00</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> PARIS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event8} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Live Music</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>01<br /><span>SEP</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 16:00-22:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> LIVERPOOL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3">
                                <div className="card event-card h-100">
                                    <div className='event-card-img'>
                                        <img src={event9} className="card-img-top" alt="..." />
                                        <div className='event-read-more'>
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                    <div className="card-body card-event-content">
                                        <h5 className="card-title py-3"><Link to="" className='card-title-link'>Wine Tastings</Link></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos</p>
                                    </div>
                                    <div className="card-event-footer px-3">
                                        <h6>20 <br /><span>NOV</span></h6>
                                        <div className='card-time'>
                                            <span className='d-block py-2'><i className="fa-regular fa-clock"></i> 02:30-04:30</span>
                                            <span className='d-block py-2'><i className="fa-solid fa-location-dot"></i> BARCELONA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xol-lg-3 col-md-12 col-sm-12">
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>ABOUT BLOG</h6>
                                </div>
                                <div className='about-blog-content'>
                                    <div>
                                        <img src={logoAbout} alt="" />
                                    </div>
                                    <p className='mt-2'>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt.</p>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>CATEGORIES</h6>
                                </div>
                                <ul className='categories-list'>
                                    <li><Link to="" className='categories-list-link'>DESIGN (5)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>EVENT (2)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>GALLERY (3)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>RECIPES (14)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>UNCATOGORIZED (4)</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>INSTAGRAM</h6>
                                </div>
                                <div className='event-inner-ins-image'>
                                    <div className='event-ins-img'>
                                        <img src={ins1} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins2} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins3} alt="" />
                                    </div>
                                </div>
                                <div className='event-inner-ins-image'>
                                    <div className='event-ins-img'>
                                        <img src={ins4} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins5} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins6} alt="" />
                                    </div>
                                </div>
                                <div className='event-inner-ins-image'>
                                    <div className='event-ins-img'>
                                        <img src={ins7} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins8} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins9} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>RECENT POSTS</h6>
                                </div>
                                <div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>White Wine Cheesecake</Link>
                                        <p><em>July 7, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>Mac and Cheese Waffles</Link>
                                        <p><em>May 11, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>Easy Sparkling Sangria</Link>
                                        <p><em>May 5, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>6 Mixers You Should Absolutely Never Use</Link>
                                        <p><em>May 5, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>The 5 Biggest Myths About Vodka</Link>
                                        <p><em>May 5, 2015</em></p>
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

export default EventContent