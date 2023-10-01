import React, { useState, useEffect } from "react";
import data from '../reservation/rooms.json';
import { Container , Row , Col } from "react-bootstrap";
import {
  FaWifi,
  FaShower,
  FaUtensils,
  FaBatteryFull,
  FaRupeeSign,
} from "react-icons/fa";
import {  RiUserFill } from "react-icons/ri";
import Header from "./LandingPAge/Header";
const BookingData = () => {
  const userIds = localStorage.getItem('USERID');
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const storedBookingData = JSON.parse(localStorage.getItem(`bookingData${userIds}`));
    if (storedBookingData) {
      setBookingData(storedBookingData);
    }
 
  }, [userIds]);



  return (
    <div>
      <Header />
      <h1 className="d-flex justify-content-center">OUR BOOKINGS</h1>
      {bookingData.length > 0 ? (
        <div>
          {bookingData.map((data, index) => (
            <div key={index} >
              {/* <p>Booking {index + 1}:</p>
              <p>Check-in Date: {data.checkIn}</p>
              <p>Check-out Date: {data.checkOut}</p>
              <p>Price: {data.totalPrice}</p> */}
              {/* ... and other properties */}
              <Row
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={data.index}
            className="my-4  py-5 justify-content-center helo"
            style={{ backgroundColor: "rgb(248, 252, 255)" }}
          >
            <Col md={3}>
              <img
                src={data.roomImagePath}
                // alt={room.heading}
                className="img-fluid"
                wid
              />
            </Col>
              {/* <Row> */}
              <Col md={6}>
              <Row>
                <Col>
                 <h4>Booking : {index+1}</h4>
                    <h5
                      style={{
                        textDecoration: "underline",
                        color: "teal",
                        padding: "10px",
                      }}
                    >
                      {data.roomType}
                    </h5>
                  
                  {/* <p>{room.description}</p> */}
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium optio laborum saepe qui eligendi pariatur modi
                    placeat repellat labore ducimus!
                  </p> */}
                </Col>
              </Row>

              <Row className="mt-2 justify-content-between">
                <Col lg={8}>
                <Row className="d-flex justify-content-start py-1">
                    {/* <span  className="mx-2"> */}
                    <Col>
                       CheckIn Date :- {data.checkIn}
                    </Col>

                    <Col>
                       CheckIn Date :- {data.checkIn}
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-start py-1">
                    {/* <span  className="mx-2"> */}
                    <Col>
                       Adults :- {data.adults}
                    </Col>

                    <Col>
                       Children :- {data.children}
                    </Col>
                  </Row>
                 
                </Col>
                <Col className="text-end ">
                  <Row>
                    <p style={{ fontWeight: "bold" }}>
                      {" "}
                      <span>TotalCost:- &nbsp; </span> <FaRupeeSign />{data.totalPrice} 
                    </p>{" "}
                  </Row>

                </Col>
              </Row>
            </Col>
            </Row>
            {/* </Row> */}


            </div>
          ))}
        </div>
      ) : (
        <p>No booking data found for this user.</p>
      )}
    </div>
  );
};

export default BookingData;
