import React, { useEffect, useState } from 'react';
import '../../styles/home/menu.css';

const Menu = () => {

    //! TABS
    const [food, setFood] = useState(1);

    const handleFood = (index) => {
        setFood(index)
    }


    //! GET FOODS
    const [foods, setFoods] = useState([]);

    const getFoods = () => {
        fetch("http://localhost:8080/food")
            .then(res => res.json())
            .then(data =>
                setFoods(data)
            )
    }

    useEffect(() => {
        getFoods()
    }, [])


    //! GET DRINKS
    const [drinks, setDrinks] = useState([]);

    const getDrinks = () => {
        fetch("http://localhost:8080/drink")
            .then(res => res.json())
            .then(data =>
                setDrinks(data)
            )
    }

    useEffect(() => {
        getDrinks()
    }, [])


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


    //! GET COCKTAIL
    const [cocktails, setCocktails] = useState([]);

    const getCocktails = () => {
        fetch("http://localhost:8080/cocktail")
            .then(res => res.json())
            .then(data =>
                setCocktails(data)
            )
    }

    useEffect(() => {
        getCocktails()
    }, [])

    return (
        <>
            <section id='menu'>
                <div className="paralax">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className='paralax-header'>
                                    <p>Find Our</p>
                                    <h1>MENU</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='paralax-menu'>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(1)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-burger"></i>
                                        </div>
                                        <div className='paralax-menu-content' id="headingOne">
                                            <h5 className={food === 1 ? "paralax-menu-content-active" : "paralax-menu-content"}>FOOD<p>Cake & Cookes</p></h5>
                                        </div>
                                    </div>
                                    <span className='vr text-light'></span>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(2)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-champagne-glasses"></i>
                                        </div>
                                        <div className='paralax-menu-content'>
                                            <h5 className={food === 2 ? "paralax-menu-content-active" : "paralax-menu-content"}>DRINK<p>Coffee & Beer</p></h5>
                                        </div>
                                    </div>
                                    <span className='vr text-light'></span>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(3)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-bowl-food"></i>
                                        </div>
                                        <div className='paralax-menu-content'>
                                            <h5 className={food === 3 ? "paralax-menu-content-active" : "paralax-menu-content"}>CHEF<p>Breakfast</p></h5>
                                        </div>
                                    </div>
                                    <span className='vr text-light'></span>
                                    <div className='paralax-menu-inner' onClick={() => handleFood(4)}>
                                        <div className='paralax-menu-icon'>
                                            <i className="fa-solid fa-martini-glass-citrus"></i>
                                        </div>
                                        <div className='paralax-menu-content'>
                                            <h5 className={food === 4 ? "paralax-menu-content-active" : "paralax-menu-content"}>COCKTAIL<p>Fruit & Tea</p></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={food === 1 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            {foods && foods.map(({ _id, image, foodName, foodContent, foodPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={image} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{foodName}</h6>
                                                    <p className="card-text">{foodContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{foodPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={food === 2 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            {drinks && drinks.map(({ _id, drinkImage, drinkName, drinkContent, drinkPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={drinkImage} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{drinkName}</h6>
                                                    <p className="card-text">{drinkContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{drinkPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={food === 3 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
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
                <div className={food === 4 ? "inner-menu-card-active" : "inner-menu-card"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            {cocktails && cocktails.map(({ _id, cocktailImage, cocktailName, cocktailContent, cocktailPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={cocktailImage} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{cocktailName}</h6>
                                                    <p className="card-text">{cocktailContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{cocktailPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default Menu