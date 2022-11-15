import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { BrowserRouter, Link } from  "react-router-dom";
import  PlayStore  from "../images/Playstore.png";
import  Appstore from "../images/Appstore.png";
import * as icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div>
      <div className="main-footer p-3 bg-secondary text-white">
        <Container>
          <Row>
            <Col>
              <img
                src={logo}
                width="150"
                height="70"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Col>         
        
            <Col sm={2}>
              <h5>PAGES</h5>
              
              <ul className="list-unstyled">
                <li>Courses</li>
                <li>Freebies</li>
                <li>E-Degrees</li>
                <li>Paths</li>
                <li>Deals</li>
                <li>Upcoming Courses</li>
              </ul>
              </Col>
            <Col sm={2}>
              <h5>ABOUT</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Infiniti T&C</li>
                <li>Instructors policy</li>
                <li>Privacy policy</li>
                <li>FAQ</li>
                <li>Sitemap</li>
              </ul>
            </Col>
            <Col sm={2}>
              <h5>HELPFUL LINKS</h5>
              <ul className="list-unstyled">
                <li>Gift Voucher</li>
                <li>Our Webblog</li>
                <li>Affiliates</li>
                <li>Teach For Us</li>
                <li>Opportunities</li>
                <li>Corporate Training</li>
              </ul>
            </Col>         
            <Col>
          
            <h5>JOIN US</h5>
            <div className="d-flex gap-2 mb-2">
            <icon.Facebook size={24} className="class-icons" />
            <icon.Twitter size={24} className="class-icons" />
            <icon.Youtube size={24} className="class-icons" />
            <icon.Linkedin size={24} className="class-icons" />
            <icon.Instagram size={24} className="class-icons" />
            </div>
          
            <h5>DOWNLOAD OUR APP</h5>
            <img
                src={PlayStore}
                width="150"
                height="70"
                className="d-inline-block align-top"
                alt="Playstore"
              />
              <img
                src={Appstore}
                width="150"
                height="70"
                className="d-inline-block align-top"
                alt="Appstore"
              />
          </Col>
          </Row>
        </Container>
      </div>
      <div className="mini-footer p-3 bg-dark text-white">
        <Container>
          <p className="text-center ">
            &#169;2022 Edunoix Learing Solutions Pvt Ltd.All Rights Reserved.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
