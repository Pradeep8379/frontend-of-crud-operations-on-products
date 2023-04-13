import React, { useState } from "react";
import { useGetUserID } from '../Hooks/useGetUserId'
import { Navbar } from '../components/Navbar';
import axios from 'axios'
import { useGetUserToken } from './../Hooks/useGetUserToken';
import { useNavigate } from "react-router-dom";


export const Categories = () => {
    const userID = useGetUserID();
    const token = useGetUserToken();
    axios.defaults.headers.common['x-api-key'] = token;
    // console.log(userID)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)

    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log(name,description)
        try {
            await axios.post(`http://localhost:4000/category/${userID}`, {
                name, description,

            });

            alert("Category added");


        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const handleDeleteCategory = async (event) => {
        event.preventDefault();

        // console.log(name)
        try {
            await axios.delete(`http://localhost:4000/category/${userID}`, {
                data: {
                    name: name
                }
            });

            alert("Category Deleted");


        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const hadleGetCategories = async (event) => {
        event.preventDefault();
        navigate('/getCategories')
        

    }
    return (
        <>
            <Navbar />

            <div className='d-flex justify-content-around'>
                <form onSubmit={handleSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-success ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '7rem' }}>Add a category</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: '25rem' }} onChange={handleDescriptionChange} required ></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3"  >Add</button>
                        {/* <Link className='mt-2' >Add product</Link> */}

                    </div>
                </form >

                <form onSubmit={handleDeleteCategory}>
                    <div className='d-xl-flex flex-column align-items-center text-danger ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '7rem' }}>Delete a category</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>

                        <button type="submit" className="btn btn-outline-danger my-3" >Delete</button>
                        {/* <Link className='mt-2' >Add product</Link> */}

                    </div>
                </form>

                <form onSubmit={hadleGetCategories}>
                    <div className='d-xl-flex flex-column align-items-center text-info ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '7rem' }}>Get categories</h1>
                        <button type="submit" className="btn btn-outline-info my-3" >Get</button>
                        {/* <Link className='mt-2' >Add product</Link> */}

                    </div>
                </form>
            </div>
        </>
    )
}
