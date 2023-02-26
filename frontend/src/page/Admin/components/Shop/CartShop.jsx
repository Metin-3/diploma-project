import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const CartShop = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postCarts();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ cartImage: data.cartImage, cartName: data.cartName, cartPrice: data.cartPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/cart/${id}`, state);
        getCarts();
        setState({
            cartImage: "",
            cartName: "",
            cartPrice: 0
        })
    };


    //! POST
    const [state, setState] = useState({
        cartImage: "",
        cartName: "",
        cartPrice: 0
    })

    const postCarts = async () => {
        if (!state.cartImage || !state.cartName || !state.cartPrice) return
        await axios.post("http://localhost:8080/cart", state)
        getCarts()
        setState({
            cartImage: "",
            cartName: "",
            cartPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [carts, setCarts] = useState([])

    const getCarts = async () => {
        const res = await axios.get("http://localhost:8080/cart")
        setCarts(res.data)
    }

    useEffect(() => {
        getCarts()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/cart/${id}`)
        getCarts()
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
                        <h1>FOOD CART</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('cartImage')} name='cartImage' value={state.cartImage} onChange={handleChange} placeholder='Enter shop image' />
                            {errors.cartImage ? (
                                <span style={{ color: "red" }}>{errors.cartImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('cartName')} name='cartName' value={state.cartName} onChange={handleChange} placeholder='Enter shop name' />
                            {errors.cartName ? (
                                <span style={{ color: "red" }}>{errors.cartName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('cartPrice')} name='cartPrice' value={state.cartPrice} onChange={handleChange} placeholder='Enter shop price' />
                            {errors.cartPrice ? (
                                <span style={{ color: "red" }}>{errors.cartPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postCarts()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 my-5">
                        <input type="text" placeholder='Search product' className='w-50' onChange={handleFilter} />
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
                                {carts && carts.filter((cart) => {
                                    return value.trim().toLowerCase() === " " ? cart : cart.cartName.toLowerCase().includes(value.toLowerCase())
                                }).map((cart) => (
                                    <tr className='row' key={cart._id}>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4'><img src={cart.cartImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>{cart.cartName}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>{cart.cartPrice}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(cart)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(cart._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default CartShop