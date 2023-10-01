import React from "react";
// import color from "../../../constant";
// import { compRegis } from "../../../assets";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { breakfast, houskeeping, maldive1, section3, slider1 } from "../../assets";

const Section4 = () => {
  return (
    <div
      className="row m-3 py-3 py-md-5  d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4">
        <text className="Heading-1  ">Rooms</text>
        <br />
        <div className="py-3">
          {/* <text className="Text-1 p-sm-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            magnam dicta neque.
          </text> */}
        </div>

        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Affordable luxury with comfortable rooms
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Relax and unwind in our cozy accommodations
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Well-appointed rooms for a restful night's sleep
            </text>
          </li>
        </ul>
      </div>

      <div className="col-12 col-lg-5 py-3 py-lg-0" data-aos="zoom-out">
        <img
          src="instagram.jpg"
          alt=""
          className="img-fluid"
          style={{ width: "80%", maxHeight: "20rem", borderRadius: "10px" }}
        />
      </div>
      <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
        <text className="Heading-1 ">Rooms</text>
        <br />
        <div className="py-3">
          {/* <text className="Text-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            ea.
          </text> */}
        </div>

        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Affordable luxury with comfortable rooms
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Relax and unwind in our cozy accommodations
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Well-appointed rooms for a restful night's sleep
            </text>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section4;
