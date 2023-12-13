import Product from "../Product/Product";
import "./Products.css";
import { services } from "./data";

const Products = () => {
  
  return (
    <div id="services" className="container mb-5">
      <h1 className="heading text-center  mt-5">PRODUCTS</h1>
      <div className="row">
        {services.map((service) => (
          <Product key={service._id} service={service}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
