import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { useGetUserID } from '../Hooks/useGetUserId'
import { useGetUserToken } from '../Hooks/useGetUserToken';
import axios from "axios";


export const Getproducts = () => {

    const userID = useGetUserID();
    const token = useGetUserToken();
    axios.defaults.headers.common['x-api-key'] = token;
    let [products, setProducts] = useState([]);
    let [allProducts, setAllProducts] = useState([]);
    let [product, setProduct] = useState({});
    const [name, setName] = useState("");

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:4000/productsByCategory/${userID}`, { name });
    //             let Data = response.data.data

    //             setProducts(Data);
    //             // console.log(categories, 21);


    //         } catch (error) {
    //             alert(error.response.data.message);
    //         }
    //     };

    //      fetchCategories();
    // }, [name]);

    const handleNameChange = (event) => {
        setName(event.target.value)
        // console.log(name);
    }

    const handleProductsByCategorySubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://modern-shoulder-pads-crow.cyclic.app/productsByCategory/${name}/${userID}`,

            );
            let Data = response.data.data

            setProducts(Data);
            // console.log(categories, 21);


        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    const handleSingleProductSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://modern-shoulder-pads-crow.cyclic.app/singleProduct/${name}/${userID}`,

            );
            let Data = response.data.data

            setProduct(Data);
            // console.log(categories, 21);


        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    const getAllProducts = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://modern-shoulder-pads-crow.cyclic.app/products/${userID}`,

            );
            let Data = response.data.data
            console.log(response);

            setAllProducts(Data);
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
                <form onSubmit={handleProductsByCategorySubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-success ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '1rem' }}>Get products by category</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput13" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput13" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3" >Get Products</button>
                    </div>
                </form>

                <form onSubmit={handleSingleProductSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-success ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '1rem' }}>Get a specific product</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput14" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput14" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3" >Get Product</button>
                    </div>
                </form>

                <button type="Button" className="btn btn-outline-success h-25 my-3 btn-sm " onClick={getAllProducts}>Get All Products</button>

               

            </div>



            {products.length > 0 ? <div className='container'>
                <div className='row'>
                    {products.map((item, idx) => (
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4  ' key={idx}>
                            <div className="card bg-danger " >
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{name}</p>
                                    <p className="card-text">Price : {item.price}</p>
                                    <p className="card-text">Quantity : {item.quantity}</p>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> : ''}

            {typeof (product.name) == 'string' ? <div className='container'>
                <div className='row'>

                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4  ' >
                        <div className="card bg-danger " >
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price : {product.price}</p>
                                <p className="card-text">Quantity : {product.quantity}</p>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div> : ''}


            {allProducts.length > 0 ? <div className='container'>
                <div className='row'>
                    {allProducts.map((item, idx) => (
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4  ' key={idx}>
                            <div className="card bg-danger " >
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{name}</p>
                                    <p className="card-text">Price : {item.price}</p>
                                    <p className="card-text">Quantity : {item.quantity}</p>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> : ''}



        </>
    )
}
