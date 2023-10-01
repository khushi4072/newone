import React from "react";
import { Card } from "react-bootstrap";
import { buffet, card1, pools } from "../../assets";

import "./offer.css";

const Offer = () => {
  return (
    <div className="row d-flex justify-content-between m-0 py-3 py-md-5 ">
      <text className="Heading-1 text-center col-12 pt-2 ">
        WHAT WE ARE OFFER
      </text>
      <div className="row d-flex justify-content-center align-items-start  m-auto p-2 py-5 px-0">
        <div
          className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1"
          data-aos="fade-up"
        >
          <Card style={{ height: "20rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img
                className="img-fluid"
                src={card1}
                style={{ height: "100%" }}
              />
              <div className="overlay">
                <div className="content">
                  <Card.Title className="title">Food & Drinks</Card.Title>
                  <Card.Text className="text">
                    Indulge in a delectable journey of freshness and culinary
                    diversity.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1"
          data-aos="fade-up"
        >
          <Card style={{ height: "20rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src="doublepre.jpg"
                style={{ height: "100%" }}
              />
              <div className="overlay">
                <div className="content">
                  <Card.Title className="title">Comfortable Stay</Card.Title>
                  <Card.Text className="text">
                    Experience affordable luxury and utmost comfort during your
                    stay.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1"
          data-aos="fade-up"
        >
          <Card style={{ height: "20rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src="city.avif"
                style={{ height: "100%" }}
              />
              <div className="overlay">
                <div className="content">
                  <Card.Title className="title">City tour</Card.Title>
                  <Card.Text className="text">
                    Discover the captivating beauty of Kolkata's iconic
                    landmarks and hidden gems.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>

    // {/* <div className="container">
    //   <div className="row col-12">
    //     <div className="col-4">
    //       <Card style={{ width: "20rem", height: "20rem" }}>
    //         <div className="card-wrapper">
    //           <Card.Img variant="top" src={breakfast} />
    //           <div className="overlay">
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card's content.
    //             </Card.Text>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //     <div className="col-4">
    //       <Card style={{ width: "20rem", height: "20rem" }}>
    //         <div className="card-wrapper">
    //           <Card.Img variant="top" src={breakfast} />
    //           <div className="overlay">
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card's content.
    //             </Card.Text>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //     <div className="col-4">
    //       <Card style={{ width: "20rem", height: "20rem" }}>
    //         <div className="card-wrapper">
    //           <Card.Img variant="top" src={breakfast} />
    //           <div className="overlay">
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card's content.
    //             </Card.Text>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //   </div>
    // </div> */}
  );
};

export default Offer;
