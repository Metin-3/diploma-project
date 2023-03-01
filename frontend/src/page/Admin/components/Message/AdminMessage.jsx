import React, { useEffect, useState } from 'react';
import '../Message/adminMessage.css';
import axios from 'axios';

const AdminMessage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    //! GET MESSAGE
    const [messages, setMessages] = useState([])

    const getMessages = async () => {
        const res = await axios.get("http://localhost:8080/message")
        setMessages(res.data)
    }

    useEffect(() => {
        getMessages()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/message/${id}`)
        getMessages()
    }

    //! FILTER
    const [value, setValue] = useState("")
    const handleFilter = (e) => {
        setValue(e.target.value)
    }


    return (
        <div style={{ padding: "70px 0" }} className="container">
            <div className='admin-message-input'>
                <input type="text" onChange={handleFilter} placeholder='Search' />
            </div>
            {messages && messages.filter((message) => {
                return value.trim().toLowerCase() === "" ? message : message.messageName.toLowerCase().includes(value.toLowerCase())
            }).map((message) => (
                <div key={message._id} className="card admin-message my-4">
                    <h5 className="card-header">{message.messageName}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{message.messageEmail}</h5>
                        <h5 className="card-title">{message.messageSubject}</h5>
                        <p className="card-text">{message.messageContent}</p>


                        <button type='button' className="admin-message-btn admin-message-btn-delete" data-bs-toggle="modal" data-bs-target="#exampleModal" >DELETE</button>

                        <div className="modal  fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">User message</h5>
                                        <button type="button" className="admin-message-btn" data-bs-dismiss="modal" aria-label="Close">X</button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure you want to delete the message?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="admin-message-btn admin-message-btn-close" data-bs-dismiss="modal">CLOSE</button>
                                        <button type="button" className="admin-message-btn admin-message-btn-delete" onClick={() => getDelete(message._id)}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminMessage