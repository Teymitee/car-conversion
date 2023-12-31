import React from "react";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer-area footer-one ">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
              <div className="f-about">
                <div className="footer-logo">
                  <a href="/">
                    <img src={logo} alt="Logo" width={"80%"} />
                  </a>
                </div>
                <p className="text">Driving Safely Begins with Us.</p>
              </div>
              <div className="footer-app-store">
                <h5 className="download-title">Download Our App Now!</h5>
                <ul>
                  <li>
                    <a href="/">
                      <img
                        src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg"
                        alt="app"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                        alt="play"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="home#service">Services</a>
                  </li>
                  <li>
                    <a href="home#experts">Experts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Services</h6>
                <ul>
                  <li>
                    <a href="/">Products</a>
                  </li>
                  <li>
                    <a href="/">Business</a>
                  </li>
                  <li>
                    <a href="/">Developer</a>
                  </li>
                  <li>
                    <a href="/">Insights</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-contact">
                <h6 className="footer-title">Help & Support</h6>
                <ul>
                  <li>
                    <i className="lni lni-map-marker"></i> 17 Ojekunle St, Papa
                    Ajao, Lagos 100253, Lagos
                  </li>
                  <li>
                    <i className="lni lni-phone-set"></i> +234806 681 7327
                  </li>
                  <li>
                    <i className="lni lni-envelope"></i>{" "}
                    cs@carconversionglobal.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <hr></hr>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
              >
                <p className="text">
                  Copyright © {year} Car Conversion Global Limited.
                </p>
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/carconversion.com.ng?mibextid=ZbWKwL">
                      <i class="lni lni-facebook-original "></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/carconversiongloballtd?igshid=NGVhN2U2NjQ0Yg==">
                      <i class="lni lni-instagram-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/4KBR3VWOL6H5D1">
                      <i class="lni lni-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
