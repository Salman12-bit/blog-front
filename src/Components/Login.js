import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!email) {
            toast.error("User email is Required..!!", { className: 'toast-custom' });
            return false;
        }
        if (!password) {
            toast.error("User password is Required..!!", { className: 'toast-custom' });
            return false;
        }
        return true;
    };

    const loginuser = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            let result = await fetch("http://127.0.0.1:8500/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await result.json();

            if (data.success) {
                localStorage.setItem('key', JSON.stringify(data.user));
                toast.success(data.message || "User login Successfully..!!", { className: 'toast-custom' });
                setTimeout(() => {
                    navigate("/");
                }, 1000); // 1.5 seconds delay before navigating
            }else {
                toast.error(data.message, { className: 'toast-custom' });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.", { className: 'toast-custom' });
        }
    };

    return (
        <>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                                The best offer <br />
                                <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form encType="multipart/form-data" onSubmit={loginuser}>
                                        {/* Email input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="form3Example3"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>
                                        {/* Password input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                id="form3Example4"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>
                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultValue
                                                id="form2Example33"
                                                defaultChecked
                                            />
                                            <label className="form-check-label text-danger" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-danger btn-block mb-4"
                                        >
                                            Sign In
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p className="text-muted text-center  my-4">Already have an account? 
                                                <Link to="/signup" className="text-danger ml-1">Sign up</Link> / 
                                                <Link to="/forget" className="text-danger ml-1">ForGet Password</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default Login;
