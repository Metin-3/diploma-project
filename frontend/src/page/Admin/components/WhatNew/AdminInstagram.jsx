import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminInstagram = () => {

    //! POST
    const [state, setState] = useState({
        instagramImage: ""
    })

    const postInstagrams = (e) => {
        e.preventDefault();

        if (!state.instagramImage) return
        axios.post("http://localhost:8080/instagram", state)
        setState({
            instagramImage: "",
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET SHOP
    const [instagrams, setInstagrams] = useState([])

    const getInstagrams = () => {
        fetch("http://localhost:8080/instagram")
            .then(res => res.json())
            .then(data =>
                setInstagrams(data)
            )
    }

    useEffect(() => {
        getInstagrams()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        axios.delete(`http://localhost:8080/instagram/${id}`)
        getInstagrams()
    }
    return (
        <section id="admin-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>INSTAGRAM</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={postInstagrams}>
                            <input type="text" name='instagramImage' value={state.instagramImage} onChange={handleChange} placeholder='Enter instagram image' /> <br />
                            <button className='submit-btn'>Submit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 my-5">
                        <table className="table table-hover align-middle">
                            <thead className='table-dark'>
                                <tr>
                                    <th className="col-6">Image</th>
                                    <th className="col-6">Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {instagrams && instagrams.map(({ _id, instagramImage }) => (
                                    <tr key={_id}>
                                        <td> <img src={instagramImage} className="table-img" alt="" /></td>
                                        <td><button className='table-delete' onClick={() => getDelete(_id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminInstagram