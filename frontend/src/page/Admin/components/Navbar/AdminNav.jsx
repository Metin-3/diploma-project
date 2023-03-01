import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/adminNav.css'

const AdminNav = () => {

    const [adminNav, setAdminNav] = useState(1);

    const handleAdminNavbar = (index) => {
        setAdminNav(index)
    }

    return (
        <section id='admin-navbar'>
            <button className="admin-navbar-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="true" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Restaurant</h5>
                    <button type="button" className="admin-close-btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-x"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className='admin-list'>
                            <li>
                                <Link className={adminNav === 1 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(1)} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 18 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(18)} to="adminMessage">Message</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 2 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(2)} to="adminMenu">Menu Food</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 3 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(3)} to="adminDrink">Menu Drink</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 4 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(4)} to="adminChef">Menu Chef</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 5 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(5)} to="adminCocktail">Menu Cocktail</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 6 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(6)} to="adminDinner">Menu Dinner</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 7 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(7)} to="adminBreakfast">Menu Breakfast</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 8 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(8)} to="adminEvent">Event</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 9 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(9)} to="adminShop">Shop Bar Mleczny</Link>
                            </li>
                            <li >
                                <Link className={adminNav === 10 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(10)} to="adminBakery">Shop Bakery</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 11 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(11)} to="adminChurra">Shop Churrascaria</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 12 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(12)} to="adminBooth">Shop Food Booth</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 13 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(13)} to="adminCart">Shop Food Cart</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 14 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(14)} to="adminRestaurant">Shop Restaurant</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 15 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(15)} to="adminBlog">Blog</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 16 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(16)} to="adminRes">Gallery Restaurant</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 17 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(17)} to="adminTable">Gallery Table</Link>
                            </li>
                            <li>
                                <Link className={adminNav === 18 ? "admin-list-link-active" : "admin-list-link"} onClick={() => handleAdminNavbar(18)} to="adminGuest">Gallery Guest</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminNav