import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminGuest = () => {

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
        postGuests();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ guestImage: data.guestImage });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/guest/${id}`, state);
        getGuests();
        setState({
            guestImage: "",
        })
    };


    //! POST
    const [state, setState] = useState({
        guestImage: ""
    })

    const postGuests = async () => {
        if (!state.guestImage) return
        await axios.post("http://localhost:8080/guest", state)
        getGuests()
        setState({
            guestImage: "",
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [guests, setGuests] = useState([])

    const getGuests = async () => {
        const res = await axios.get("http://localhost:8080/guest")
        setGuests(res.data)
    }

    useEffect(() => {
        getGuests()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/guest/${id}`)
        getGuests()
    }

    return (
        <section id="admin-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>GALLERY GUESTS</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('guestImage')} name='guestImage' value={state.guestImage} onChange={handleChange} placeholder='Enter guest image' />
                            {errors.guestImage ? (
                                <span style={{ color: "red" }}>{errors.guestImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postGuests()}>Add</button>
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
                                {guests && guests.map((guest) => (
                                    <tr key={guest._id}>
                                        <td> <img src={guest.guestImage} className="table-img" alt="" /></td>
                                        <td><button className='table-edit' onClick={(_id) => handleEditClick(guest)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td><button className='table-delete' onClick={() => getDelete(guest._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminGuest