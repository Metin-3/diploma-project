import React from 'react';
import '../../styles/menu/chef.css';
import menu1 from '../../images/menu1.webp';
import menu2 from '../../images/menu2.webp';

const Chef = () => {
    return (
        <section id="chef">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='chef-header'>
                            <h1 className='header-center'>CHEF</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
                        <div className='menu-card'>
                            <div className='menu-img'>
                                <img src={menu1} alt="" />
                            </div>
                            <div className='menu-content'>
                            <h5>CONTINENTAL BREAKFAST</h5>
                                <p>Zucchini, basil, Grana Padano, baby spinach, lemon vinaigrette</p>
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
                                <img src={menu2} alt="" />
                            </div>
                            <div className='menu-content'>
                                <h5>CONTINENTAL BREAKFAST</h5>
                                <p>Zucchini, basil, Grana Padano, baby spinach, lemon vinaigrette</p>
                            </div>
                            <div className='menu-price'>
                                <h6>Price</h6>
                                <p>15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chef