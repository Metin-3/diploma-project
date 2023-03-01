import React from 'react';
import '../../styles/homeCoffee/coffeeStory.css';
import story1 from '../../images/coffeeStory1.webp';
import story2 from '../../images/coffeeStory2.webp';
import { Link } from 'react-router-dom';

const CoffeeStory = () => {
    return (
        <section id="coffee-story">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className='coffee-story-header'>
                            <h5>Our</h5>
                            <h1>STORY</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                            <Link to="../about">
                                <button>READ MORE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className='coffee-story-img'>
                            <img src={story1} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className='coffee-story-img'>
                            <img src={story2} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3">
                        <div className='coffee-story-content'>
                            <h4><i className="fa-regular fa-clock"></i></h4>
                            <p>Opening Hour <span>8:00 AM</span> - <span>10:00 PM</span> <br /> Monday - Sunday</p>
                            <p>Call. <a href="tel:01794 340 979">01794 340 979</a><br />
                                Email. <a href="mailto:hello@yourmail.com">hello@yourmail.com</a>
                            </p>
                            <Link to="../contact">
                                <button>GET DIRECTIONS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoffeeStory