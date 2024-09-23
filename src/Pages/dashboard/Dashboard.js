import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./dashboard.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [file, setFile] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        if (!title) {
            toast.error("Please write the Article title ", { className: 'toast-custom' });
            return false;
        }
        if (!summary) {
            toast.error("Please write the Article summary", { className: 'toast-custom' });
            return false;
        }
        if (!file) {
            toast.error("Select your the Article thumbnail", { className: 'toast-custom' });
            return false;
        }
        if (!content) {
            toast.error("Please write the Article content", { className: 'toast-custom' });
            return false;
        }
        return true;
    };





    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleUpload = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!validateForm()) {
            return;
        }


        const formData = new FormData();
        formData.append("title", title);
        formData.append("summary", summary);
        if (file) { // Check if file is present
            formData.append("image", file);
        }
        formData.append("content", content);

        console.log(formData)
        const response = await fetch("http://127.0.0.1:8500/upload", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            console.log("Showing success toast");
            toast.success(data.message || "User Article Post Successfully..!!", { className: 'toast-custom' });

            // Delay navigation to give time for the toast to be displayed
            setTimeout(() => {
                navigate("/");
            }, 1500); // 1.5 seconds delay before navigating
        }

    };  

    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
                        <div className='card1'>
                            <div className="card  bg-white">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form encType="multipart/form-data" onSubmit={handleUpload}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <textarea type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="form3Example1" className="form-control" placeholder="Article Title" />
                                                    <label className="form-label" htmlFor="form3Example1">Article Title</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <textarea type="text" value={summary} onChange={(e) => setSummary(e.target.value)} id="form3Example2" className="form-control" placeholder="Article Summary" />
                                                    <label className="form-label" htmlFor="form3Example2">Article Summary</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input onChange={handleFileChange} type="file" id="form3Example3" className="form-control" placeholder="Select Your Thumbnail" />
                                            <label className="form-label" htmlFor="form3Example3">Select Your Thumbnail</label>
                                        </div>
                                        {/* Password input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <textarea type="password" value={content} onChange={(e) => setContent(e.target.value)} id="form3Example4" className="form-control" placeholder=" Article Content" />
                                            <label className="form-label" htmlFor="form3Example4">Article Content</label>
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                            Post Article
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Dashboard;
