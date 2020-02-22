import React from "react";
import templatePNG from "../../../assets/news.png";
import { Link } from "react-router-dom";

const NewsItem = ({ title, id, date, image, handler }) => {
  const formatDate = new Date(date).toLocaleString();
  const imageUrl = image
    ? `http://localhost:8000/uploads/${image}`
    : templatePNG;

  return (
    <div className="card mb-1">
      <div className="row align-items-center">
        <div className="col-2">
          <img src={imageUrl} className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className="col-12">
              <span>{title}</span>
            </div>
            <div className="col">
              <span>{formatDate}</span>
            </div>
            <div className="col-3">
              <Link
                to={`/news/${id}`}
                className="btn btn-outline-info btn-sm btn-block"
              >
                Read full post
              </Link>
            </div>
            <div className="col-2">
              <button
                className="btn btn-outline-danger btn-sm "
                onClick={handler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
