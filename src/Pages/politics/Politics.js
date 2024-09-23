import React, { useEffect, useState } from "react";
import './politics.css'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';


const Politics = () => {

  const [userart, setUserart] = useState([]);
  const [nextAuth, setNextAuth] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("key");
    if (auth) {
      try {
        const parsedAuth = JSON.parse(auth);
        setNextAuth(parsedAuth.role);
      } catch (error) {
        console.error("Failed to parse auth data:", error);
      }
    }
  }, []);

  const ArticleList = async () => {
    try {
      let artresult = await fetch("http://127.0.0.1:8500/article");
      artresult = await artresult.json();
      // Filter articles with titles containing "economic" or "economics"
      const filteredArticles = artresult.filter(article =>
        article.title.toLowerCase().includes('politic') || article.title.toLowerCase().includes('politics')

      );

      setUserart(filteredArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    ArticleList();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8500/delarticle/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      // Check for data.success instead of data.ok
      if (data.success) {
        toast.success(data.message || "Record Deleted Successfully..!!", { className: 'toast-custom' });

        // Delay the state update to ensure the toast is shown
        setTimeout(() => {
          setUserart((prevUserart) => prevUserart.filter((article) => article._id !== id));
        }, 1000);  // 1 second delay
      } else {
        toast.error("No Record Available..!!", { className: 'toast-custom' });
      }
    } catch (error) {
      toast.error("Error deleting article. Please try again.", { className: 'toast-custom' });
    }
  };

  return (

    <div className="background-radial-gradient overflow-hidden">
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
      </div>
      <div className="container px-4 py-5 px-md-5 my-5" style={{ zIndex: 10 }}>
        <div className="row">
          {userart.map((ele) => (
            <div key={ele.id} className="product-grid col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="product-item">
                <div className="image">
                  <Link to={`/article/${ele._id}`}>
                    <img className="img-section" src={`http://127.0.0.1:8500/uploads/${ele.file}`} alt={ele.title} />
                  </Link>
                  <div className="summary">
                    <h4> World Best Article Website You are watching in this place </h4>
                  </div>
                </div>
                <div className="caption">
                  <div className="title">
                    <h4>{ele.title}</h4>
                  </div>
                  <Link to={`/article/${ele._id}`}>
                    <div className="cart">
                      <button type="button" className="btn btn-primary"> Read More </button>
                    </div>
                  </Link>
                </div>
                <button type="button" className="btn btn-default wishlist" data-toggle="tooltip" data-placement="right" title="Wishlist" >
                  <i className="fa fa-heart" />
                </button>
                <button type="button" className="btn btn-default compare" data-toggle="tooltip" data-placement="right" title="Compare" >
                  <i className="fa fa-circle-o" />
                </button>
              </div>
              {nextAuth === "admin" && (
                <button
                  onClick={() => deleteUser(ele._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Politics;