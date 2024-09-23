import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



const Changerole = () => {

    const [email, setEmail] = useState('');
    const [newrole, setNewRole] = useState('');
    const [confirmrole, setConfirmRole] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        if (!email) {
            toast.error("User email is Required..!!", { className: 'toast-custom' });
            return false;
        }
        if (!newrole) {
            toast.error("User newrole is Required..!!", { className: 'toast-custom' });
            return false;
        }
        if (!confirmrole) {
            toast.error("User Confirmrole is Required..!!", { className: 'toast-custom' });
            return false;
        }
        return true;
    };


    const changeRule = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }


        try {
            let result = await fetch("http://127.0.0.1:8500/changerule", {
                method: "post",
                body: JSON.stringify({ email, newrole, confirmrole }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await result.json();
            if (data.success) {
                localStorage.setItem('key', JSON.stringify(data.user));
                toast.success(data.message || "User Role Update Successfully..!!", { className: 'toast-custom' });
                setTimeout(() => {
                    navigate("/");
                }, 1000); // 1.5 seconds delay before navigating
            } else {
                toast.error(data.Message, { className: 'toast-custom' });
            }
        } catch (error) {
            console.error("Error during Changing Role:", error);
            alert("An error occurred. Please try again.");
        }
    }

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
                                    <form encType="multipart/form-data" onSubmit={changeRule}>
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
                                                value={newrole}
                                                onChange={(e) => setNewRole(e.target.value)}
                                                id="form3Example4"
                                                className="form-control"
                                                placeholder="New Role"
                                            />
                                            <label className="form-label" htmlFor="form3Example4">New Role</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                value={confirmrole}
                                                onChange={(e) => setConfirmRole(e.target.value)}
                                                id="form3Example4"
                                                className="form-control"
                                                placeholder="Confirm New Role"

                                            />
                                            <label className="form-label" htmlFor="form3Example4">Confirm New Role</label>
                                        </div>

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-danger btn-block mb-4"
                                        >
                                            Change Rule
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
}

export default Changerole;




{/* <div className="my-4">
    <div className="container mt-4 w-50">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-group mb-0">
                    <div className="card p-4">
                        <div className="card-body">
                            <h3>Change Rule</h3>
                            <div className="input-group mb-3">
                                <span className="input-group-addon"><i className="fa fa-user" /></span>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    className="form-control"
                                    placeholder="User email"
                                />
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                <input
                                    type={showRole ? "text" : "password"}
                                    onChange={(e) => setNewRole(e.target.value)}
                                    name="role"
                                    className="form-control"
                                    placeholder="New Role"
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={toggleShowRole}
                                >
                                    {showRole ? "Hide" : "Show"}
                                </button>
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                <input
                                    type={showRole ? "text" : "password"}
                                    onChange={(e) => setConfirmRole(e.target.value)}
                                    name="role"
                                    className="form-control"
                                    placeholder="Confirm New Role"
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={toggleShowRole}
                                >
                                    {showRole ? "Hide" : "Show"}
                                </button>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button
                                        onClick={changeRule}
                                        type="button"
                                        className="button text-center"
                                    >
                                        Change Rule
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}