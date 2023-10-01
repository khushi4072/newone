import React from "react";
import { footerlogo } from "../../assets";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

import "../About/about.css";

const FooterBig = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3 col-lg-4">
          {/* <h5 className="text-uppercase">
            <b>ATRASKI | HOTELS</b>{" "}
          </h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p> */}
          <img src={footerlogo} alt="" style={{ width: "300px" }} />
          <br />
          <div className="row col-lg-12 justify-content-center">
            <ul className="d-flex text-center" style={{ padding: 0 }}>
              <li>
                <a href="">
                  {" "}
                  <FaFacebook className="facebook-icon" />
                </a>
              </li>

              <li>
                <a href="">
                  <FaTwitter className="twitter-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineMail className="mail-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaInstagram className="insta-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaLinkedin className="linkdin-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="footerlink">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="footerlink">
                About
              </a>
            </li>

            <li>
              <a href="#!" className="footerlink">
                Blogs
              </a>
            </li>
            <li>
              <a href="#!" className="footerlink">
                Reservations
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      {/* <Footer/> */}
    </div>
  </footer>
);

export default FooterBig;
