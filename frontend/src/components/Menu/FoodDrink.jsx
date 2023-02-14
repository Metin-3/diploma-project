import React from 'react';
import '../../styles/menu/foodDrink.css';

const FoodDrink = () => {
    return (
        <section id="food-drink">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-12">
                                <div className='food-header'>
                                    <h1 className='header-center'>FOOD</h1>
                                </div>
                            </div>
                            <div className="col-12 py-3">
                                <div className='name-and-price'>
                                    <h5>QUAIL</h5>
                                    <div></div>
                                    <p>9.9</p>
                                </div>
                                <p className='menu-content'>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                            </div>
                            <div className="col-12 py-3">
                                <div className='name-and-price'>
                                    <h5>SEA TROUT</h5>
                                    <div></div>
                                    <p>26.9</p>
                                </div>
                                <p className='menu-content'>Roast Trout, English asparagus, Jersey Royals, watercress</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-12">
                                <div className='drink-header'>
                                    <h1 className='header-center'>DRINK</h1>
                                </div>
                            </div>
                            <div className="col-12 py-3">
                                <div className='name-and-price'>
                                    <h5>CHILLED CORN CHOWDER</h5>
                                    <div></div>
                                    <p>14</p>
                                </div>
                                <p className='menu-content'>Cornmeal fried oyster, caviar, basil oil and corn nuts</p>
                            </div>
                            <div className="col-12 py-3">
                                <div className='name-and-price'>
                                    <h5>SUMMER MELON SALADT</h5>
                                    <div></div>
                                    <p>15</p>
                                </div>
                                <p className='menu-content'>Cherry tomato confit, prosciutto, baby arugula and basil oil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodDrink