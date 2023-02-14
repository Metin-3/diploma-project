import React from 'react';
import '../../styles/menu/menuHeader.css';

const MenuHeader = () => {
    return (
        <>
            <header id='header-menu'>
                <div className="container">
                    <h1>MENU <p>MANY MENU STYLE</p></h1>
                </div>
            </header>

            <section className='header-second'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1><p>The</p>MENU</h1>
                            <p className='my-5'>There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuHeader