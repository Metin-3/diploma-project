import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminDinner = () => {

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
        postDinners();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ dinnerImage: data.dinnerImage, dinnerName: data.dinnerName, dinnerContent: data.dinnerContent, dinnerPrice: data.dinnerPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/dinner/${id}`, state);
        getDinners();
        setState({
            dinnerImage: "",
            dinnerName: "",
            dinnerContent: "",
            dinnerPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        dinnerImage: "",
        dinnerName: "",
        dinnerContent: "",
        dinnerPrice: 0
    })

    const postDinners = async () => {
        if (!state.dinnerImage || !state.dinnerName || !state.dinnerContent || !state.dinnerPrice) return
        await axios.post("http://localhost:8080/dinner", state)
        getDinners()
        setState({
            dinnerImage: "",
            dinnerName: "",
            dinnerContent: "",
            dinnerPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET DINNER
    const [dinners, setDinners] = useState([])

    const getDinners = async () => {
        const res = await axios.get("http://localhost:8080/dinner");
        setDinners(res.data)
    }

    useEffect(() => {
        getDinners()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/dinner/${id}`)
        getDinners()
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
                        <h1>DINNER</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('dinnerImage')} name='dinnerImage' value={state.dinnerImage} onChange={handleChange} placeholder='Enter dinner image' />
                            {errors.dinnerImage ? (
                                <span style={{ color: "red" }}>{errors.dinnerImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('dinnerName')} name='dinnerName' value={state.dinnerName} onChange={handleChange} placeholder='Enter dinner name' />
                            {errors.dinnerName ? (
                                <span style={{ color: "red" }}>{errors.dinnerName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('dinnerContent')} name='dinnerContent' value={state.dinnerContent} onChange={handleChange} placeholder='Enter dinner content' />
                            {errors.dinnerContent ? (
                                <span style={{ color: "red" }}>{errors.dinnerContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('dinnerPrice')} name='dinnerPrice' value={state.dinnerPrice} onChange={handleChange} placeholder='Enter dinner price' />
                            {errors.dinnerPrice ? (
                                <span style={{ color: "red" }}>{errors.dinnerPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postDinners()}>Add</button>
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
                                {dinners && dinners.filter((dinner) => {
                                    return value.trim().toLowerCase() === " " ? dinner : dinner.dinnerName.toLowerCase().includes(value.toLowerCase())
                                }).map((dinner) => (
                                    <tr className='row' key={dinner._id}>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3'> <img src={dinner.dinnerImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>{dinner.dinnerName}</td>
                                        <td className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>{dinner.dinnerContent}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>{dinner.dinnerPrice}</td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(dinner)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(dinner._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminDinner