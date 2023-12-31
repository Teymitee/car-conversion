import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/bannermain.png";
import banner2 from "../../../images/banner/banner2.jpg";
import ban from "../../../images/banner/ban.png";
import bannerr3 from "../../../images/banner/bannerr3.jpeg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Car Conversion Global Limited</h3>
          <p>
            your best source for professional, reliable, and efficient auto
            upgrade service.
          </p>
          <a href="/experts">
            <button className="btn btn-danger rounded-pill m-2">
              {" "}
              Explore Our Services
            </button>
          </a>
          <a href="/#email">
            <button className="btn btn-warning rounded-pill">
              Subscribe to Newsletter
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={bannerr3} alt="Third slide" />

        <Carousel.Caption>
          <h3>We Have the Technology</h3>
          <p>
            You can be sure that your car will be handled with the latest
            diagnostic equipment.
          </p>
          <a href="/experts">
            <button className="btn btn-danger rounded-pill m-2">
              {" "}
              Explore Our Services
            </button>
          </a>
          <a href="/#email">
            <button className="btn btn-warning rounded-pill">
              Subscribe to Newsletter
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Certified Technicians</h3>
          <p>
            Our highly skilled technicians offer comprehensive knowledge and
            experience.
          </p>
          <a href="/experts">
            <button className="btn btn-danger rounded-pill m-2">
              {" "}
              Explore Our Services
            </button>
          </a>
          <a href="/#email">
            <button className="btn btn-warning rounded-pill">
              Subscribe to Newsletter
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={ban} alt="Third slide" />

        <Carousel.Caption>
          <h3>We Have the Technology</h3>
          <p>
            You can be sure that your car will be handled with the latest
            diagnostic equipment.
          </p>
          <a href="/experts">
            <button className="btn btn-danger rounded-pill m-2">
              {" "}
              Explore Our Services
            </button>
          </a>
          <a href="/#email">
            <button className="btn btn-warning rounded-pill">
              Subscribe to Newsletter
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
