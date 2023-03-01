import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminTable = () => {

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
        postTables();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ tableImage: data.tableImage });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/table/${id}`, state);
        getTables();
        setState({
            tableImage: "",
        })
    };

    //! POST
    const [state, setState] = useState({
        tableImage: ""
    })

    const postTables = async () => {
        if (!state.tableImage) return
        await axios.post("http://localhost:8080/table", state)
        getTables()
        setState({
            tableImage: "",
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [tables, setTables] = useState([])

    const getTables = async () => {
        const res = await axios.get("http://localhost:8080/table")
        setTables(res.data)
    }

    useEffect(() => {
        getTables()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/table/${id}`)
        getTables()
    }
    return (
        <section id="admin-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>GALLERY TABLE</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"  {...register('tableImage')} name='tableImage' value={state.tableImage} onChange={handleChange} placeholder='Enter table image' />
                            {errors.tableImage ? (
                                <span style={{ color: "red" }}>{errors.tableImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postTables()}>Add</button>
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
                                {tables && tables.map((table) => (
                                    <tr key={table._id}>
                                        <td> <img src={table.tableImage} className="table-img" alt="" /></td>
                                        <td><button className='table-edit' onClick={(_id) => handleEditClick(table)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td><button className='table-delete' onClick={() => getDelete(table._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminTable