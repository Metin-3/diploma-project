import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "../../../../Schema/formSchema";

const AdminCocktail = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        postCocktails();
        console.log(data);
    }

    const [id, setId] = useState(undefined);
    const handleEditClick = (data) => {
        setState({ cocktailImage: data.cocktailImage, cocktailName: data.cocktailName, cocktailContent: data.cocktailContent, cocktailPrice: data.cocktailPrice });
        setId(data._id);
    };

    const updateData = async (_id) => {
        await axios.put(`http://localhost:8080/cocktail/${id}`, state);
        getCocktails();
        setState({
            cocktailImage: "",
            cocktailName: "",
            cocktailContent: "",
            cocktailPrice: 0
        })
    };



    //! POST
    const [state, setState] = useState({
        cocktailImage: "",
        cocktailName: "",
        cocktailContent: "",
        cocktailPrice: 0
    })

    const postCocktails = async () => {
        if (!state.cocktailImage || !state.cocktailName || !state.cocktailContent || !state.cocktailPrice) return;
        await axios.post("http://localhost:8080/cocktail", state)
        getCocktails();
        setState({
            cocktailImage: "",
            cocktailName: "",
            cocktailContent: "",
            cocktailPrice: 0
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    //! GET DRINKS
    const [cocktails, setCocktails] = useState([])

    const getCocktails = async () => {
        const res = await axios.get("http://localhost:8080/cocktail");
        setCocktails(res.data)
    }

    useEffect(() => {
        getCocktails()
    }, [])


    //! DELETE
    const getDelete = async (id) => {
        await axios.delete(`http://localhost:8080/cocktail/${id}`)
        getCocktails()
    }
    return (
        <section id="admin-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>COCKTAIL</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('cocktailImage')} name='cocktailImage' value={state.cocktailImage} onChange={handleChange} placeholder='Enter cocktail image' />
                            {errors.cocktailImage ? (
                                <span style={{ color: "red" }}>{errors.cocktailImage.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text"{...register('cocktailName')} name='cocktailName' value={state.cocktailName} onChange={handleChange} placeholder='Enter cocktail name' />
                            {errors.cocktailName ? (
                                <span style={{ color: "red" }}>{errors.cocktailName.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="text"{...register('cocktailContent')} name='cocktailContent' value={state.cocktailContent} onChange={handleChange} placeholder='Enter cocktail content' />
                            {errors.cocktailContent ? (
                                <span style={{ color: "red" }}>{errors.cocktailContent.message}</span>
                            ) : (
                                <></>
                            )}
                            <input type="number"{...register('cocktailPrice')} name='cocktailPrice' value={state.cocktailPrice} onChange={handleChange} placeholder='Enter cocktail price' />
                            {errors.cocktailPrice ? (
                                <span style={{ color: "red" }}>{errors.cocktailPrice.message}</span>
                            ) : (
                                <></>
                            )}
                            <button className='submit-btn' onClick={() => postCocktails()}>Add</button>
                            <button className='submit-btn my-3' onClick={() => updateData()}>Edit</button>
                        </form>
                    </div>
                    <div className="col-12 my-5">
                        <table className="table table-hover align-middle">
                            <thead className='table-dark'>
                                <tr className='row'>
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Image</th>
                                    <th className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>Name</th>
                                    <th className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>Content</th>
                                    <th className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>Price</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Edit</th>
                                    <th className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text noActive'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='table-responsive'>
                                {cocktails && cocktails.map((cocktail) => (
                                    <tr className='row' key={cocktail._id}>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3'> <img src={cocktail.cocktailImage} className="table-img" alt="" /></td>
                                        <td className='col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 td-text'>{cocktail.cocktailName}</td>
                                        <td className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 td-text'>{cocktail.cocktailContent}</td>
                                        <td className='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 td-text'>{cocktail.cocktailPrice}</td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-edit' onClick={(_id) => handleEditClick(cocktail)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                                        <td className='col-lg-1 col-md-1 col-sm-6 col-xs-6 col-6 td-text'><button className='table-delete' onClick={() => getDelete(cocktail._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default AdminCocktail