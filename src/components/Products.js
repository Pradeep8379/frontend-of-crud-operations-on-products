import React, { useState } from "react";
import { useGetUserID } from '../Hooks/useGetUserId'
import { Navbar } from '../components/Navbar';
import axios from 'axios'
import { useGetUserToken } from './../Hooks/useGetUserToken';
import { useNavigate } from "react-router-dom";



export const Products = () => {

    const userID = useGetUserID();
    const token = useGetUserToken();
    axios.defaults.headers.common['x-api-key'] = token;
    // console.log(userID)
    const [name, setName] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCategoryNameChange = (event) => {
        setCategoryName(event.target.value)

    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)

    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)

    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)

    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)

    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log(name,description)
        try {
            await axios.post(`https://modern-shoulder-pads-crow.cyclic.app/products/${userID}`, {
                name, categoryName, price, quantity, description,

            });

            alert("Product added");


        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const handleUpdateProductSubmit = async (event) => {
        event.preventDefault();

        // console.log(name,description)
        try {
            await axios.put(`https://modern-shoulder-pads-crow.cyclic.app/products/${userID}`, {
                name, category, price, quantity, description,

            });

            alert("Product updated");


        } catch (error) {
            alert(error.response.data.message);
        }
    }


    const handleDeleteProductSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.delete(`https://modern-shoulder-pads-crow.cyclic.app/products/${userID}`,
                {
                    data: {
                        name: name
                    }
                });

            let Data = response.data.data

            alert("Product Deleted");
            // console.log(categories, 21);


        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }


    return (
        <>
            <Navbar />

            <div className='d-flex justify-content-around'>
                <form onSubmit={handleSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-success ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '1rem' }}>Add a product</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput8" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput8" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput9" className="form-label">Category</label>
                            <input type="text" className="form-control" id="exampleFormControlInput9" style={{ width: '20rem' }} onChange={handleCategoryNameChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput10" className="form-label">Price</label>
                            <input type="number" className="form-control" id="exampleFormControlInput10" style={{ width: '20rem' }} onChange={handlePriceChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput11" className="form-label">Quantity</label>
                            <input type="number" className="form-control" id="exampleFormControlInput11" style={{ width: '20rem' }} onChange={handleQuantityChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea12" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea12" rows="3" style={{ width: '25rem' }} onChange={handleDescriptionChange} required ></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3"  >Add</button>
                        {/* <Link className='mt-2' >Add product</Link> */}

                    </div>
                </form >

                <form onSubmit={handleUpdateProductSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-success ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '1rem' }}>Update a Product</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput15" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput15" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput16" className="form-label">Category</label>
                            <input type="text" className="form-control" id="exampleFormControlInput16" style={{ width: '20rem' }} onChange={handleCategoryChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput17" className="form-label">Price</label>
                            <input type="number" className="form-control" id="exampleFormControlInput17" style={{ width: '20rem' }} onChange={handlePriceChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput18" className="form-label">Quantity</label>
                            <input type="number" className="form-control" id="exampleFormControlInput18" style={{ width: '20rem' }} onChange={handleQuantityChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea19" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea19" rows="3" style={{ width: '25rem' }} onChange={handleDescriptionChange} required ></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3" >Update</button>
                    </div>
                </form>

                <form onSubmit={handleDeleteProductSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-danger ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '1rem' }}>Delete a Product</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput14" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput14" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <button type="submit" className="btn btn-outline-danger my-3" >Delete</button>
                    </div>
                </form>

            </div>
        </>
    )
}
