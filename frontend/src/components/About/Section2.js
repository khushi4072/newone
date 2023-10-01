import React from 'react'
import { history, maldive1, mission, vssion } from '../../assets';

const Section2 = () => {
    const carde = {
      //  color: "#6641AA",
      //  fontWeight: "800",
      border: "none",
      textAlign: "center",
      borderRadius: "5px",
      height: "100%",
        maxHeight: "auto",
        backgroundColor: "#f5f5f5",
        margin: "20px",
    };
    const topic = {
      fontWeight: "bolder",
      fontSize: "25px",
        margin: "5px",
      color:"teal"
    };

    const para = {
    };
    return (
      <div className="row d-flex justify-content-between m-0 py-3 py-md-5 px-5">
        <text className="Heading-1 text-center col-12 pt-2 pb-5">OUR AIM</text>
        <div className="col-12  d-flex justify-content-center col-md-6 col-lg-4 my-1 py-2 py-md-1">
          <div
            className="row d-flex justify-content-center align-items-start shadow m-auto p-2 py-5 "
            style={carde}
          >
            <div
              className="icon rounded-circle p-2 my-3 d-flex justify-content-center align-items-center"
              data-aos="flip-right"
              style={{
                backgroundColor: "#f5f5f5",
                width: "auto",
                height: "auto",
              }}
            >
              <img
                src={mission}
                alt="icon"
                className="image-fluid"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <text className="Heading-2 text-center" style={topic}>
              Our Mission
            </text>
            <text className="Text-1 text-center" style={para}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                inventore.
              </p>
            </text>
          </div>
        </div>
        <div className="col-12  d-flex justify-content-center col-md-6 col-lg-4 my-1 py-2 py-md-1">
          <div
            className="row d-flex justify-content-center align-items-start shadow m-auto p-2 py-5 "
            style={carde}
          >
            <div
              className="icon rounded-circle p-2 my-3 d-flex justify-content-center align-items-center"
              data-aos="flip-right"
              style={{
                backgroundColor: "#f5f5f5",
                width: "auto",
                height: "auto",
              }}
            >
              <img
                src={vssion}
                alt="icon"
                className="image-fluid"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <text className="Heading-2 text-center" style={topic}>
              Our Vission
            </text>
            <text className="Text-1 text-center" style={para}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                inventore.
              </p>
            </text>
          </div>
        </div>
        <div className="col-12  d-flex justify-content-center col-md-6 col-lg-4 my-1 py-2 py-md-1">
          <div
            className="row d-flex justify-content-center align-items-start shadow m-auto p-2 py-5 "
            style={carde}
          >
            <div
              className="icon rounded-circle p-2 my-1 d-flex justify-content-center align-items-center"
              data-aos="flip-right"
              style={{
                backgroundColor: "#f5f5f5",
                width: "auto",
                height: "auto",
              }}
            >
              <img
                src={history}
                alt="icon"
                className="image-fluid"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <text className="Heading-2 text-center" style={topic}>
              Our History
            </text>
            <text className="Text-1 text-center" style={para}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                inventore.
              </p>
            </text>
          </div>
        </div>
      </div>
    );
}

export default Section2
