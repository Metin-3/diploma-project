import React, { useState } from 'react';
import '../../styles/home/menu.css';
import menu1 from '../../images/menu1.webp';
import img from '../../images/hero_slide_1.webp'

const Menu = () => {

    const [food, setFood] = useState(1);

    const handleFood = (index) => {
        setFood(index)
    }


    return (
        <>
            <section id='menu'>
                <div className="paralax">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className='paralax-header'>
                                    <p>Find Our</p>
                                    <h1>MENU</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='paralax-menu'>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(1)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-burger"></i>
                                        </div>
                                        <div className='paralax-menu-content' id="headingOne">
                                            <h5 className={food === 1 ? "paralax-menu-content-active" : "paralax-menu-content"}>FOOD<p>Cake & Cookes</p></h5>
                                        </div>
                                    </div>
                                    <span className='vr text-light'></span>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(2)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-champagne-glasses"></i>
                                        </div>
                                        <div className='paralax-menu-content'>
                                            <h5 className={food === 2 ? "paralax-menu-content-active" : "paralax-menu-content"}>DRINK<p>Coffee & Beer</p></h5>
                                        </div>
                                    </div>
                                    <span className='vr text-light'></span>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(3)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-bowl-food"></i>
                                        </div>
                                        <div className='paralax-menu-content'>
                                            <h5 className={food === 3 ? "paralax-menu-content-active" : "paralax-menu-content"}>CHEF<p>Breakfast</p></h5>
                                        </div>
                                    </div>
                                    <span className='vr text-light'></span>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(4)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-martini-glass-citrus"></i>
                                        </div>
                                        <div className='paralax-menu-content'>
                                            <h5 className={food === 4 ? "paralax-menu-content-active" : "paralax-menu-content"}>COCKTAIL<p>Fruit & Tea</p></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={food === 1 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={menu1} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>THE BREAKFAST CLUB</h5>
                                        <p>Zucchini, basil, Grana Padano, baby spinach, lemon vinaigrette</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={food === 2 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={menu1} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={food === 3 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={menu1} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={food === 4 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xl-6 col-lg-10 col-md-12 col-sm-12">
                                <div className='menu-card'>
                                    <div className='menu-img'>
                                        <img src={menu1} alt="" />
                                    </div>
                                    <div className='menu-content'>
                                        <h5>QUAIL</h5>
                                        <p>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                                    </div>
                                    <div className='menu-price'>
                                        <h6>Price</h6>
                                        <p>9.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default Menu