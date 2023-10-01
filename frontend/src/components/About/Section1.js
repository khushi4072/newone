import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";


import "./about.css";

import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin } from "react-icons/fa";

class Section1 extends React.Component {
  render() {
    return (
      <div className="container-fluid about text-center">


        {" "}
        {/* <div className="header">
          <h1>React Bootstrap Responsive Container</h1>
        </div> */}
        <Container
          fluid
          style={{}}
          className="container-bg col-12 justify-content-center"
        >


          

          <Row className="Aboutheader col-12 col-lg-5 py-5 ">
            <Col style={{ top: "20px" }}>
              <h2 className="text-center py-4">About Us</h2>
              <p className="" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                consequat urna ac risus vestibulum fermentum. Integer a odio
                libero. Curabitur sed tellus justo. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Facilis, aliquam, aperiam
                reprehenderit minus porro culpa quod facere, eaque iusto odio
                vitae quas harum omnis voluptate earum possimus beatae
                reiciendis obcaecati!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur modi unde itaque a nobis et porro deleniti doloribus
                ab voluptates ipsa, nihil omnis enim ipsam quo veritatis.
                Perspiciatis quo doloremque expedita! Quos debitis
                exercitationem molestias. Ipsa provident error, porro sint
                impedit quod reiciendis laborum accusantium dolor ut! Amet,
                velit necessitatibus.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consectetur modi unde itaque a nobis et porro
                deleniti doloribus ab voluptates ipsa, nihil omnis enim ipsam
                quo veritatis. Perspiciatis quo doloremque expedita! Quos
                debitis exercitationem molestias. Ipsa provident error, porro
                sint impedit quod reiciendis laborum accusantium dolor ut! Amet,
                velit necessitatibus.
              </p>

              <div className="abc">
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
                <button className="abtBtn">Contact Us</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Section1;
