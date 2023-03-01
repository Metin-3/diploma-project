import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";


const AdminEvent = () => {

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
        postEvents();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ eventImage: data.eventImage, eventName: data.eventName, eventContent: data.eventContent, eventRead: data.eventRead, eventDate: data.eventDate, eventTimeStart: data.eventTimeStart, eventTimeEnd: data.eventTimeEnd, eventLocation: data.eventLocation });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/event/${id}`, state);
        getEvents();
        setState({
            eventImage: "",
            eventName: "",
            eventContent: "",
            eventRead: "",
            eventDate: "",
            eventTimeStart: "",
            eventTimeEnd: "",
            eventLocation: ""
        })
    };


    //! POST
    const [state, setState] = useState({
        eventImage: "",
        eventName: "",
        eventContent: "",
        eventRead: "",
        eventDate: "",
        eventTimeStart: "",
        eventTimeEnd: "",
        eventLocation: ""
    })

    const postEvents = async () => {

        if (!state.eventImage || !state.eventName || !state.eventContent || !state.eventRead || !state.eventDate || !state.eventTimeStart || !state.eventTimeEnd || !state.eventLocation) return
        await axios.post("http://localhost:8080/event", state)
        getEvents()
        setState({
            eventImage: "",
            eventName: "",
            eventContent: "",
            eventRead: "",
            eventDate: "",
            eventTimeStart: "",
            eventTimeEnd: "",
            eventLocation: ""
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET DINNER
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await axios.get("http://localhost:8080/event")
        setEvents(res.data)
    }

    useEffect(() => {
        getEvents()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/event/${id}`)
        getEvents()
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
                        <h1>EVENT</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('eventImage')} name='eventImage' value={state.eventImage} onChange={handleChange} placeholder='Enter event image' />
                            {errors.eventImage ? (
                                <span style={{ color: "red" }}>{errors.eventImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventName')} name='eventName' value={state.eventName} onChange={handleChange} placeholder='Enter event name' />
                            {errors.eventName ? (
                                <span style={{ color: "red" }}>{errors.eventName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventContent')} name='eventContent' value={state.eventContent} onChange={handleChange} placeholder='Enter event content' />
                            {errors.eventContent ? (
                                <span style={{ color: "red" }}>{errors.eventContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventRead')} name='eventRead' value={state.eventRead} onChange={handleChange} placeholder='Enter event text' />
                            {errors.eventRead ? (
                                <span style={{ color: "red" }}>{errors.eventRead.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventDate')} name='eventDate' value={state.eventDate} onChange={handleChange} placeholder='Enter event date' />
                            {errors.eventDate ? (
                                <span style={{ color: "red" }}>{errors.eventDate.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventTimeStart')} name='eventTimeStart' value={state.eventTimeStart} onChange={handleChange} placeholder='Enter event time start' />
                            {errors.eventTimeStart ? (
                                <span style={{ color: "red" }}>{errors.eventTimeStart.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventTimeEnd')} name='eventTimeEnd' value={state.eventTimeEnd} onChange={handleChange} placeholder='Enter event time end' />
                            {errors.eventTimeEnd ? (
                                <span style={{ color: "red" }}>{errors.eventTimeEnd.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('eventLocation')} name='eventLocation' value={state.eventLocation} onChange={handleChange} placeholder='Enter event location' />
                            {errors.eventLocation ? (
                                <span style={{ color: "red" }}>{errors.eventLocation.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postEvents()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 my-5">
                        <div className='admin-filter'>
                            <div className='admin-filter-input'>
                                <input type="text" placeholder='Search product' className='w-75' onChange={handleFilter} />
                            </div>
                        </div>
                        <div className='table-responsive '>
                            <table className="table table-hover align-middle">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time start</th>
                                        <th scope="col">Time end</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events && events.filter((event) => {
                                        return value.trim().toLowerCase() === " " ? event : event.eventName.toLowerCase().includes(value.toLowerCase())
                                    }).map((event) => (
                                        <tr key={event._id}>
                                            <td> <img src={event.eventImage} className="table-img" alt="" /></td>
                                            <td>{event.eventName}</td>
                                            <td>{event.eventContent}</td>
                                            <td>{event.eventDate}</td>
                                            <td>{event.eventTimeStart}</td>
                                            <td>{event.eventTimeEnd}</td>
                                            <td>{event.eventLocation}</td>
                                            <td><button className='table-edit' onClick={(_id) => handleEditClick(event)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                            <td ><button className='table-delete' onClick={() => getDelete(event._id)}><i className="fa-solid fa-trash"></i></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default AdminEvent