import React, { useState } from 'react';
import '../../styles/contact/contactContent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../Schema/formSchema";
import { useForm } from 'react-hook-form';

const ContactContent = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postMessages();
        console.log(data);
    }

    // const [id, setId] = useState(undefined);
    // const handleEditClick = (data) => {
    //     setState({ drinkName: data.messageName,messageEmail: data.messageEmail ,messageContent: data.messageContent,});
    //     setId(data._id);
    // };


    //! POST MESSAGE
    const [state, setState] = useState({
        messageName: "",
        messageEmail: "",
        messageSubject: "",
        messageContent: ""
    })

    const postMessages = async () => {
        if (!state.messageName || !state.messageEmail || !state.messageSubject || !state.messageContent) return
        await axios.post("http://localhost:8080/message", state)
        // getMessages()
        setState({
            messageName: "",
            messageEmail: "",
            messageSubject: "",
            messageContent: ""
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET MESSAGE
    // const [messages, setMessages] = useState([])

    // const getMessages = async () => {
    //     const res = await axios.get("http://localhost:8080/message")
    //     setMessages(res.data)
    // }

    // useEffect(() => {
    //     getMessages()
    // }, [])
    return (
        <section id="contact-content">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <div className='contact-content-header'>
                                <p>Get in</p>
                                <h1>TOUCH</h1>
                            </div>
                            <p className='text-center text-secondary mb-5'>We are also active in social media. You can find us
                                on below adresses.</p>
                            <div className='text-center py-2'>
                                <p className='contact-content-icon'><i className="fa-solid fa-location-dot"></i></p>
                                <p className='contact-content-text'>329 Queensberry Street, North Melbourne
                                    VIC 3051, Australia.</p>
                            </div>
                            <div className='text-center py-3'>
                                <p className='contact-content-icon'><i className="fa-regular fa-clock"></i></p>
                                <p className='contact-content-text'>Opening Hour <span>8:00 AM</span> - <span>10:00 PM</span> <br />
                                    Monday - Sunday</p>
                                <p className='contact-content-text'>
                                    Call.<a href="tel:01794 340 979">01794 340 979</a>
                                    <br />
                                    Email.<a href="tomail:hello@yourmail.com">hello@yourmail.com</a>
                                </p>
                            </div>
                            <div className='text-center py-3'>
                                <ul className='contact-content-list'>
                                    <li>
                                        <Link to="https://www.facebook.com/" className='contact-content-list-link'>
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/?lang=en" className='contact-content-list-link'>
                                            <i className="fa-brands fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.google.com/" className='contact-content-list-link'>
                                            <i className="fa-brands fa-google-plus-g"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/" className='contact-content-list-link'>
                                            <i className="fa-brands fa-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <div className='contact-content-header'>
                                <p>Send a</p>
                                <h1>MESSAGE</h1>
                            </div>
                            <p className='text-center text-secondary mb-5'>Do you have anything in your mind to tell us? Please don't hesitate to get in touch to us via our contact form.</p>
                            <form action="" onSubmit={handleSubmit(onSubmit)} className='contact-inner-inputs'>
                                <div className='contact-inner-input'>
                                    <input type="text" {...register('messageName')} value={state.messageName} name="messageName" id='name' placeholder='Full Name*' onChange={handleChange} /> <br />
                                    {errors.messageName ? (
                                        <span style={{ color: "red" }}>{errors.messageName.message}</span>
                                    ) : (
                                        <></>
                                    )}
                                    <input type="email" {...register('messageEmail')} value={state.messageEmail} name="messageEmail" id='email' placeholder='Your Email*' onChange={handleChange} />
                                    {errors.messageEmail ? (
                                        <span style={{ color: "red", display: "block" }}>{errors.messageEmail.message}</span>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <input type="text" {...register('messageSubject')} value={state.messageSubject} name="messageSubject" id="subject" placeholder='Subject*' onChange={handleChange} /> <br />
                                {errors.messageSubject ? (
                                    <span style={{ color: "red" }}>{errors.messageSubject.message}</span>
                                ) : (
                                    <></>
                                )}
                                <textarea {...register('messageContent')} name="messageContent" value={state.messageContent} id="message" rows="8" placeholder='Your Message' onChange={handleChange}></textarea > <br />
                                {errors.messageContent ? (
                                    <span style={{ color: "red" }}>{errors.messageContent.message}</span>
                                ) : (
                                    <></>
                                )}
                                <button onClick={() => postMessages()}>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactContent