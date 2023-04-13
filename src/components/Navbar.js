import React from 'react'
import { Link } from 'react-router-dom'
import { useGetUserToken } from './../Hooks/useGetUserToken';
import { useGetUserID } from '../Hooks/useGetUserId'
import { useNavigate } from "react-router-dom";
let isLoggedIn = window.localStorage.getItem('user')



export const Navbar = () => {

    // const userID = useGetUserID();
    // const token = useGetUserToken();

    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.clear();
        navigate('/loginAndSignup')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Product management</Link>

                    <div className=" collapse navbar-collapse " id="navbarSupportedContent">

                        <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 ">


                            {!isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <Link type="button" className="btn text-warning" to="/categories">Login </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item ">
                                        <Link type="button"  className="btn text-warning" onClick={logout}  to="/loginAndSignup">Logout</Link>
                                    </li>
                                </>
                            )}

                            <li className="nav-item">
                                <Link className="nav-link text-warning" to="/categories">Categories</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-warning" to="/products">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-warning" to="/getProducts">Get Products</Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}
