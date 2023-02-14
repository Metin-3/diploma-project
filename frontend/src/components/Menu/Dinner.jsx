import React from 'react';
import '../../styles/menu/dinner.css'

const Dinner = () => {
    return (
        <section id='dinner'>
            <div className="dinner-paralax">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='dinner-header'>DINNER</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-3">
                        <div className='name-and-price'>
                            <h5>CHILLED CORN CHOWDER</h5>
                            <div></div>
                            <p>14</p>
                        </div>
                        <p className='menu-content'>Cornmeal fried oyster, caviar, basil oil and corn nuts</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-3">
                        <div className='name-and-price'>
                            <h5>SUMMER MELON SALAD</h5>
                            <div></div>
                            <p>15</p>
                        </div>
                        <p className='menu-content'>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-3">
                        <div className='name-and-price'>
                            <h5>QUAIL</h5>
                            <div></div>
                            <p>9.9</p>
                        </div>
                        <p className='menu-content'>Smoked quail, crispy egg, spelt, girolles, parsley</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dinner