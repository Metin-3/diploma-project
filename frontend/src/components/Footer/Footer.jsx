import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo2.webp'
import '../../styles/footer.css'
const Footer = () => {

    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='footer-logo'>
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='footer-location'>
                            <p><i className="fa-solid fa-location-dot"></i></p>
                            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='footer-connection'>
                            <p>Call. <a href="tel:0123 456 78910">0123 456 78910</a></p>
                            <p>Email. <span onClick={() => window.location = 'mailto:hello@yourmail.com'}>hello@yourmail.com</span></p>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className='footer-list'>
                            <li>
                                <Link to="https://www.facebook.com/" className='footer-list-link'><i className="fa-brands fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link to="https://twitter.com/?lang=en" className='footer-list-link'><i className="fa-brands fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to="https://www.google.com/" className='footer-list-link'><i className="fa-brands fa-google-plus-g"></i></Link>
                            </li>
                            <li>
                                <Link to="https://dribbble.com/" className='footer-list-link'><i className="fa-brands fa-dribbble"></i></Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/" className='footer-list-link'><i className="fa-brands fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="col-12">
                        <p className='footer-bottom'><Link to="https://preview.themeforest.net/item/wordpress-restaurant-theme-resca/full_screen_preview/12124219" className='footer-bottom-link'>Resca | Restaurant WordPress Theme</Link> © Powered by <Link to="https://preview.themeforest.net/item/wordpress-restaurant-theme-resca/full_screen_preview/12124219" className='footer-bottom-link'>ThimPress.</Link></p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer