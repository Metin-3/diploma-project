import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminBlog = () => {

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
        postBlogs();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ blogImage: data.blogImage, blogName: data.blogName, blogContent: data.blogContent, blogMonth: data.blogMonth, blogDay: data.blogDay });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/blog/${id}`, state);
        getBlogs();
        setState({
            blogImage: "",
            blogName: "",
            blogContent: "",
            blogMonth: "",
            blogDay: 0
        })
    };

    //! POST
    const [state, setState] = useState({
        blogImage: "",
        blogName: "",
        blogContent: "",
        blogMonth: "",
        blogDay: 0
    })

    const postBlogs = async () => {
        if (!state.blogImage || !state.blogName || !state.blogContent || !state.blogMonth || !state.blogDay) return
        await axios.post("http://localhost:8080/blog", state)
        getBlogs()
        setState({
            blogImage: "",
            blogName: "",
            blogContent: "",
            blogMonth: "",
            blogDay: ""
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET BLOG
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        const res = await axios.get("http://localhost:8080/blog")
        setBlogs(res.data)
    }

    useEffect(() => {
        getBlogs()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/blog/${id}`)
        getBlogs()
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
                        <h1>BLOG</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('blogImage')} name='blogImage' value={state.blogImage} onChange={handleChange} placeholder='Enter blog image' />
                            {errors.blogImage ? (
                                <span style={{ color: "red" }}>{errors.blogImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('blogName')} name='blogName' value={state.blogName} onChange={handleChange} placeholder='Enter blog name' />
                            {errors.blogName ? (
                                <span style={{ color: "red" }}>{errors.blogName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('blogContent')} name='blogContent' value={state.blogContent} onChange={handleChange} placeholder='Enter blog content' />
                            {errors.blogContent ? (
                                <span style={{ color: "red" }}>{errors.blogContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text" {...register('blogMonth')} name='blogMonth' value={state.blogMonth} onChange={handleChange} placeholder='Enter blog month' />
                            {errors.blogMonth ? (
                                <span style={{ color: "red" }}>{errors.blogMonth.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number" {...register('blogDay')} name='blogDay' value={state.blogDay} onChange={handleChange} placeholder='Enter blog day' />
                            {errors.blogDay ? (
                                <span style={{ color: "red" }}>{errors.blogDay.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postBlogs()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div> <br />
                    <div className="col-12 my-5">
                        <div className='admin-filter'>
                            <div className='admin-filter-input'>
                                <input type="text" placeholder='Search product' className='w-75' onChange={handleFilter} />
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table className="table table-hover align-middle">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Month</th>
                                        <th scope="col">Day</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className='table-responsive'>
                                    {blogs && blogs.filter((blog) => {
                                        return value.trim().toLowerCase() === " " ? blog : blog.blogName.toLowerCase().includes(value.toLowerCase())
                                    }).map((blog) => (
                                        <tr key={blog._id}>
                                            <td> <img src={blog.blogImage} className="table-img" alt="" /></td>
                                            <td>{blog.blogName}</td>
                                            <td>{blog.blogContent}</td>
                                            <td>{blog.blogMonth}</td>
                                            <td>{blog.blogDay}</td>
                                            <td><button className='table-edit' onClick={(_id) => handleEditClick(blog)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                            <td><button className='table-delete' onClick={() => getDelete(blog._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminBlog