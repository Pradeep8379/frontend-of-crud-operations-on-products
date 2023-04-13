import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { useGetUserID } from '../Hooks/useGetUserId'
import { useGetUserToken } from '../Hooks/useGetUserToken';
import axios from "axios";


export const GetCategories = () => {
    const userID = useGetUserID();
    const token = useGetUserToken();
    axios.defaults.headers.common['x-api-key'] = token;
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/category/${userID}`);
                let Data = response.data.data

                setCategories(Data);
                // console.log(categories, 21);


            } catch (error) {
                alert(error.response.data.message);
            }
        };

        fetchCategories();
    }, []);


    return (
        <>
            <Navbar />


            <div className='container'>
                <div className='row'>
                    {categories.map((x, idx) => (
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4  ' key={idx}>
                            <div className="card bg-danger " >
                                <div className="card-body">
                                    <h5 className="card-title">{x.name}</h5>
                                    <p className="card-text">{x.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
