import React, { useEffect, useState } from 'react';
import '../../styles/menu/breakfast.css';

const Breakfast = () => {
    //! TABS
    const [food, setFood] = useState(1);

    const handleFood = (index) => {
        setFood(index)
    }


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

    //! GET FOODS
    const [breakfasts, setBreakfasts] = useState([]);

    const getBreakfasts = () => {
        fetch("http://localhost:8080/breakfast")
            .then(res => res.json())
            .then(data =>
                setBreakfasts(data)
            )
    }

    useEffect(() => {
        getBreakfasts()
    }, [])

    return (
        <section id="breakfast">
            <div className="breakfast-paralax">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='header-breakfast'>BREAKFAST</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='all-menu-btns'>
                                <button onClick={() => handleFood(1)} className={food === 1 ? "all-menu-btn-active" : "all-menu-btn"}>ALL</button>
                                <button onClick={() => handleFood(2)} className={food === 2 ? "all-menu-btn-active" : "all-menu-btn"}>COCKTAILS</button>
                                <button onClick={() => handleFood(3)} className={food === 3 ? "all-menu-btn-active" : "all-menu-btn"}>BREAKFAST</button>
                                <button onClick={() => handleFood(4)} className={food === 4 ? "all-menu-btn-active" : "all-menu-btn"}>DINNER</button>
                                <button onClick={() => handleFood(5)} className={food === 5 ? "all-menu-btn-active" : "all-menu-btn"}>FOOD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={food === 1 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
                            {breakfasts && breakfasts.map(({ _id, breakfastImage, breakfastName, breakfastContent, breakfastPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={breakfastImage} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{breakfastName}</h6>
                                                    <p className="card-text">{breakfastContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{breakfastPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {dinners && dinners.map(({ _id, dinnerImage, dinnerName, dinnerContent, dinnerPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={dinnerImage} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{dinnerName}</h6>
                                                    <p className="card-text">{dinnerContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{dinnerPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                    <div className={food === 2 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
                    <div className={food === 3 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
                        <div className="row justify-content-center">
                            {breakfasts && breakfasts.map(({ _id, breakfastImage, breakfastName, breakfastContent, breakfastPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={breakfastImage} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{breakfastName}</h6>
                                                    <p className="card-text">{breakfastContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{breakfastPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={food === 4 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
                        <div className="row justify-content-center">
                            {dinners && dinners.map(({ _id, dinnerImage, dinnerName, dinnerContent, dinnerPrice }) => (
                                <div key={_id} className="col-xl-6 col-lg-10 col-md-12 col-sm-12 my-2">
                                    <div className="card mb-3" >
                                        <div className="row align-items-center g-0">
                                            <div className="col-md-2 col-sm-3">
                                                <img src={dinnerImage} className="food-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">{dinnerName}</h6>
                                                    <p className="card-text">{dinnerContent}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12">
                                                <div className="card-body">
                                                    <p className="card-text">Price <br /><small className="text-muted">{dinnerPrice}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={food === 5 ? "inner-menu-card-breakfast-active" : "inner-menu-card"}>
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
            </div>
        </section>
    )
}

export default Breakfast