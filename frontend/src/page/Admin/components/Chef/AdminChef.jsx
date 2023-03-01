import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema"

const AdminChef = () => {

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
        postChefs();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ chefImage: data.chefImage, chefName: data.chefName, chefContent: data.chefContent, chefPrice: data.chefPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/chef/${id}`, state);
        getChefs();
        setState({
            chefImage: "",
            chefName: "",
            chefContent: "",
            chefPrice: 0
        })
    };


    //! POST
    const [state, setState] = useState({
        chefImage: "",
        chefName: "",
        chefContent: "",
        chefPrice: 0
    })

    const postChefs = async () => {

        if (!state.chefImage || !state.chefName || !state.chefContent || !state.chefPrice) return;
        await axios.post("http://localhost:8080/chef", state)
        getChefs();
        setState({
            chefImage: "",
            chefName: "",
            chefContent: "",
            chefPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET CHEF
    const [chefs, setChefs] = useState([])

    const getChefs = async () => {
        const res = await axios.get("http://localhost:8080/chef");
        setChefs(res.data)
    }

    useEffect(() => {
        getChefs()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/chef/${id}`)
        getChefs()
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
                        <h1>CHEF</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)} >
                            <input type="text" {...register('chefImage')} name='chefImage' value={state.chefImage} onChange={handleChange} placeholder='Enter food image' />
                            {errors.chefImage ? (
                                <span style={{ color: "red" }}>{errors.chefImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('chefName')} name='chefName' value={state.chefName} onChange={handleChange} placeholder='Enter drink name' />
                            {errors.chefName ? (
                                <span style={{ color: "red" }}>{errors.chefName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('chefContent')} name='chefContent' value={state.chefContent} onChange={handleChange} placeholder='Enter drink content' />
                            {errors.chefContent ? (
                                <span style={{ color: "red" }}>{errors.chefContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('chefPrice')} name='chefPrice' value={state.chefPrice} onChange={handleChange} placeholder='Enter drink price' />
                            {errors.chefPrice ? (
                                <span style={{ color: "red" }}>{errors.chefPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postChefs()}>Add</button> <br />
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
                                {chefs && chefs.filter((chef) => {
                                    return value.trim().toLowerCase() === "" ? chef : chef.chefName.toLowerCase().includes(value.toLowerCase())
                                }).map((chef) => (
                                    <tr className='row' key={chef._id}>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3'> <img src={chef.chefImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>{chef.chefName}</td>
                                        <td className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>{chef.chefContent}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>{chef.chefPrice}</td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(chef)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(chef._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminChef