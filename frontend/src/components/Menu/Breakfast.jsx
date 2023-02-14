import React, { useState } from 'react';
import '../../styles/menu/breakfast.css';
import menu1 from '../../images/menu1.webp';
import img from '../../images/hero_slide_1.webp';

const Breakfast = () => {

    const [food, setFood] = useState(1);

    const handleFood = (index) => {
        setFood(index)
    }

    return (
        <section id="breakfast">
            <div className="breakfast-paralax">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='header-breakfast'>BREAKFAST</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='all-menu-btns'>
                                <button onClick={() => handleFood(1)} className={food === 1 ? "all-menu-btn-active" : "all-menu-btn"}>ALL</button>
                                <button onClick={() => handleFood(2)} className={food === 2 ? "all-menu-btn-active" : "all-menu-btn"}>COCKTAILS</button>
                                <button onClick={() => handleFood(3)} className={food === 3 ? "all-menu-btn-active" : "all-menu-btn"}>BREAKFAST</button>
                                <button onClick={() => handleFood(4)} className={food === 4 ? "all-menu-btn-active" : "all-menu-btn"}>DINNER</button>
                                <button onClick={() => handleFood(5)} className={food === 5 ? "all-menu-btn-active" : "all-menu-btn"}>FOOD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={food === 1 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
                    <div className={food === 2 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
                    <div className={food === 3 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
                    <div className={food === 4 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
                    <div className={food === 5 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
            </div>
        </section>
    )
}

export default Breakfast