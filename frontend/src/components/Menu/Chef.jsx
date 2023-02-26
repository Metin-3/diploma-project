import React, { useEffect, useState } from 'react';
import '../../styles/menu/chef.css';

const Chef = () => {

    //! GET CHEF
    const [chefs, setChefs] = useState([]);

    const getChefs = () => {
        fetch("http://localhost:8080/chef")
            .then(res => res.json())
            .then(data =>
                setChefs(data)
            )
    }

    useEffect(() => {
        getChefs()
    }, [])

    return (
        <section id="chef">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='chef-header'>
                            <h1 className='header-center'>CHEF</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {chefs && chefs.map(({ _id, chefImage, chefName, chefContent, chefPrice }) => (
                            <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                <div className="card mb-3" >
                                    <div className="row align-items-center g-0">
                                        <div className="col-md-2 col-sm-3">
                                            <img src={chefImage} className="food-img" alt="..." />
                                        </div>
                                        <div className="col-md-8 col-sm-9">
                                            <div className="card-body">
                                                <h6 className="card-title">{chefName}</h6>
                                                <p className="card-text">{chefContent}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12">
                                            <div className="card-body">
                                                <p className="card-text">Price <br /><small className="text-muted">{chefPrice}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chef