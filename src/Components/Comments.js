import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { toast, ToastContainer } from "react-toastify";
import './comment.css';

const Comments = () => {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [getcomment, setGetComment] = useState([]);
    const [nextAuth, setNextAuth] = useState(null);

    useEffect(() => {
        const auth = localStorage.getItem("key");
        if (auth) {
            try {
                const parsedAuth = JSON.parse(auth);
                setNextAuth(parsedAuth.role);
            } catch (error) {
                toast.error("Failed to parse auth data:", { className: 'toast-custom' });
            }
        }
    }, []);

    const validateForm = () => {
        if (!name) {
            toast.error("Please Write Your Comment", { className: 'toast-custom' });
            return false;
        }
        if (!comment) {
            toast.error("Please Write Your Comment", { className: 'toast-custom' });
            return false;
        }
        if (rating === 0) {
            toast.error("Please Select a Rating", { className: 'toast-custom' });
            return false;
        }
        return true;
    };

    const handleComment = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        let comresult = await fetch("http://127.0.0.1:8500/usercomment", {
            method: "post",
            body: JSON.stringify({ comment, name, rating }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const commentdata = await comresult.json();

        if (commentdata) {
            toast.success("Thank You For Your Valuable Comment..:)", { className: 'toast-custom' });
            setComment("");
            setRating(0);
            CommentList();
        }
    };

    const CommentList = async () => {
        try {
            let artresult = await fetch("http://127.0.0.1:8500/getusercomment");
            artresult = await artresult.json();
            setGetComment(artresult);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        CommentList();
    }, []);

    const deleteUserRating = async (id) => {
        try {
            let result = await fetch(`http://127.0.0.1:8500/delrating/${id}  `, {
                method: "DELETE",
            });
            let data = await result.json();
            if (result.ok) {
                toast.success("Rating Deleted Successfully..!!", { className: 'toast-custom' });
                CommentList();
            } else {
                toast.error("No Record Available Successfully..!!", { className: 'toast-custom' });
            }
        } catch (error) {
            console.error("Error deleting article:", error);
            alert("Error deleting article");
        }
    };


    return (
        <div className="background-radial-gradient overflow-hidden">
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
                <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
            </div>
            <div className="container" style={{ zIndex: 10 }}>
                <div className="row">
                    <div className="row text-lg-start my-4 ms-1">
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="comment position-relative" type="text" name="summary" placeholder="Write Your Comment Here :)" />
                        <div>
                            <input
                                type="email"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="form3Example3"
                                className="form-control mt-3"
                                style={{ width: "200px" }}
                                placeholder="User Name"
                            />
                        </div>
                        <StarRating className="text-center" rating={rating} setRating={setRating} />
                        <button onClick={handleComment} className="btn btn-danger my-2 ms-3" style={{ width: "60px" }}>Save</button>
                    </div>
                    <div className="row">
                        {getcomment.map((ele) => (
                            <div key={ele._id}>
                                <div className="get-comment-section mb-3">
                                    <h2>{ele.name}</h2>
                                    <h5>{ele.comment}</h5>
                                    <StarRating rating={ele.rating} readonly={true} />
                                    {nextAuth === 'admin' && (
                                        <button onClick={() => deleteUserRating(ele._id)} className="btn btn-danger my-2">Delete</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Comments;



