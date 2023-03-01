import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";


const BakeryShop = () => {

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
        postBakerys();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ bakeryImage: data.bakeryImage, bakeryName: data.bakeryName, bakeryPrice: data.bakeryPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/bakery/${id}`, state);
        getBakerys();
        setState({
            bakeryImage: "",
            bakeryName: "",
            bakeryPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        bakeryImage: "",
        bakeryName: "",
        bakeryPrice: 0
    })

    const postBakerys = async () => {
        if (!state.bakeryImage || !state.bakeryName || !state.bakeryPrice) return
        await axios.post("http://localhost:8080/bakery", state)
        getBakerys()
        setState({
            bakeryImage: "",
            bakeryName: "",
            bakeryPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [bakerys, setBakerys] = useState([])

    const getBakerys = async () => {
        const res = await axios.get("http://localhost:8080/bakery")
        setBakerys(res.data)
    }

    useEffect(() => {
        getBakerys()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/bakery/${id}`)
        getBakerys()
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
                        <h1>BAKERY</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('bakeryImage')} name='bakeryImage' value={state.bakeryImage} onChange={handleChange} placeholder='Enter shop image' />
                            {errors.bakeryImage ? (
                                <span style={{ color: "red" }}>{errors.bakeryImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('bakeryName')} name='bakeryName' value={state.bakeryName} onChange={handleChange} placeholder='Enter shop name' />
                            {errors.bakeryName ? (
                                <span style={{ color: "red" }}>{errors.bakeryName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('bakeryPrice')} name='bakeryPrice' value={state.bakeryPrice} onChange={handleChange} placeholder='Enter shop price' />
                            {errors.bakeryPrice ? (
                                <span style={{ color: "red" }}>{errors.bakeryPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postBakerys()}>Add</button>
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
                                {bakerys && bakerys.filter((bakery) => {
                                    return value.trim().toLowerCase() === " " ? bakery : bakery.bakeryName.toLowerCase().includes(value.toLowerCase())
                                }).map((bakery) => (
                                    <tr className='row' key={bakery._id}>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'><img src={bakery.bakeryImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>{bakery.bakeryName}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>{bakery.bakeryPrice}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(bakery)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(bakery._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default BakeryShop