import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
// import GoogleMap from "./GoogleMap/GoogleMap";
import "./About.css";
import E from "../Home/E/E";
import Features from "../Home/Features/Features";

const About = () => {
  return (
    <div>
      <h1 className="about-h1">About Us</h1>
      <div className="d-flex container">
        <PageTitle title="About"></PageTitle>
        {/* <div className="p-5"><GoogleMap></GoogleMap></div> */}
        <div className="p-5 about-img">
          <img
            src={
              "https://th.bing.com/th/id/R.259bd1851415543b834ccee13268d7ab?rik=FY9Xh4UtajyhAw&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2flogan-paul-mercedes-g-wagon-v8.jpg&ehk=vvZCuItyjeyYcTIGKmqzCooGfrSAPubGI76hNcW1570%3d&risl=&pid=ImgRaw&r=0"
            }
            alt="about"
          ></img>
          <h3 className="pt-4">About</h3>
          <p className="mt-3">
            Welcome to Car Conversion Global Limited, where automotive expertise
            meets unparalleled customer service! Established with a passion for
            precision and a commitment to quality, our auto repair shop is more
            than just a service center – it's a trusted partner on your journey
            of maintaining and enhancing your vehicle.
          </p>
          <h6>In the begining...</h6>
          <p>
          Starting out as a repair shop in Lagos, Nigeria and offering standard maintenance such as oil changes, tire & mechanical repair, overtime Car Conversion Global Limited transitioned to a full service repair/upgrade shop with out of province safety inspections & icbc repair claims.
          </p>
          <h6>... still running.</h6>
          <p>
          We have a proud history of excellent work and customers service. We have remained loyal in serving our community and in return have been recognized through the years by our township and province, and from local business organizations. Through our success, we have also been able to give back to our community through donating and volunteering with many local charities.
          </p>
          <h3 className="pt-4">Vision</h3>
          <p>Have at least one workshop in each of 6 regions in Nigeria.</p>
          <h3 className="pt-4">Vision</h3>
          <p>To help you save costs.</p>
        </div>
      </div>
      <Features></Features>
      <E></E>
    </div>
  );
};

export default About;
