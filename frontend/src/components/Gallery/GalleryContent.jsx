import React, { useState } from 'react';
import '../../styles/gallery/galleryContent.css';
import gallery01 from '../../images/event2.webp';
import gallery02 from '../../images/from2.webp';
import gallery03 from '../../images/from3.webp';
import gallery04 from '../../images/gallery2.webp';
import gallery05 from '../../images/gallery3.webp';
import gallery06 from '../../images/event3.webp';
import gallery07 from '../../images/event6.webp';
import gallery08 from '../../images/event7.webp';
import gallery09 from '../../images/event8.webp';

const GalleryContent = () => {

    const [gallery, setGallery] = useState(1);

    const handleGallery = (index) => {
        setGallery(index)
    }

    return (
        <section id="gallery-content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='gallery-content-btns'>
                            <button className={gallery === 1 ? "gallery-content-btn-active" : "gallery-content-btn"} onClick={() => handleGallery(1)}>ALL</button>
                            <button className={gallery === 2 ? "gallery-content-btn-active" : "gallery-content-btn"} onClick={() => handleGallery(2)}>RESTAURANT</button>
                            <button className={gallery === 3 ? "gallery-content-btn-active" : "gallery-content-btn"} onClick={() => handleGallery(3)}>TABLE</button>
                            <button className={gallery === 4 ? "gallery-content-btn-active" : "gallery-content-btn"} onClick={() => handleGallery(4)}>GUESTS</button>
                        </div>
                    </div>
                    <div className="col-12 py-5">
                        <div className={gallery === 1 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery01} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img' >
                                        <img src={gallery02} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery03} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery04} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery05} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery06} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery07} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery08} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery09} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={gallery === 2 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery01} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img' >
                                        <img src={gallery02} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery03} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={gallery === 3 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery04} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery05} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery06} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={gallery === 4 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery07} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery08} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                    <div className='gallery-content-img'>
                                        <img src={gallery09} className="gallery-img" alt="" />
                                        <div className='gallery-content-img-btn'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GalleryContent