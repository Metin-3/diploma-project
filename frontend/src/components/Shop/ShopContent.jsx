import React, { useEffect, useState } from 'react';
import '../../styles/shop/shopContent.css';
import { Link } from 'react-router-dom';
// import ModalImage from 'react-modal-image';

const ShopContent = () => {

    //! TABS
    const [food, setFood] = useState(1);

    const handleMenu = (index) => {
        setFood(index)
    }

    //! GET BAR MLECZYN
    const [bars, setBars] = useState([]);

    const getBars = () => {
        fetch("http://localhost:8080/shop")
            .then(res => res.json())
            .then(data =>
                setBars(data)
            )
    }

    useEffect(() => {
        getBars()
    }, [])


    //! GET BAKERY
    const [bakerys, setBakerys] = useState([]);

    const getBakerys = () => {
        fetch("http://localhost:8080/bakery")
            .then(res => res.json())
            .then(data =>
                setBakerys(data)
            )
    }

    useEffect(() => {
        getBakerys()
    }, [])


    //! GET CHURRASCARIA
    const [churras, setChurras] = useState([]);

    const getChurras = () => {
        fetch("http://localhost:8080/churra")
            .then(res => res.json())
            .then(data =>
                setChurras(data)
            )
    }

    useEffect(() => {
        getChurras()
    }, [])

    //! GET FOOD BOOTH
    const [booths, setBooths] = useState([]);

    const getBooths = () => {
        fetch("http://localhost:8080/booth")
            .then(res => res.json())
            .then(data =>
                setBooths(data)
            )
    }

    useEffect(() => {
        getBooths()
    }, [])


    //! GET FOOD CART
    const [carts, setCarts] = useState([]);

    const getCarts = () => {
        fetch("http://localhost:8080/cart")
            .then(res => res.json())
            .then(data =>
                setCarts(data)
            )
    }

    useEffect(() => {
        getCarts()
    }, [])

    //! GET RESTAURANT
    const [restaurants, setRestaurants] = useState([]);

    const getRestaurants = () => {
        fetch("http://localhost:8080/restaurant")
            .then(res => res.json())
            .then(data =>
                setRestaurants(data)
            )
    }

    useEffect(() => {
        getRestaurants()
    }, [])


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
                        <div className={food === 1 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {bars && bars.map((bar) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={bar.shopImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{bar.shopName}</Link>
                                                <p>${bar.shopPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {bakerys && bakerys.map((bakery) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={bakery.bakeryImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{bakery.bakeryName}</Link>
                                                <p>${bakery.bakeryPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {churras && churras.map((churra) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={churra.churraImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{churra.churraName}</Link>
                                                <p>${churra.churraPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {booths && booths.map((booth) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={booth.boothImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{booth.boothName}</Link>
                                                <p>${booth.boothPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {carts && carts.map((cart) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={cart.cartImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{cart.cartName}</Link>
                                                <p>${cart.cartPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {restaurants && restaurants.map((restaurant) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={restaurant.restaurantImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{restaurant.restaurantName}</Link>
                                                <p>${restaurant.restaurantPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={food === 2 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {bars && bars.map((bar) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    {/* <ModalImage
                                                        className="shop-card-imgg"
                                                        small={bar.shopImage}
                                                        large={bar.shopImage}
                                                    /> */}
                                                    <img src={bar.shopImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{bar.shopName}</Link>
                                                <p>${bar.shopPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={food === 3 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {bakerys && bakerys.map((bakery) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={bakery.bakeryImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{bakery.bakeryName}</Link>
                                                <p>${bakery.bakeryPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={food === 4 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {churras && churras.map((churra) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={churra.churraImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{churra.churraName}</Link>
                                                <p>${churra.churraPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={food === 5 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {booths && booths.map((booth) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={booth.boothImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{booth.boothName}</Link>
                                                <p>${booth.boothPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={food === 6 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {carts && carts.map((cart) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={cart.cartImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{cart.cartName}</Link>
                                                <p>${cart.cartPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={food === 7 ? 'shop-category-active' : 'shop-category'}>
                            <div className="row">
                                {restaurants && restaurants.map((restaurant) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center">
                                        <div className='shop-card-inner'>
                                            <div className='shop-card-img-icon'>
                                                <div className='shop-card-img'>
                                                    <img src={restaurant.restaurantImage} alt="" />
                                                </div>
                                                <div className='shop-card-icon'>
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                            <div className='shop-card-content'>
                                                <Link to="/" className='shop-card-content-link'>{restaurant.restaurantName}</Link>
                                                <p>${restaurant.restaurantPrice}</p>
                                                <button className='add-to-cart-icon'><i className="fa-solid fa-cart-shopping"></i></button>
                                                <button className='add-to-cart'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopContent