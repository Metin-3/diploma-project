import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";


const AdminBreakfast = () => {

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
        postBreakfasts();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ breakfastImage: data.breakfastImage, breakfastName: data.breakfastName, breakfastContent: data.breakfastContent, breakfastPrice: data.breakfastPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/breakfast/${id}`, state);
        getBreakfasts();
        setState({
            breakfastImage: "",
            breakfastName: "",
            breakfastContent: "",
            breakfastPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        breakfastImage: "",
        breakfastName: "",
        breakfastContent: "",
        breakfastPrice: 0
    })

    const postBreakfasts = async () => {
        if (!state.breakfastImage || !state.breakfastName || !state.breakfastContent || !state.breakfastPrice) return
        await axios.post("http://localhost:8080/breakfast", state)
        getBreakfasts()
        setState({
            breakfastImage: "",
            breakfastName: "",
            breakfastContent: "",
            breakfastPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET DINNER
    const [breakfasts, setBreakfasts] = useState([])

    const getBreakfasts = async () => {
        const res = await axios.get("http://localhost:8080/breakfast");
        setBreakfasts(res.data)
    }

    useEffect(() => {
        getBreakfasts()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/breakfast/${id}`)
        getBreakfasts()
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
                        <h1>BREAKFAST</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('breakfastImage')} name='breakfastImage' value={state.breakfastImage} onChange={handleChange} placeholder='Enter breakfast image' />
                            {errors.breakfastImage ? (
                                <span style={{ color: "red" }}>{errors.breakfastImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('breakfastName')} name='breakfastName' value={state.breakfastName} onChange={handleChange} placeholder='Enter breakfast name' />
                            {errors.breakfastName ? (
                                <span style={{ color: "red" }}>{errors.breakfastName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('breakfastContent')} name='breakfastContent' value={state.breakfastContent} onChange={handleChange} placeholder='Enter breakfast content' />
                            {errors.breakfastContent ? (
                                <span style={{ color: "red" }}>{errors.breakfastContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('breakfastPrice')} name='breakfastPrice' value={state.breakfastPrice} onChange={handleChange} placeholder='Enter breakfast price' />
                            {errors.breakfastPrice ? (
                                <span style={{ color: "red" }}>{errors.breakfastPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postBreakfasts()}>Add</button>
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
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Image</th>
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Name</th>
                                    <th className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>Content</th>
                                    <th className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>Price</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Edit</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {breakfasts && breakfasts.filter((breakfast) => {
                                    return value.trim().toLowerCase() === " " ? breakfast : breakfast.breakfastName.toLowerCase().includes(value.toLowerCase())
                                }).map((breakfast) => (
                                    <tr className='row' key={breakfast._id}>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3'> <img src={breakfast.breakfastImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>{breakfast.breakfastName}</td>
                                        <td className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>{breakfast.breakfastContent}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>{breakfast.breakfastPrice}</td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(breakfast)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(breakfast._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminBreakfast