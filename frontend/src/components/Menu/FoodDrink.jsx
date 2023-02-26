import React, { useEffect, useState } from 'react';
import '../../styles/menu/foodDrink.css';

const FoodDrink = () => {

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


    return (
        <section id="food-drink">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-12">
                                <div className='food-header'>
                                    <h1 className='header-center'>FOOD</h1>
                                </div>
                            </div>
                            {foods && foods.map(({ _id, foodName, foodContent, foodPrice }) => (
                                <div key={_id} className="col-12 py-3">
                                    <div className='name-and-price'>
                                        <h5>{foodName}</h5>
                                        <div></div>
                                        <p>{foodPrice}</p>
                                    </div>
                                    <p className='menu-content'>{foodContent}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-12">
                                <div className='drink-header'>
                                    <h1 className='header-center'>DRINK</h1>
                                </div>
                            </div>
                            {drinks && drinks.map(({ _id, drinkName, drinkContent, drinkPrice }) => (
                                <div key={_id} className="col-12 py-3">
                                    <div className='name-and-price'>
                                        <h5>{drinkName}</h5>
                                        <div></div>
                                        <p>{drinkPrice}</p>
                                    </div>
                                    <p className='menu-content'>{drinkContent}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodDrink