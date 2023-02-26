import React from 'react';
import '../../styles/homeSeafood/seafoodMenu.css';
import seafoodMenu1 from '../../images/seafoodMenu1.webp';
import seafoodMenu2 from '../../images/seafoodMenu2.webp';
import seafoodMenu3 from '../../images/seafoodMenu3.webp';

const SeafoodMenu = () => {
    return (
        <section id="seafood-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='seafood-menu-header'>
                            <h2>Find Our</h2>
                            <h1>MENU</h1>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='seafood-menu-card'>
                            <div className='seafood-menu-card-img'>
                                <img src={seafoodMenu1} alt="" />
                                <i className="fa-solid fa-bowl-food"></i>
                            </div>
                            <div className='seafood-menu-card-content'>
                                <h5>LUNCH</h5>
                                <p>Praesent tincidunt venenatis augue, vitae imperdiet ligula tristique aliquet condimentum et nunc ut, euismod tincidunt ipsum.</p>
                                <button>VIEW MENU</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='seafood-menu-card'>
                            <div className='seafood-menu-card-img'>
                                <img src={seafoodMenu2} alt="" />
                                <i className="fa-solid fa-utensils"></i>
                            </div>
                            <div className='seafood-menu-card-content'>
                                <h5>DINNER</h5>
                                <p>Praesent tincidunt venenatis augue, vitae imperdiet ligula tristique aliquet condimentum et nunc ut, euismod tincidunt ipsum.</p>
                                <button>VIEW MENU</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='seafood-menu-card'>
                            <div className='seafood-menu-card-img'>
                                <img src={seafoodMenu3} alt="" />
                                <i className="fa-solid fa-beer-mug-empty"></i>
                            </div>
                            <div className='seafood-menu-card-content'>
                                <h5>DRINKS</h5>
                                <p>Praesent tincidunt venenatis augue, vitae imperdiet ligula tristique aliquet condimentum et nunc ut, euismod tincidunt ipsum.</p>
                                <button>VIEW MENU</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SeafoodMenu