import React from "react";
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();
    let auth; 

    try {
        auth = JSON.parse(localStorage.getItem("key"));
    } catch (e) {
        auth = null;
    }

    const logout = () => {
        localStorage.clear("key");
        navigate("/signin");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to="/">Article Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
                            {auth && auth.role === "admin" && (
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/dash">Dashboard</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/eco">Economics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pol">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fun">Funny</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/art-blog">Blog Article</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {
                                auth ?

                                    <button onClick={logout} className="btn btn-danger me-3" type="submit">Logout</button>

                                    :
                                    <>
                                        <Link to="/signin" className="btn btn-danger" type="submit">Sign In</Link>
                                        <Link to="/signup" className="btn btn-danger  mx-2" type="submit">Sign Up</Link>
                                    </>
                            }

                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
};

export default Navbar;