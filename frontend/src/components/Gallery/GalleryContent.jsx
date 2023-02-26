import React, { useEffect, useState } from 'react';
import '../../styles/gallery/galleryContent.css';
import ModalImage from 'react-modal-image';

const GalleryContent = () => {

    //! TABS
    const [gallery, setGallery] = useState(1);

    const handleGallery = (index) => {
        setGallery(index)
    }


    //! GET GALLERY RESTAURANT
    const [ress, setRess] = useState([]);

    const getRess = () => {
        fetch("http://localhost:8080/res")
            .then(res => res.json())
            .then(data =>
                setRess(data)
            )
    }

    useEffect(() => {
        getRess()
    }, [])

    //! GET GALLERY TABLE
    const [tables, setTables] = useState([]);

    const getTables = () => {
        fetch("http://localhost:8080/table")
            .then(res => res.json())
            .then(data =>
                setTables(data)
            )
    }

    useEffect(() => {
        getTables()
    }, [])


    //! GET GALLERY GUESTS
    const [guests, setGuests] = useState([]);

    const getGuests = () => {
        fetch("http://localhost:8080/guest")
            .then(res => res.json())
            .then(data =>
                setGuests(data)
            )
    }

    useEffect(() => {
        getGuests()
    }, [])


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
                                {ress && ress.map((res) => (
                                    <div key={res._id} className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                        <div className='gallery-content-img'>
                                            <div className='img'>
                                                <ModalImage
                                                    className="imgg"
                                                    small={res.resImage}
                                                    large={res.resImage}
                                                />
                                                <div className='gallery-content-img-btn'>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {tables && tables.map((table) => (
                                    <div key={table._id} className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                        <div className='gallery-content-img'>
                                            <div className='img'>
                                                <ModalImage
                                                    className="imgg"
                                                    small={table.tableImage}
                                                    large={table.tableImage}
                                                />
                                                <div className='gallery-content-img-btn'>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                ))}
                                {guests && guests.map((guest) => (
                                    <div key={guest._id} className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                        <div className='gallery-content-img'>
                                            <div className='img'>
                                                <ModalImage
                                                    className="imgg"
                                                    small={guest.guestImage}
                                                    large={guest.guestImage}
                                                />
                                                <div className='gallery-content-img-btn'>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={gallery === 2 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                {ress && ress.map((res) => (
                                    <div key={res._id} className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                        <div className='gallery-content-img'>
                                            <div className='img'>
                                                <ModalImage
                                                    className="imgg"
                                                    small={res.resImage}
                                                    large={res.resImage}
                                                />
                                                <div className='gallery-content-img-btn'>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={gallery === 3 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                {tables && tables.map((table) => (
                                    <div key={table._id} className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                        <div className='gallery-content-img'>
                                            <div className='img'>
                                                <ModalImage
                                                    className="imgg"
                                                    small={table.tableImage}
                                                    large={table.tableImage}
                                                />
                                                <div className='gallery-content-img-btn'>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className={gallery === 4 ? "gallery-active" : "gallery"}>
                            <div className="row justify-content-center">
                                {guests && guests.map((guest) => (
                                    <div key={guest._id} className="col-xl-3 col-lg-3 col-md-5 col-sm-12 my-2 mx-2">
                                        <div className='gallery-content-img'>
                                            <div className='img'>
                                                <ModalImage
                                                    className="imgg"
                                                    small={guest.guestImage}
                                                    large={guest.guestImage}
                                                />
                                                <div className='gallery-content-img-btn'>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GalleryContent