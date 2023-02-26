import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../styles/eventDetail/eventDetail.css';
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


const EventDetail = () => {

    //! GET EVENTS DETAIL
    const { id } = useParams()
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        fetch("http://localhost:8080/event/" + id)
            .then(res => res.json())
            .then(data =>
                setEvents(data)
            )
    }

    useEffect(() => {
        getEvents()
    })

    return (
        <section id='event-content'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 xol-lg-9 col-md-12 col-sm-12">
                        <hr />
                        <div key={events._id} className="event-inner-detail">
                            <div className='event-detail-img'>
                                <img src={events.eventImage} alt="" />
                            </div>
                            <div className='event-detail-content'>
                                <h2>{events.eventName}</h2>
                                <p>{events.eventName}</p>
                                <p>{events.eventRead}</p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Link className='me-2' to="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fkid_directed_site%3D0%26sdk%3Djoey%26u%3Dhttps%253A%252F%252Fresca.thimpress.com%252Fevents%252Flive-music%252F%26display%3Dpopup%26ref%3Dplugin%26src%3Dshare_button&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US&kid_directed_site=0"><span class="badge bg-primary"><i class="fa-brands fa-facebook"></i> Share</span></Link>

                                <Link className='me-2' to="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fresca.thimpress.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Live%20Music%20-%20Resca%20-%20Restaurant%20Theme&url=https%3A%2F%2Fresca.thimpress.com%2Fevents%2Flive-music%2F"><span class="badge bg-info"><i class="fa-brands fa-twitter"></i> Tweet</span></Link>

                                <Link className='me-2' to="https://preview.themeforest.net/item/wordpress-restaurant-theme-resca/full_screen_preview/12124219"><span class="badge bg-danger"><i class="fa-brands fa-pinterest"></i> Save</span></Link>
                            </div>
                        </div>
                        <hr />
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

export default EventDetail