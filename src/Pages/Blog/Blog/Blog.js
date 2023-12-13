import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Service = ({ service }) => {
  const {_id, name, img, price, description } = service;
  const navigate = useNavigate();

  const navigateToDetails = id =>{
    navigate(`/service/${id}`);
  }
  return (
    <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-6 text-center">
      <div className="card mx-auto" style={{ width: "100%" }}>
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>

  );
};

export default Service;
