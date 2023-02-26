import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";


const BoothShop = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postBooths();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ boothImage: data.boothImage, boothName: data.boothName, boothPrice: data.boothPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/booth/${id}`, state);
        getBooths();
        setState({
            boothImage: "",
            boothName: "",
            boothPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        boothImage: "",
        boothName: "",
        boothPrice: 0
    })

    const postBooths = async () => {
        if (!state.boothImage || !state.boothName || !state.boothPrice) return
        await axios.post("http://localhost:8080/booth", state)
        getBooths()
        setState({
            boothImage: "",
            boothName: "",
            boothPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [booths, setBooths] = useState([])

    const getBooths = async () => {
        const res = await axios.get("http://localhost:8080/booth")
        setBooths(res.data)
    }

    useEffect(() => {
        getBooths()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/booth/${id}`)
        getBooths()
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
                        <h1>FOOD BOOTH</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('boothImage')} name='boothImage' value={state.boothImage} onChange={handleChange} placeholder='Enter shop image' />
                            {errors.boothImage ? (
                                <span style={{ color: "red" }}>{errors.boothImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('boothName')} name='boothName' value={state.boothName} onChange={handleChange} placeholder='Enter shop name' />
                            {errors.boothName ? (
                                <span style={{ color: "red" }}>{errors.boothName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('boothPrice')} name='boothPrice' value={state.boothPrice} onChange={handleChange} placeholder='Enter shop price' />
                            {errors.boothName ? (
                                <span style={{ color: "red" }}>{errors.boothName.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postBooths()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 my-5">
                        <input type="text" placeholder='Search product' className='w-25' onChange={handleFilter} />
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
                                {booths && booths.filter((booth) => {
                                    return value.trim().toLowerCase() === " " ? booth : booth.boothName.toLowerCase().includes(value.toLowerCase())
                                }).map((booth) => (
                                    <tr className='row' key={booth._id}>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4'><img src={booth.boothImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 td-text'>{booth.boothName}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 td-text'>{booth.boothPrice}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(booth)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(booth._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default BoothShop