import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={"https://th.bing.com/th/id/R.259bd1851415543b834ccee13268d7ab?rik=FY9Xh4UtajyhAw&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2flogan-paul-mercedes-g-wagon-v8.jpg&ehk=vvZCuItyjeyYcTIGKmqzCooGfrSAPubGI76hNcW1570%3d&risl=&pid=ImgRaw&r=0"} alt="First slide" />
        <Carousel.Caption>
          <h3>Car Converion Global Limited</h3>
          <p>
            your best source for professional, reliable, and
            efficient auto upgrade service.
          </p>
          <a href="/experts"><button className="btn btn-danger rounded-pill m-2">Our Services</button></a>
          <a href="/#email"><button className="btn btn-warning rounded-pill">Subscribe to our Newsletter</button></a>
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
          <a href="/service"><button className="btn btn-danger rounded-pill m-2">Our Services</button></a>
          <a href="home#email"><button className="btn btn-warning rounded-pill">Get Discount</button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>We Have the Technology</h3>
          <p>
            You can be sure that your car will be handled with the latest
            diagnostic equipment.
          </p>
          <a href="/services"><button className="btn btn-danger rounded-pill m-2">Our Services</button></a>
          <a href="home#email"><button className="btn btn-warning rounded-pill">Get Discount</button></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
