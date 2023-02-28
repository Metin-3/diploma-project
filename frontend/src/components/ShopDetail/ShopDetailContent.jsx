import React, { useEffect, useState } from 'react';
import '../../styles/shopDetail/shopDetailContent.css'
import shopDetail1 from '../../images/event1.webp';
import shopDetail2 from '../../images/event2.webp';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ShopDetailContent = () => {

    //! GET SHOP BAR DETAIL
    const { id } = useParams()
    const [bars, setBars] = useState([]);

    const getBars = () => {
        fetch("http://localhost:8080/shop/" + id)
            .then(res => res.json())
            .then(data =>
                setBars(data)
            )
    }

    useEffect(() => {
        getBars()
    })



    return (
        <>
            <section id='shop-detail'>
                <div className="container">
                    <div key={bars._id} className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className='shop-detail-content-img'>
                                        <img src={bars.shopImage} alt="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='shop-detail-content-imgg my-3'>
                                        <img src={shopDetail1} alt="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='shop-detail-content-imgg my-3'>
                                        <img src={bars.shopImage} alt="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='shop-detail-content-imgg my-3'>
                                        <img src={shopDetail2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className='shop-detail-content'>
                                <h2>{bars.shopName}</h2>
                                <h4>${bars.shopPrice}</h4>
                                <p>{bars.shopName}</p>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <div className='my-5'>
                                    <input type="number" max="999" min="1" />
                                    <button className='detail-add-to-cart'><Link className='shop-detail-content-link' to="">ADD TO CART</Link></button>
                                </div>
                                <p>Share item</p>
                                <div className='shop-detail-content-icons'>
                                    <button className='badge rounded-0'>
                                        <Link to="https://www.facebook.com/" className='shop-detail-content-icon shop-detail-content-icon-facebook'><i className="fa-brands fa-facebook-f"></i></Link>
                                    </button>
                                    <button className='badge rounded-0'>
                                        <Link to="https://twitter.com/?lang=en" className='shop-detail-content-icon shop-detail-content-icon-twitter'><i className="fa-brands fa-twitter"></i></Link>
                                    </button>
                                    <button className='badge rounded-0'>
                                        <Link to="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fresca.thimpress.com%2Fshop%2Fcaramel-cheesecake%2F&description=Caramel%20CheesecakePellentesque%20habitant%20morbi%20tristique%20senectus%20et%20netus%20et%20malesuada%20fames%20ac%20turpis%20egestas.%20Vestibulum%20tortor%20quam,%20feugiat%20vitae,%20ultricies%20eget,%20tempor%20sit%20amet,%20ante.%20Donec%20eu%20libero%20sit%20amet%20quam%20egestas%20semper.%20Aenean%20ultricies%20mi%20vitae%20est.%20Mauris%20placerat%20eleifend%20leo.&media=https%3A%2F%2Fresca.thimpress.com%2Fwp-content%2Fuploads%2F2013%2F06%2Fkaboompics.jpg" className='shop-detail-content-icon shop-detail-content-icon-pinterest'><i className="fa-brands fa-pinterest-p"></i></Link>
                                    </button>
                                    <button className='badge rounded-0'>
                                        <Link to="https://www.google.com/" className='shop-detail-content-icon shop-detail-content-icon-google'><i className="fa-brands fa-google"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ShopDetailContent