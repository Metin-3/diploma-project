import React from 'react';
import '../../styles/homeCoffee/coffeeTable.css'
import coffeeTable1 from '../../images/coffe-table1.webp';
import coffeeTable2 from '../../images/coffee-table2.webp';

const CoffeeTable = () => {
    return (
        <section id="coffee-table">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='coffee-table-img'>
                            <img src={coffeeTable1} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='coffee-table-img'>
                            <img src={coffeeTable2} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 my-3">
                        <div className="coffee-table-content">
                            <h2>Book a</h2>
                            <h1>TABLE</h1>
                            <form action="">
                                <p>It is a long established fact that a reader will be .</p>
                                <div className='coffee-table-inner-input'>
                                    <input type="text" placeholder='First Name' className='coffee-table-form' />
                                    <input type="text" placeholder='Last Name' className='coffee-table-form' />
                                </div>
                                <div className='coffee-table-inner-input'>
                                    <input type="email" placeholder='Your Email' className='coffee-table-form' />
                                    <select name="" className='coffee-table-form' >
                                        <option value="">8:00</option>
                                        <option value="">8:30</option>
                                        <option value="">9:00</option>
                                        <option value="">9:30</option>
                                        <option value="">10:00</option>
                                        <option value="">10:30</option>
                                        <option value="">11:00</option>
                                        <option value="">12:00</option>
                                        <option value="">12:30</option>
                                        <option value="">1:00</option>
                                        <option value="">1:30</option>
                                        <option value="">2:00</option>
                                        <option value="">3:30</option>
                                        <option value="">3:00</option>
                                        <option value="">4:00</option>
                                        <option value="">4:00</option>
                                        <option value="">5:00</option>
                                        <option value="">5:00</option>
                                        <option value="">6:00</option>
                                        <option value="">6:00</option>
                                        <option value="">7:00</option>
                                        <option value="">7:00</option>
                                    </select>
                                </div>
                                <div className='coffee-table-inner-input'>
                                    <input type="date" className='coffee-table-form' />
                                    <select name="" className='coffee-table-form' >
                                        <option value="1">Person 1</option>
                                        <option value="2">Person 2</option>
                                        <option value="3">Person 3</option>
                                        <option value="4">Person 4</option>
                                        <option value="5">Person 5</option>
                                        <option value="6">Person 6</option>
                                        <option value="7">Person 7</option>
                                        <option value="8">Person 8</option>
                                        <option value="9">Person 9</option>
                                        <option value="10">Person 10</option>
                                    </select>
                                </div>
                                <button>BOOK A TABLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoffeeTable