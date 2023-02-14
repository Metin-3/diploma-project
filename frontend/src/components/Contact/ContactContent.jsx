import React from 'react';
import '../../styles/contact/contactContent.css';
import { Link } from 'react-router-dom';

const ContactContent = () => {
    return (
        <section id="contact-content">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <div className='contact-content-header'>
                                <p>Get in</p>
                                <h1>TOUCH</h1>
                            </div>
                            <p className='text-center text-secondary mb-5'>We are also active in social media. You can find us
                                on below adresses.</p>
                            <div className='text-center py-2'>
                                <p className='contact-content-icon'><i className="fa-solid fa-location-dot"></i></p>
                                <p className='contact-content-text'>329 Queensberry Street, North Melbourne
                                    VIC 3051, Australia.</p>
                            </div>
                            <div className='text-center py-3'>
                                <p className='contact-content-icon'><i class="fa-regular fa-clock"></i></p>
                                <p className='contact-content-text'>Opening Hour <span>8:00 AM</span> - <span>10:00 PM</span> <br />
                                    Monday - Sunday</p>
                                <p className='contact-content-text'>
                                    Call.<a href="tel:01794 340 979">01794 340 979</a>
                                    <br />
                                    Email.<a href="tomail:hello@yourmail.com">hello@yourmail.com</a>
                                </p>
                            </div>
                            <div className='text-center py-3'>
                                <ul className='contact-content-list'>
                                    <li>
                                        <Link to="https://www.facebook.com/" className='contact-content-list-link'>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/?lang=en" className='contact-content-list-link'>
                                            <i class="fa-brands fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.google.com/" className='contact-content-list-link'>
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/" className='contact-content-list-link'>
                                            <i class="fa-brands fa-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <div className='contact-content-header'>
                                <p>Send a</p>
                                <h1>MESSAGE</h1>
                            </div>
                            <p className='text-center text-secondary mb-5'>Do you have anything in your mind to tell us? Please don't hesitate to get in touch to us via our contact form.</p>
                            <form action="" className='contact-inner-inputs'>
                                <div className='contact-inner-input'>
                                    <input type="text" id='name' placeholder='Full Name*' />
                                    <input type="email" id='email' placeholder='Your Email*' />
                                </div>
                                <input type="text" id="subject" placeholder='Subject*' /> <br />
                                <textarea name="" id="message" rows="8" placeholder='Your Message'></textarea> <br />
                                <button>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactContent