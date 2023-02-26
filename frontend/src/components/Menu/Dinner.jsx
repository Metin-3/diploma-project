import React, { useEffect, useState } from 'react';
import '../../styles/menu/dinner.css'

const Dinner = () => {
    //! GET DINNER
    const [dinners, setDinners] = useState([]);

    const getDinners = () => {
        fetch("http://localhost:8080/dinner")
            .then(res => res.json())
            .then(data =>
                setDinners(data)
            )
    }

    useEffect(() => {
        getDinners()
    }, [])

    return (
        <section id='dinner'>
            <div className="dinner-paralax">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='dinner-header'>DINNER</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {dinners && dinners.map(({ _id, dinnerName, dinnerContent, dinnerPrice }) => (
                        <div key={_id} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-3">
                            <div className='name-and-price'>
                                <h5>{dinnerName}</h5>
                                <div></div>
                                <p>{dinnerPrice}</p>
                            </div>
                            <p className='menu-content'>{dinnerContent}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Dinner