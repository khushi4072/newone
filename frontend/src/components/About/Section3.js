import React from "react";
import { Card } from "react-bootstrap";
import { breakfast, buffet, card1, pools } from "../../assets";
import "../LandingPAge/offer.css";
import { Row, Col } from "react-bootstrap";

const Section3 = () => {
  return (
    <div className="row d-flex justify-content-between m-0 py-3 py-md-1 px-0">
      <text className="Heading-1 text-center col-12 ">WHAT WE OFFER</text>
      <div className="row d-flex justify-content-center align-items-start  m-auto p-2 py-5 px-0">
        <div
          className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1 px-0"
          data-aos="fade-up"
        >
          <Card style={{ width: "25rem", height: "20rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img variant="top" src={card1} style={{ height: "100%" }} />
              <div className="overlay">
                <div className="content">
                  <Card.Title className="title">Card Title</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1 px-0"
          data-aos="fade-up"
        >
          <Card style={{ width: "25rem", height: "20rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img variant="top" src={buffet} style={{ height: "100%" }} />
              <div className="overlay">
                <div className="content">
                  <Card.Title className="title">Card Title</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1 px-0"
          data-aos="fade-up"
        >
          <Card style={{ width: "25rem", height: "20rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img variant="top" src={pools} style={{ height: "100%" }} />
              <div className="overlay">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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

export default Section3;
