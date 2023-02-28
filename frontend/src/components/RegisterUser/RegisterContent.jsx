import React from 'react'
import { Link } from 'react-router-dom';
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

const RegisterContent = () => {
    return (
        <section id='event-content'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 xol-lg-9 col-md-12 col-sm-12">
                        <hr />
                        <div className='user-login'>
                            <form action="">
                                <div>
                                    <label htmlFor="username">Username*</label>
                                    <input type="text" id='username' />
                                </div>
                                <div>
                                    <label htmlFor="password">Password*</label>
                                    <input type="password" id='password' />
                                </div>
                                <div>
                                    <label htmlFor="confirm">Confirm password*</label>
                                    <input type="password" id='confirm' />
                                </div>
                                <div className='user-login-remember'>
                                    <input type="checkbox" id='remember' />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <Link to="../login">
                                <button>REGISTER</button>
                                </Link>
                            </form>
                            <div>
                                <Link className='login-register-link' to="../login">Login</Link>
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

export default RegisterContent