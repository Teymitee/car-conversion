import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ service }) => {
  const { _id, name, imgBefore, imgAfter, price, description } = service;
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
      <div className="card mx-auto" style={{ width: "100%" }}>
        {imgBefore ? (
          <div className="card-img-wrapper">
            <img src={imgBefore} className="card-img-top w-100" alt="..." />
            <h4>Before</h4>
          </div>
        ) : null}
        <div className="card-img-wrapper">
          <img src={imgAfter} className="card-img-top w-100" alt="..." />
          <h4>After</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
