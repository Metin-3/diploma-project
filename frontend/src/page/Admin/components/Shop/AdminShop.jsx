import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";


const AdminShop = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postShops();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ shopImage: data.shopImage, shopName: data.shopName, shopPrice: data.shopPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/shop/${id}`, state);
        getShops();
        setState({
            shopImage: "",
            shopName: "",
            shopPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        shopImage: "",
        shopName: "",
        shopPrice: 0
    })

    const postShops = async () => {
        if (!state.shopImage || !state.shopName || !state.shopPrice) return
        await axios.post("http://localhost:8080/shop", state)
        getShops()
        setState({
            shopImage: "",
            shopName: "",
            shopPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [shops, setShops] = useState([])

    const getShops = async () => {
        const res = await axios.get("http://localhost:8080/shop")
        setShops(res.data)
    }

    useEffect(() => {
        getShops()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/shop/${id}`)
        getShops()
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
                        <h1>BAR MLECZNY</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('shopImage')} name='shopImage' value={state.shopImage} onChange={handleChange} placeholder='Enter shop image' />
                            {errors.shopImage ? (
                                <span style={{ color: "red" }}>{errors.shopImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('shopName')} name='shopName' value={state.shopName} onChange={handleChange} placeholder='Enter shop name' />
                            {errors.shopName ? (
                                <span style={{ color: "red" }}>{errors.shopName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('shopPrice')} name='shopPrice' value={state.shopPrice} onChange={handleChange} placeholder='Enter shop price' />
                            {errors.shopPrice ? (
                                <span style={{ color: "red" }}>{errors.shopPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postShops()}>Add</button>
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
                                {shops && shops.filter((shop) => {
                                    return value.trim().toLowerCase() === " " ? shop : shop.shopName.toLowerCase().includes(value.toLowerCase())
                                }).map((shop) => (
                                    <tr className='row' key={shop._id}>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4'><img src={shop.shopImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>{shop.shopName}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>{shop.shopPrice}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(shop)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(shop._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminShop