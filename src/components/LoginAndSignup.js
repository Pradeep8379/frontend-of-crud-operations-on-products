import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import axios from 'axios'

export const LoginAndSignup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        // Send OTP to email and phone number
        // Here's some sample code to generate an OTP
        try {
            await axios.post("https://modern-shoulder-pads-crow.cyclic.app/register", {
                name, email, password
            });
            alert("Registration Completed! Now login.");

        } catch (error) {
            console.error(error);
        }
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            let user = await axios.post("https://modern-shoulder-pads-crow.cyclic.app/login", {
                email, password
            });
            // console.log(user.data.data)
            window.localStorage.setItem("userId", user.data.data.userId);
            window.localStorage.setItem("token", user.data.data.token);
            window.localStorage.setItem("user", true);

            navigate('/categories');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-around'>
                <form onSubmit={handleSignupSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-success ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '7rem' }}>Signup</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput3" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput3" style={{ width: '20rem' }} onChange={handleNameChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput4" style={{ width: '20rem' }} onChange={handleEmailChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput5" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput5" style={{ width: '20rem' }} onChange={handlePasswordChange} required />
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3"  >SignUp</button>
                        {/* <Link className='mt-2' >Add product</Link> */}

                    </div>
                </form>

                <form onSubmit={handleLoginSubmit}>
                    <div className='d-xl-flex flex-column align-items-center text-info ' >
                        <h1 className='fw-bolder fs-2' style={{ marginTop: '7rem' }}>Login</h1>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput6" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput6" style={{ width: '20rem' }} onChange={handleEmailChange} required />
                        </div>
                        <div className="mb-3 " >
                            <label htmlFor="exampleFormControlInput7" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput7" style={{ width: '20rem' }} onChange={handlePasswordChange} required />
                        </div>
                        <button type="submit" className="btn btn-outline-info my-3"  >Login</button>
                        {/* <Link className='mt-2' >Add product</Link> */}

                    </div>
                </form>
            </div>
        </>
    )
}
