import React, { useEffect, useState } from 'react';
import '../../styles/blog/blogContent.css';
import { Link } from 'react-router-dom';
import logoAbout from '../../images/logoAbout.webp';
import ins1 from '../../images/ins1.webp';
import ins2 from '../../images/ins2.webp';
import ins3 from '../../images/ins3.jpg';
import ins4 from '../../images/ins4.webp';
import ins5 from '../../images/ins5.webp';
import ins6 from '../../images/ins6.jpg';
import ins7 from '../../images/ins7.webp';
import ins8 from '../../images/ins8.webp';
import ins9 from '../../images/ins9.webp';



const BlogContent = () => {

    //! GET EVENTS
    const [blogs, setBlogs] = useState([]);

    const getBlogs = () => {
        fetch("http://localhost:8080/blog")
            .then(res => res.json())
            .then(data =>
                setBlogs(data)
            )
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <section id='event-content'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 xol-lg-9 col-md-12 col-sm-12">
                        <hr />
                        <div className="row g-0">
                            {blogs && blogs.map((blog) => (
                                <div className='row' key={blog._id}>
                                    <div className="col-lg-1 col-md-2 col-sm-3 col-3 my-4">
                                        <div className='blog-date'>
                                            <h1>{blog.blogDay}</h1>
                                            <p>{blog.blogMonth}</p>
                                        </div>
                                        <div className='blog-inner-box mt-3'>
                                            <button>
                                                <Link className='blog-icon-link blog-icon-link-facebook' to="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fresca.thimpress.com%252Fmy-fiat-500-2%252F%26p%255Btitle%255D%3DMac%2Band%2BCheese%2BWaffles%26p%255Burl%255D%3Dhttps%253A%252F%252Fresca.thimpress.com%252Fmy-fiat-500-2%252F%26p%255Bimages%255D%255B0%255D%3Dhttps%253A%252F%252Fresca.thimpress.com%252Fwp-content%252Fuploads%252F2015%252F05%252Fimg_blog_post_1.jpg&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US"><i className="fa-brands fa-facebook-f"></i></Link>
                                            </button>
                                            <button>
                                                <Link className='blog-icon-link blog-icon-link-twitter' to="https://twitter.com/intent/tweet?url=https%3A%2F%2Fresca.thimpress.com%2Fmy-fiat-500-2%2F&text=Mac%20and%20Cheese%20Waffles"><i className="fa-brands fa-twitter"></i></Link>
                                            </button>
                                            <button>
                                                <Link className='blog-icon-link blog-icon-link-google' to="https://currents.google.com/up/?continue=https://currents.google.com/share?url%3Dhttps://resca.thimpress.com/my-fiat-500-2/%26title%3DMac%2Band%2BCheese%2BWaffles"><i className="fa-brands fa-google"></i></Link>
                                            </button>
                                            <button>
                                                <Link className='blog-icon-link blog-icon-link-pinterest badge bg-danger' to="https://www.pinterest.com/pin/create/button/?guid=kz8dG9RRXHqJ-2&url=https%3A%2F%2Fresca.thimpress.com%2Fmy-fiat-500-2%2F&media=https%3A%2F%2Fresca.thimpress.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fimg_blog_post_1.jpg&description=Mac%20and%20Cheese%20Waffles%3Cbr%20%2F%3ELorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipisicing%20elit.%20Iste%20commodi%20reiciendis%20fugit%20qui%20quia%20ut%2C%20non%20"><i className="fa-brands fa-pinterest-p"></i> Save</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-11 col-md-10 col-sm-9 col-9 my-4">
                                        <div className='blog-image'>
                                            <img src={blog.blogImage} alt="" />
                                        </div>
                                        <div className='blog-content'>
                                            <h3>{blog.blogName}</h3>
                                            <p>{blog.blogName}</p>
                                            <p>{blog.blogContent}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-3 xol-lg-3 col-md-12 col-sm-12">
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>ABOUT BLOG</h6>
                                </div>
                                <div className='about-blog-content'>
                                    <div>
                                        <img src={logoAbout} alt="" />
                                    </div>
                                    <p className='mt-2'>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt.</p>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>CATEGORIES</h6>
                                </div>
                                <ul className='categories-list'>
                                    <li><Link to="" className='categories-list-link'>DESIGN (5)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>EVENT (2)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>GALLERY (3)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>RECIPES (14)</Link></li>
                                    <hr />
                                    <li><Link to="" className='categories-list-link'>UNCATOGORIZED (4)</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>INSTAGRAM</h6>
                                </div>
                                <div className='event-inner-ins-image'>
                                    <div className='event-ins-img'>
                                        <img src={ins1} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins2} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins3} alt="" />
                                    </div>
                                </div>
                                <div className='event-inner-ins-image'>
                                    <div className='event-ins-img'>
                                        <img src={ins4} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins5} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins6} alt="" />
                                    </div>
                                </div>
                                <div className='event-inner-ins-image'>
                                    <div className='event-ins-img'>
                                        <img src={ins7} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins8} alt="" />
                                    </div>
                                    <div className='event-ins-img'>
                                        <img src={ins9} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 py-2">
                                <div className='about-blog-header py-2'>
                                    <h6>RECENT POSTS</h6>
                                </div>
                                <div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>White Wine Cheesecake</Link>
                                        <p><em>July 7, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>Mac and Cheese Waffles</Link>
                                        <p><em>May 11, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>Easy Sparkling Sangria</Link>
                                        <p><em>May 5, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>6 Mixers You Should Absolutely Never Use</Link>
                                        <p><em>May 5, 2015</em></p>
                                    </div>
                                    <div className='recet-posts'>
                                        <Link to="" className='recet-posts-link'>The 5 Biggest Myths About Vodka</Link>
                                        <p><em>May 5, 2015</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BlogContent