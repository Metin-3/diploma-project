import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/adminNav.css'

const AdminNav = () => {
    return (
        <section id='admin-navbar'>
            <button className="admin-navbar-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Restaurant</h5>
                    <button type="button" className="admin-close-btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-x"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className='admin-list'>
                            <li>
                                <Link className="admin-list-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminMenu">Food</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminDrink">Drink</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminChef">Chef</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminCocktail">Cocktail</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminDinner">Dinner</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminBreakfast">Breakfast</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminEvent">Event</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminShop">Bar Mleczny</Link>
                            </li>
                            <li >
                                <Link className="admin-list-link" to="adminBakery">Bakery</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminChurra">Churrascaria</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminBooth">Food Booth</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminCart">Food Cart</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminRestaurant">Restaurant</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminBlog">Blog</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminRes">Restaurant G</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminTable">TABLE G</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminGuest">GUEST G</Link>
                            </li>
                            <li>
                                <Link className="admin-list-link" to="adminInstagram">Instagram</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminNav