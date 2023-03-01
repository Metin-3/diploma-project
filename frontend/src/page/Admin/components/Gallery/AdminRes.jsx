import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminRes = () => {

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
        postRess();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ resImage: data.resImage });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/res/${id}`, state);
        getRess();
        setState({
            resImage: "",
        })
    };

    //! POST
    const [state, setState] = useState({
        resImage: ""
    })

    const postRess = async () => {
        if (!state.resImage) return
        await axios.post("http://localhost:8080/res", state)
        getRess()
        setState({
            resImage: "",
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [ress, setRess] = useState([])

    const getRess = async () => {
        const res = await axios.get("http://localhost:8080/res")
        setRess(res.data)
    }

    useEffect(() => {
        getRess()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/res/${id}`)
        getRess()
    }


    return (
        <section id="admin-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>GALLERY RESTAURANT</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('resImage')} name='resImage' value={state.resImage} onChange={handleChange} placeholder='Enter restaurant image' />
                            {errors.resImage ? (
                                <span style={{ color: "red" }}>{errors.resImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postRess()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 table-responsive my-5">
                        <table className="table table-hover align-middle">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope='col'>Image</th>
                                    <th scope='col'>Edit</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {ress && ress.map((res) => (
                                    <tr key={res._id}>
                                        <td> <img src={res.resImage} className="table-img" alt="" /></td>
                                        <td><button className='table-edit' onClick={(_id) => handleEditClick(res)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td><button className='table-delete' onClick={() => getDelete(res._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminRes