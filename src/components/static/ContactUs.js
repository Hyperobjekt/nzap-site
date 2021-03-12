import React from "react";
import introImage from '../../assets/images/contact/page-header-contact.jpg';

import './TheReport.scss';
import './ContactUs.scss';

const ContactUsPage = () => (
  <div className="container container-body mt-md-5 pt-md-5 pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 col-lg-10 pt-5 atf the-report">
            <div className="row">
              <div data-aos="fade-in" data-aos-delay="200" className="col-12 pt-3 pt-md-5 col-md-8 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle"><h1>Contact Us</h1></div>
              </div>
              <div data-aos="fade-in" data-aos-delay="250" className="col-12 col-md-4 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="200" className="row page-content">
              <div className="col-12 col-lg-11">
                <div className="d-block pr-3 pt-4 introduction">
                  <p className="pt-md-4">For inquiries, please email <a href="mailto:nza@princeton.edu">nza@princeton.edu</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default ContactUsPage;
