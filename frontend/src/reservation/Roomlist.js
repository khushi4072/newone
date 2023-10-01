import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaWifi,
  FaShower,
  FaUtensils,
  FaBatteryFull,
  FaRupeeSign,
} from "react-icons/fa";
import {  RiUserFill } from "react-icons/ri";
import data from "./rooms.json";
import { Link } from "react-router-dom";


const RoomList = () => {
    const [mm, setMM] = useState(data);



    return (
      <Container className="justify-content-center py-5">
        <h1 className="text-center">Our Rooms</h1>
        {mm.map((room) => (
          <Row
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={room.index}
            className="my-4  py-5 justify-content-center helo"
            style={{ backgroundColor: "rgb(248, 252, 255)" }}
          >
            <Col md={3}>
              <img
                src={room.imageSrc}
                alt={room.heading}
                className="img-fluid"
                wid
              />
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Link
                    to={`/room1/${room.index}`}
                    style={{ textDecoration: "none" }}
                    className="roomheader"
                  >
                    <h5
                      style={{
                        textDecoration: "underline",
                        color: "teal",
                        padding: "10px",
                      }}
                    >
                      {room.heading}
                    </h5>
                  </Link>
                  <p>{room.description}</p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium optio laborum saepe qui eligendi pariatur modi
                    placeat repellat labore ducimus!
                  </p> */}
                </Col>
              </Row>

              <Row className="mt-2 justify-content-between">
                <Col lg={5}>
                  <Row className="d-flex justify-content-start py-1">
                    {/* <span  className="mx-2"> */}
                    <Col>
                      {" "}
                      <FaWifi /> &nbsp; Free wifi
                    </Col>

                    <Col>
                      {" "}
                      <FaShower />
                      &nbsp; shower
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-start py-1">
                    {/* <span  className="mx-2"> */}
                    <Col>
                      {" "}
                      <FaUtensils /> &nbsp; Bed tea
                    </Col>

                    <Col>
                      {" "}
                      <FaBatteryFull />
                      &nbsp; 24/7 power
                    </Col>
                  </Row>
                </Col>
                <Col className="text-end ">
                  <Row>
                    <p style={{ fontWeight: "bold" }}>
                      {" "}
                      <span>{room.price}</span> +gst(CP) <FaRupeeSign />
                    </p>{" "}
                  </Row>
                  <Row>
                    {" "}
                    <p>
                      {room.guests} guests <RiUserFill />
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    );
};

export default RoomList;
