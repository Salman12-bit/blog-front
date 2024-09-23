import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Forgetpass = () => {
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        if (!email) {
            toast.error("User email is required.", { className: 'toast-custom' });
            return false;
        }
        if (!newpassword) {
            toast.error("User new password is required.", { className: 'toast-custom' });
            return false;
        }
        if (!confirmpassword) {
            toast.error("User confirm password is required.", { className: 'toast-custom' });
            return false;
        }
        if (newpassword.length < 8 || confirmpassword.length < 8) {
            toast.error("New & Confirm Password must be at least 8 characters long.", { className: 'toast-custom' });
            return false;
        }
        if (newpassword !== confirmpassword) {
            toast.error("Passwords do not match.", { className: 'toast-custom' });
            return false;
        }
        
        // Updated Password complexity check
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_.#\/])[A-Za-z\d@$!%*?&-_.#\/]{8,}$/;
        if (!passwordRegex.test(newpassword)) {
            toast.error("Please make password strong :)", { className: 'toast-custom' });
            return false;
        }

        return true;
    };

    const forgetUser = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        try {
            let result = await fetch("http://127.0.0.1:8500/forgetpassword", {
                method: "POST",
                body: JSON.stringify({ email, newpassword, confirmpassword }), // Include confirmpassword
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const data = await result.json();
    
            if (data.success) {
                toast.success(data.message || "User password updated successfully.", { className: 'toast-custom' });
                setTimeout(() => {
                    navigate("/signin");
                }, 1000);
            } else {
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
                                    <form encType="multipart/form-data" onSubmit={forgetUser}>
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
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                value={newpassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                id="form3Example4"
                                                className="form-control"
                                                placeholder="New Password"
                                            />
                                            <label className="form-label" htmlFor="form3Example4">New Password</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                value={confirmpassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                id="form3Example5"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                            />
                                            <label className="form-label" htmlFor="form3Example5">Confirm Password</label>
                                        </div>
                                        <button
                                            type="submit"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-danger btn-block mb-4"
                                        >
                                            Reset Password
                                        </button>
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

export default Forgetpass;
