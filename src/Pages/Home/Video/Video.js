import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div>
      <section class="testimonial-one">
        <div class="section-title-seven">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-title align-center">
                  <span> Testimonial </span>
                  <h2 class="fw-bold">What People Says</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="testimonial-one-wrapper">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-12">
                <div class="row testimonial-one-active">
                  <div class="col-lg-4">
                    <div class="single-testimonial text-center">
                      <div class="testimonial-image">
                        <img
                          src="https://cdn.ayroui.com/1.0/images/testimonial/author-1.jpg"
                          alt="Author"
                        />
                        <div class="quote-icon">
                          <i class="lni lni-quotation"></i>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <p class="text">
                        I recently had the pleasure of upgrading my G-Wagon 2008 to the 2021 model at CCGL Auto Repair Shop, and I couldn't be more thrilled with the results. The transformation is nothing short of remarkable
                        </p>
                        <h6 class="author-name">Isabela Moreira</h6>
                        {/* <span class="sub-title">CEO, GrayGrids</span> */}
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="single-testimonial text-center">
                      <div class="testimonial-image">
                        <img
                          src="https://cdn.ayroui.com/1.0/images/testimonial/author-2.jpg"
                          alt="Author"
                        />
                        <div class="quote-icon">
                          <i class="lni lni-quotation"></i>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <p class="text">
                        Choosing CCGL Auto Repair Shop to upgrade my Lexus LX570 from the 2011 model to the 2021 version was a decision that surpassed all my expectations. The team at CCGL demonstrated unparalleled professionalism and automotive prowess throughout the entire upgrade journey. 
                        </p>
                        <h6 class="author-name">Fajar Siddiq</h6>
                        <span class="sub-title">Founder, MakerFlix</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="single-testimonial text-center">
                      <div class="testimonial-image">
                        <img
                          src="https://cdn.ayroui.com/1.0/images/testimonial/author-3.jpg"
                          alt="Author"
                        />
                        <div class="quote-icon">
                          <i class="lni lni-quotation"></i>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <p class="text">
                        pgrading my Lexus GX460 2011 to the 2022 model at CCGL Auto Repair Shop was an outstanding experience. From the initial consultation to the final unveiling, the team's professionalism and expertise shone through. The transformation, both exterior and interior, exceeded my expectations, giving my vehicle a sleek and modern look with cutting-edge technology.
                        </p>
                        <h6 class="author-name">Fiona</h6>
                        {/* <span class="sub-title">Lead Designer, UIdeck</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
