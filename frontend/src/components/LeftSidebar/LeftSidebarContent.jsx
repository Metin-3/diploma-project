import React from 'react'
import '../../styles/rightSidebar/rightSidebarContent.css';
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
import img from '../../images/gallery2.webp';

const LeftSidebarContent = () => {
    return (
        <section id="right-sidebar-content">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 py-2">
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
                            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 py-2">
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
                            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 py-2">
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
                            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 py-2">
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
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                        <div className='right-sidebar-content-text'>
                            <p className='py-3'>Page with right sidebar</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <h3 className='py-3'>About</h3>
                            <p className='py-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</p>
                            <p className='py-3'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <div className='d-flex justify-content-center'>
                                <img src={img} className="w-100" alt="" />
                            </div>
                            <p className='py-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <p className='py-3'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <p className='py-3'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <h3 className='py-3'>POST A COMMENT</h3>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftSidebarContent