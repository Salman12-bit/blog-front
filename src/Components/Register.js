import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        if (!firstname) {
            toast.error("First name is required", { className: 'toast-custom' });
            return false;
        }

        if (!lastname) {
            toast.error("Last name is required", { className: 'toast-custom' });
            return false;
        }

        if (!email) {
            toast.error("Email is required", { className: 'toast-custom' });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format", { className: 'toast-custom' });
            return false;
        }

        if (!password) {
            toast.error("Password is required", { className: 'toast-custom' });
            return false;
        }
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long", { className: 'toast-custom' });
            return false;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_.\/#])[A-Za-z\d@$!%*?&-_.\/#]{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Please make password strong :)", { className: 'toast-custom' });
            return false;
        }

        return true;
    };

    const checkPasswordStrength = (pwd) => {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_.\/#]).{8,}$/;
        if (strongRegex.test(pwd)) {
            setPasswordStrength("Strong password");
        } else {
            setPasswordStrength("Moderate password");
        }
    };

    const registerUser = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        let result = await fetch("http://127.0.0.1:8500/register", {
            method: "post",
            body: JSON.stringify({ firstname, lastname, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const regdata = await result.json();

        if (regdata) {
            toast.success("User Registered Successfully..!!", { className: 'toast-custom' });
            navigate("/signin");
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
                                    <form encType="multipart/form-data" onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="form3Example1" className="form-control" placeholder="First Name" />
                                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} id="form3Example2" className="form-control" placeholder="Last Name" />
                                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control" placeholder="Email" />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="password" value={password} onChange={(e) => {
                                                setPassword(e.target.value);
                                                checkPasswordStrength(e.target.value);
                                            }} id="form3Example4" className="form-control" placeholder="h23ER?=#@-/%" />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <div>
                                                {passwordStrength && <h2 className="text-muted">{passwordStrength}</h2>}
                                            </div>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                                            <label className="form-check-label text-danger" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-block mb-4">
                                            Sign up
                                        </button>
                                        <div className="text-center">
                                            <p className="text-muted text-center my-4">Already have an account?
                                                <Link to="/signin" className="text-danger ml-1">Sign In</Link>
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

export default Register;





// import React, { useState } from "react";
// import "./register.css";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'; // Import default styles

// const Register = () => {
//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordStrength, setPasswordStrength] = useState('');

//     const navigate = useNavigate();

//     const validateForm = () => {
//         if (!firstname) {
//             toast.error("First name is required", { className: 'toast-custom' });
//             return false;
//         }

//         if (!lastname) {
//             toast.error("Last name is required", { className: 'toast-custom' });
//             return false;
//         }

//         if (!email) {
//             toast.error("Email is required", { className: 'toast-custom' });
//             return false;
//         }
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             toast.error("Invalid email format", { className: 'toast-custom' });
//             return false;
//         }

//         if (!password) {
//             toast.error("Password is required", { className: 'toast-custom' });
//             return false;
//         }
//         if (password.length < 8) {
//             toast.error("Password must be at least 8 characters long", { className: 'toast-custom' });
//             return false;
//         }

//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{8,}$/;
//         if (!passwordRegex.test(password)) {
//             toast.error("Make password must be strong", { className: 'toast-custom' });
//             return false;
//         }

//         return true;
//     };

//     const checkPasswordStrength = (pwd) => {
//         const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_]).{8,}$/;
//         if (strongRegex.test(pwd)) {
//             setPasswordStrength("Strong password");
//         } else {
//             setPasswordStrength("Moderate password");
//         }
//     };

//     const registerUser = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         let result = await fetch("http://127.0.0.1:8500/register", {
//             method: "post",
//             body: JSON.stringify({ firstname, lastname, email, password }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const regdata = await result.json();

//         if (regdata) {
//             toast.success("User Registered Successfully..!!", { className: 'toast-custom' });
//             navigate("/signin");
//         }
//     };

//     return (
//         <>
//             <section className="background-radial-gradient overflow-hidden">
//                 <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
//                     <div className="row gx-lg-5 align-items-center mb-5">
//                         <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
//                             <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
//                                 The best offer <br />
//                                 <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
//                             </h1>
//                             <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                                 Temporibus, expedita iusto veniam atque, magni tempora mollitia
//                                 dolorum consequatur nulla, neque debitis eos reprehenderit quasi
//                                 ab ipsum nisi dolorem modi. Quos?
//                             </p>
//                         </div>
//                         <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
//                             <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
//                             <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
//                             <div className="card bg-glass">
//                                 <div className="card-body px-4 py-5 px-md-5">
//                                     <form encType="multipart/form-data" onSubmit={registerUser}>
//                                         {/* 2 column grid layout with text inputs for the first and last names */}
//                                         <div className="row">
//                                             <div className="col-md-6 mb-4">
//                                                 <div data-mdb-input-init className="form-outline">
//                                                     <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="form3Example1" className="form-control" placeholder="First Name" />
//                                                     <label className="form-label" htmlFor="form3Example1">First name</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6 mb-4">
//                                                 <div data-mdb-input-init className="form-outline">
//                                                     <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} id="form3Example2" className="form-control" placeholder="Last Name" />
//                                                     <label className="form-label" htmlFor="form3Example2">Last name</label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* Email input */}
//                                         <div data-mdb-input-init className="form-outline mb-4">
//                                             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control" placeholder="Email" />
//                                             <label className="form-label" htmlFor="form3Example3">Email address</label>
//                                         </div>
//                                         {/* Password input */}
//                                         <div data-mdb-input-init className="form-outline mb-4">
//                                             <input type="password" value={password} onChange={(e) => {
//                                                 setPassword(e.target.value);
//                                                 checkPasswordStrength(e.target.value);
//                                             }} id="form3Example4" className="form-control" placeholder="@ftSD34#" />
//                                             <label className="form-label" htmlFor="form3Example4">Password</label>
//                                              <div>
//                                              {passwordStrength && <h2 className="text-muted">{passwordStrength}</h2>}
//                                              </div>
                                            
//                                         </div>
//                                         {/* Checkbox */}
//                                         <div className="form-check d-flex justify-content-center mb-4">
//                                             <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
//                                             <label className="form-check-label text-danger" htmlFor="form2Example33">
//                                                 Subscribe to our newsletter
//                                             </label>
//                                         </div>
//                                         {/* Submit button */}
//                                         <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-block mb-4">
//                                             Sign up
//                                         </button>
//                                         {/* Register buttons */}
//                                         <div className="text-center">
//                                             <p className="text-muted text-center my-4">Already have an account?
//                                                 <Link to="/signin" className="text-danger ml-1">Sign In</Link>
//                                             </p>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <ToastContainer />
//         </>
//     );
// };

// export default Register;
