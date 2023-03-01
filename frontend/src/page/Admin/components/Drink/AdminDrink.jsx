import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminDrink = () => {

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
        postDrinks();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ drinkImage: data.drinkImage, drinkName: data.drinkName, drinkContent: data.drinkContent, drinkPrice: data.drinkPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/drink/${id}`, state);
        getDrinks();
        setState({
            drinkImage: "",
            drinkName: "",
            drinkContent: "",
            drinkPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        drinkImage: "",
        drinkName: "",
        drinkContent: "",
        drinkPrice: 0
    })

    const postDrinks = async () => {
        if (!state.drinkImage || !state.drinkName || !state.drinkContent || !state.drinkPrice) return
        await axios.post("http://localhost:8080/drink", state)
        getDrinks()
        setState({
            drinkImage: "",
            drinkName: "",
            drinkContent: "",
            drinkPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET DRINKS
    const [drinks, setDrinks] = useState([])

    const getDrinks = async () => {
        const res = await axios.get("http://localhost:8080/drink")
        setDrinks(res.data)
    }

    useEffect(() => {
        getDrinks()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/drink/${id}`)
        getDrinks()
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
                        <h1>DRINK</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('drinkImage')} name='drinkImage' value={state.drinkImage} onChange={handleChange} placeholder='Enter food image' />
                            {errors.drinkImage ? (
                                <span style={{ color: "red" }}>{errors.drinkImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('drinkName')} name='drinkName' value={state.drinkName} onChange={handleChange} placeholder='Enter drink name' />
                            {errors.drinkName ? (
                                <span style={{ color: "red" }}>{errors.drinkName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('drinkContent')} name='drinkContent' value={state.drinkContent} onChange={handleChange} placeholder='Enter drink content' />
                            {errors.drinkContent ? (
                                <span style={{ color: "red" }}>{errors.drinkContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('drinkPrice')} name='drinkPrice' value={state.drinkPrice} onChange={handleChange} placeholder='Enter drink price' />
                            {errors.drinkPrice ? (
                                <span style={{ color: "red" }}>{errors.drinkPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postDrinks()}>Add</button>
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
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Nname</th>
                                    <th className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>Content</th>
                                    <th className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>Price</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Edit</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {drinks && drinks.filter((drink) => {
                                    return value.trim().toLowerCase() === "" ? drink : drink.drinkName.toLowerCase().includes(value.toLowerCase())
                                }).map((drink) => (
                                    <tr className='row' key={drink._id}>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3'> <img src={drink.drinkImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>{drink.drinkName}</td>
                                        <td className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>{drink.drinkContent}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>{drink.drinkPrice}</td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(drink)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(drink._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminDrink