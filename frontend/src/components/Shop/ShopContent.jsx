import React, { useState } from 'react';
import '../../styles/shop/shopContent.css';
import shop1 from '../../images/event1.webp';
import { Link } from 'react-router-dom';

const ShopContent = () => {

    const [food, setFood] = useState(1);

    const handleMenu = (index) => {
        setFood(index)
    }

    return (
        <section id="shop-content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='shop-content-btns'>
                            <button className={food === 1 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(1)}>ALL</button>
                            <button className={food === 2 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(2)}>BAR MLECZNY</button>
                            <button className={food === 3 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(3)}>BAKERY</button>
                            <button className={food === 4 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(4)}>CHURRASCARIA</button>
                            <button className={food === 5 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(5)}>FOOD BOOTH</button>
                            <button className={food === 6 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(6)}>FOOD CART</button>
                            <button className={food === 7 ? 'shop-content-btn-active' : 'shop-content-btn'} onClick={() => handleMenu(7)}>RESTAURANT</button>
                        </div>
                    </div>
                    <div className="col-12 py-5">
                        <div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                    <div className='shop-card-inner'>
                                        <div className='shop-card-img-icon'>
                                            <div className='shop-card-img'>
                                                <img src={shop1} alt="" />
                                            </div>
                                            <div className='shop-card-icon'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </div>
                                        <div className='shop-card-content'>
                                            <Link to="/" className='shop-card-content-link'>Blanched Garlic</Link>
                                            <p>$35</p>
                                            <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                            <button className='add-to-cart'>ADD TO CART</button>
                                        </div>
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

export default ShopContent