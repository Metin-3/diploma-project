import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";


const ChurraShop = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postChurras();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ churraImage: data.churraImage, churraName: data.churraName, churraPrice: data.churraPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/churra/${id}`, state);
        getChurras();
        setState({
            churraImage: "",
            churraName: "",
            churraPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        churraImage: "",
        churraName: "",
        churraPrice: 0
    })

    const postChurras = async () => {
        if (!state.churraImage || !state.churraName || !state.churraPrice) return
        await axios.post("http://localhost:8080/churra", state)
        getChurras()
        setState({
            churraImage: "",
            churraName: "",
            churraPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [churras, setChurras] = useState([])

    const getChurras = async () => {
        const res = await axios.get("http://localhost:8080/churra")
        setChurras(res.data)
    }

    useEffect(() => {
        getChurras()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/churra/${id}`)
        getChurras()
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
                        <h1>CHURRASCARIA</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('churraImage')} name='churraImage' value={state.churraImage} onChange={handleChange} placeholder='Enter shop image' />
                            {errors.churraImage ? (
                                <span style={{ color: "red" }}>{errors.churraImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('churraName')} name='churraName' value={state.churraName} onChange={handleChange} placeholder='Enter shop name' />
                            {errors.churraName ? (
                                <span style={{ color: "red" }}>{errors.churraName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('churraPrice')} name='churraPrice' value={state.churraPrice} onChange={handleChange} placeholder='Enter shop price' />
                            {errors.churraPrice ? (
                                <span style={{ color: "red" }}>{errors.churraPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postChurras()}>Add</button>
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
                                {churras && churras.filter((churra) => {
                                    return value.trim().toLowerCase() === " " ? churra : churra.churraName.toLowerCase().includes(value.toLowerCase())
                                }).map((churra) => (
                                    <tr className='row' key={churra._id}>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4'><img src={churra.churraImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>{churra.churraName}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>{churra.churraPrice}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(churra)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(churra._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default ChurraShop