import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const RestaurantShop = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postRestaurants();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ restaurantImage: data.restaurantImage, restaurantName: data.restaurantName, restaurantPrice: data.restaurantPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/restaurant/${id}`, state);
        getRestaurants();
        setState({
            restaurantImage: "",
            restaurantName: "",
            restaurantPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        restaurantImage: "",
        restaurantName: "",
        restaurantPrice: 0
    })

    const postRestaurants = async () => {
        if (!state.restaurantImage || !state.restaurantName || !state.restaurantPrice) return
        await axios.post("http://localhost:8080/restaurant", state)
        getRestaurants()
        setState({
            restaurantImage: "",
            restaurantName: "",
            restaurantPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = async () => {
        const res = await axios.get("http://localhost:8080/restaurant")
        setRestaurants(res.data)
    }

    useEffect(() => {
        getRestaurants()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/restaurant/${id}`)
        getRestaurants()
    }


    //! FILTER
    const [value, setValue] = useState("")
    const handleFilter = (e) => {
        setValue(e.target.value)
    }

    return (
        <section id="admin-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>RESTAURANT</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('restaurantImage')} name='restaurantImage' value={state.restaurantImage} onChange={handleChange} placeholder='Enter shop image' />
                            {errors.restaurantImage ? (
                                <span style={{ color: "red" }}>{errors.restaurantImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('restaurantName')} name='restaurantName' value={state.restaurantName} onChange={handleChange} placeholder='Enter shop name' />
                            {errors.restaurantName ? (
                                <span style={{ color: "red" }}>{errors.restaurantName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('restaurantPrice')} name='restaurantPrice' value={state.restaurantPrice} onChange={handleChange} placeholder='Enter shop price' />
                            {errors.restaurantPrice ? (
                                <span style={{ color: "red" }}>{errors.restaurantPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postRestaurants()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 my-5">
                        <div className='admin-filter'>
                            <div className='admin-filter-input'>
                                <input type="text" placeholder='Search product' className='w-75' onChange={handleFilter} />
                            </div>
                        </div>
                        <table className="table table-hover align-middle">
                            <thead className='table-dark'>
                                <tr className='row'>
                                    <th className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>Image</th>
                                    <th className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>Name</th>
                                    <th className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>Price</th>
                                    <th className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text noActive'>Edit</th>
                                    <th className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text noActive'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {restaurants && restaurants.filter((restaurant) => {
                                    return value.trim().toLowerCase() === " " ? restaurant : restaurant.restaurantName.toLowerCase().includes(value.toLowerCase())
                                }).map((restaurant) => (
                                    <tr className='row' key={restaurant._id}>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4'> <img src={restaurant.restaurantImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>{restaurant.restaurantName}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>{restaurant.restaurantPrice}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(restaurant)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(restaurant._id)}><i className="fa-solid fa-trash"></i></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default RestaurantShop