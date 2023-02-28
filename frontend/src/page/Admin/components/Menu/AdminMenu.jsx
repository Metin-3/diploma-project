import React, { useEffect, useState } from 'react';
import './adminMenu.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminMenu = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postFoods();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ image: data.image, foodName: data.foodName, foodContent: data.foodContent, foodPrice: data.foodPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/food/${id}`, state);
        getFoods();
        setState({
            image: "",
            foodName: "",
            foodContent: "",
            foodPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        image: "",
        foodName: "",
        foodContent: "",
        foodPrice: 0
    })

    const postFoods = async () => {
        if (!state.image || !state.foodName || !state.foodContent || !state.foodPrice) return
        await axios.post("http://localhost:8080/food", state)
        getFoods()
        setState({
            image: "",
            foodName: "",
            foodContent: "",
            foodPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET FOODS
    const [foods, setFoods] = useState([])

    const getFoods = async () => {
        const res = await axios.get("http://localhost:8080/food");
        setFoods(res.data)
    }

    useEffect(() => {
        getFoods()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/food/${id}`)
        getFoods()
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
                        <h1>FOOD</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('image')} name='image' value={state.image} onChange={handleChange} placeholder='Enter food image' />
                            {errors.image ? (
                                <span style={{ color: "red" }}>{errors.image.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('foodName')} name='foodName' value={state.foodName} onChange={handleChange} placeholder='Enter food name' />
                            {errors.foodName ? (
                                <span style={{ color: "red" }}>{errors.foodName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('foodContent')} name='foodContent' value={state.foodContent} onChange={handleChange} placeholder='Enter food content' />
                            {errors.foodContent ? (
                                <span style={{ color: "red" }}>{errors.foodContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('foodPrice')} name='foodPrice' value={state.foodPrice} onChange={handleChange} placeholder='Enter food price' />
                            {errors.foodPrice ? (
                                <span style={{ color: "red" }}>{errors.foodPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postFoods()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div>
                    <div className="col-12 my-5">
                        <div className='admin-filter'>
                            <div className='admin-filter-input'>
                                <input type="text" placeholder='Search product' className='w-75' onChange={handleFilter} />
                            </div>
                        </div>
                        <table className="table table-hover align-middle">
                            <thead className='table-dark'>
                                <tr className='row'>
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Image</th>
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Name</th>
                                    <th className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>Content</th>
                                    <th className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>Price</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Edit</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {foods && foods.filter((food) => {
                                    return value.trim().toLowerCase() === "" ? food : food.foodName.toLowerCase().includes(value.toLowerCase())
                                }).map((food) => (
                                    <tr className='row' key={food._id}>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3'> <img src={food.image} className="table-img" alt="" /></td>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>{food.foodName}</td>
                                        <td className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>{food.foodContent}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>{food.foodPrice}</td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(food)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(food._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminMenu