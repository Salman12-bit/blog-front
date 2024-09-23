import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlepage.css"

const Singlepage = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        let result = await fetch(`http://127.0.0.1:8500/article/${id}`);

        if (!result.ok) {
          throw new Error(`Server error: ${result.statusText}`);
        }

        const contentType = result.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          let data = await result.json();
          console.log("Fetched article data:", data); 
          setArticle(data); 
        } else {
          throw new Error("Received non-JSON response");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setError(error.message); 
      }
    };

    fetchArticle(); 
  }, [id]);

  if (error) {
    return <div style={{ marginTop: "100px", textAlign: "center" }}>Error: {error}</div>;
  }

  if (!article) {
    return <div style={{ marginTop: "100px", textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div className="background-radial-gradient overflow-hidden">
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
      </div>
      <div className="container px-4 py-5 px-md-5 my-5" style={{ zIndex: 10 }}>

        <div className="container" style={{ marginTop: "100px" }}>
          <h2 className="single-color">{article.title}</h2>
          <img
            src={`http://127.0.0.1:8500/uploads/${article.file}`}
            alt={article.title}
            className="img-fluid"
          />
          <h2 className="single-color">{article.title}</h2>
          <h2 className="single-color">{article.summary}</h2>
          <h2 className="single-color" >{article.content}</h2>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;





