import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
import { services } from "./data";

const Services = () => {
  
  return (
    <div id="services" className="container mb-5">
      <h1 className="heading text-center  mt-5">Our Services</h1>
      <div className="row">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
