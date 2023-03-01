import { Link } from 'react-router-dom';
import logo from '../../images/logo2.webp';
import "../../styles/navbar.css";
import { FaTripadvisor } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { useState } from 'react';


const Navbar = () => {


    // const [nav, setNav] = useState(1);

    // const handleNav = (index) => {
    //     setNav(index)
    // }

    //!============= scrol navbar =================
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", changeBackground);



    //!================ hamburger menu ================
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }



    //!============== dropdown mobil =====================
    const [mobilDropdown1, setMobilDropdown1] = useState(false);
    const [mobilDropdown2, setMobilDropdown2] = useState(false);
    const [mobilDropdown3, setMobilDropdown3] = useState(false);
    const [mobilDropdown4, setMobilDropdown4] = useState(false);

    const handleDropdown1 = () => {
        setMobilDropdown1(!mobilDropdown1)
    }

    const handleDropdown2 = () => {
        setMobilDropdown2(!mobilDropdown2)
    }

    const handleDropdown3 = () => {
        setMobilDropdown3(!mobilDropdown3)
    }

    const handleDropdown4 = () => {
        setMobilDropdown4(!mobilDropdown4)
    }

    return (
        <>
            <nav className={navbar ? 'navbar-active' : 'nav'}>
                <div className="container">
                    <div className="row inner-navbar">
                        <div className="col-xl-6 col-lg-4 col-md-2">
                            <div className='nav-logo'>
                                <Link to="/"> <img src={logo} alt="" /> </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <ul className='navbar-list'>
                                <li className='navbar-list-item'>
                                    <Link to="/" className="navbar-list-item-link">Home <i className="fa-solid fa-chevron-down"></i></Link>
                                    <ul className='navbar-list-dropdown'>
                                        <li className='navbar-list-dropdown-item mt-3'>
                                            <Link to="/" className='navbar-list-dropdown-item-link'>Home Restaurant</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="homecoffee" className='navbar-list-dropdown-item-link'>Home Coffee</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="homeseafood" className='navbar-list-dropdown-item-link'>Home Seafood</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="homeWinery" className='navbar-list-dropdown-item-link'>Home Winery</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="homeOne" className='navbar-list-dropdown-item-link'>One Page</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item mb-3'>
                                            <Link to="homeVideo" className='navbar-list-dropdown-item-link'>Home Full Screen Video</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="menu" className="navbar-list-item-link">Menu</Link>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="events" className="navbar-list-item-link">Events <i className="fa-solid fa-chevron-down"></i></Link>
                                    <ul className='navbar-list-dropdown'>
                                        <li className='navbar-list-dropdown-item mt-3'>
                                            <Link to="events" className='navbar-list-dropdown-item-link'>Happening Events</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="events" className='navbar-list-dropdown-item-link'>Upcoming Events</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="events" className='navbar-list-dropdown-item-link'>Expired Events</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item mb-3'>
                                            <Link to="events" className='navbar-list-dropdown-item-link'>Single Event</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="reservation" className="navbar-list-item-link">Reservation <i className="fa-solid fa-chevron-down"></i></Link>
                                    <ul className='navbar-list-dropdown'>
                                        <li className='navbar-list-dropdown-item mt-3'>
                                            <Link to="reservation" className='navbar-list-dropdown-item-link'>Opentable Form</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item mb-3'>
                                            <Link to="reservationForm" className='navbar-list-dropdown-item-link'>Reservation Form</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="about" className="navbar-list-item-link" >Features <i className="fa-solid fa-chevron-down"></i></Link>
                                    <ul className='navbar-list-dropdown'>
                                        <li className='navbar-list-dropdown-item mt-3'>
                                            <Link to="about" className='navbar-list-dropdown-item-link'>About Us</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="gallery" className='navbar-list-dropdown-item-link'>Gallery</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="contact" className='navbar-list-dropdown-item-link'>Contact</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="leftsidebar" className='navbar-list-dropdown-item-link'>Page with left sidebar</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item'>
                                            <Link to="rightsidebar" className='navbar-list-dropdown-item-link'>Page with right sidebar</Link>
                                        </li>
                                        <hr className='me-3' />
                                        <li className='navbar-list-dropdown-item mb-3'>
                                            <Link to="coming" className='navbar-list-dropdown-item-link'>Coming Soon</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="shop" className="navbar-list-item-link" >Shop</Link>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="blog" className="navbar-list-item-link" >Blog</Link>
                                </li>
                                <li className='vr'></li>
                                <li className='navbar-list-item'>
                                    <Link to="https://www.facebook.com/" className='navbar-list-item-link fs-6'><GrFacebookOption /></Link>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="https://twitter.com/?lang=en" className='navbar-list-item-link fs-6'><AiOutlineTwitter /></Link>
                                </li>
                                <li className='navbar-list-item'>
                                    <Link to="https://www.tripadvisor.com.au/Restaurant_Review-g4003760-d2477675-Reviews-Trattoria_La_Resca-Vescovato_Province_of_Cremona_Lombardy.html" className='navbar-list-item-link fs-6'><FaTripadvisor /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mobil">
                        <div className="col-5">
                            <button className='inner-icon-bar' onClick={handleShowNavbar}>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                        </div>
                        <div className="col-7">
                            <div className='mobil-logo'>
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={`navbar-list-mobil  ${showNavbar && 'active'}`}>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <li className='navbar-list-item-mobil mx-2'>
                                <Link to="https://www.facebook.com/" className='navbar-list-item-link-mobil fs-6'><GrFacebookOption /></Link>
                            </li>
                            <li className='navbar-list-item-mobil mx-2'>
                                <Link to="https://twitter.com/?lang=en" className='navbar-list-item-link-mobil fs-6'><AiOutlineTwitter /></Link>
                            </li>
                            <li className='navbar-list-item-mobil mx-2'>
                                <Link to="https://www.tripadvisor.com.au/Restaurant_Review-g4003760-d2477675-Reviews-Trattoria_La_Resca-Vescovato_Province_of_Cremona_Lombardy.html" className='navbar-list-item-link-mobil fs-6'><FaTripadvisor /></Link>
                            </li>
                        </div>
                        <div className='close-btn me-3'>
                            <button onClick={handleShowNavbar}>X</button>
                        </div>
                    </div>
                    <li className='navbar-list-item-mobil'>
                        <div className='mobil-link-inner'>
                            <Link to="/" className='navbar-list-item-link-mobil'>Home</Link>
                            <span onClick={handleDropdown1}><i className="fa-solid fa-chevron-down me-3"></i></span>
                        </div>
                        <ul className={mobilDropdown1 ? 'navbar-list-dropdown-mobil-active' : 'navbar-list-dropdown-mobil'}>
                            <li className='navbar-list-dropdown-item-mobil mt-3'>
                                <Link to="/" className='navbar-list-dropdown-item-link-mobil'>Home Restaurant</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="homecoffee" className='navbar-list-dropdown-item-link-mobil'>Home Coffee</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="homeseafood" className='navbar-list-dropdown-item-link-mobil'>Home Seafood</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="homeWinery" className='navbar-list-dropdown-item-link-mobil'>Home Winery</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="homeOne" className='navbar-list-dropdown-item-link-mobil'>One Page</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil mb-3'>
                                <Link to="homeVideo" className='navbar-list-dropdown-item-link-mobil'>Home Full Screen Video</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='navbar-list-item-mobil'>
                        <Link to="menu" className='navbar-list-item-link-mobil'>Menu</Link>
                    </li>
                    <li className='navbar-list-item-mobil'>
                        <div className='mobil-link-inner'>
                            <Link to="events" className='navbar-list-item-link-mobil'>Events</Link>
                            <span onClick={handleDropdown2}><i className="fa-solid fa-chevron-down me-3"></i></span>
                        </div>
                        <ul className={mobilDropdown2 ? 'navbar-list-dropdown-mobil-active' : 'navbar-list-dropdown-mobil'}>
                            <li className='navbar-list-dropdown-item-mobil mt-3'>
                                <Link to="/" className='navbar-list-dropdown-item-link-mobil'>Happening Events</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="/" className='navbar-list-dropdown-item-link-mobil'>Upcoming Events</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="/" className='navbar-list-dropdown-item-link-mobil'>Expired Events</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil mb-3'>
                                <Link to="/" className='navbar-list-dropdown-item-link-mobil'>Single Event</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='navbar-list-item-mobil'>
                        <div className='mobil-link-inner'>
                            <Link to="reservation" className='navbar-list-item-link-mobil'>Reservation</Link>
                            <span onClick={handleDropdown3}><i className="fa-solid fa-chevron-down me-3"></i></span>
                        </div>
                        <ul className={mobilDropdown3 ? 'navbar-list-dropdown-mobil-active' : 'navbar-list-dropdown-mobil'}>
                            <li className='navbar-list-dropdown-item-mobil mt-3'>
                                <Link to="reservation" className='navbar-list-dropdown-item-link-mobil'>Opentable Form</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil mb-3'>
                                <Link to="reservationForm" className='navbar-list-dropdown-item-link-mobil'>Reservation Form</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='navbar-list-item-mobil'>
                        <div className='mobil-link-inner'>
                            <Link to="about" className='navbar-list-item-link-mobil'>Features</Link>
                            <span onClick={handleDropdown4}><i className="fa-solid fa-chevron-down me-3"></i></span>
                        </div>
                        <ul className={mobilDropdown4 ? 'navbar-list-dropdown-mobil-active' : 'navbar-list-dropdown-mobil'}>
                            <li className='navbar-list-dropdown-item-mobil mt-3'>
                                <Link to="about" className='navbar-list-dropdown-item-link-mobil'>About Us</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="gallery" className='navbar-list-dropdown-item-link-mobil'>Gallery</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="contact" className='navbar-list-dropdown-item-link-mobil'>Contact</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="leftsidebar" className='navbar-list-dropdown-item-link-mobil'>Page with left sidebar</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil'>
                                <Link to="rightsidebar" className='navbar-list-dropdown-item-link-mobil'>Page with right sidebar</Link>
                            </li>
                            <hr className='me-3' />
                            <li className='navbar-list-dropdown-item-mobil mb-3'>
                                <Link to="coming" className='navbar-list-dropdown-item-link-mobil'>Coming Soon</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='navbar-list-item-mobil'>
                        <Link to="shop" className='navbar-list-item-link-mobil'>Shop</Link>
                    </li>
                    <li className='navbar-list-item-mobil'>
                        <Link to="blog" className='navbar-list-item-link-mobil'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar