import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { team1, team2 } from "../../assets";
import Rating from "./Rating";



const Feedback = () => {
  return (
    <div className="py-3 psm-0" style={{ backgroundColor: "blue" }}>
      <h1 className="Heading -1  text-center my-5">
        What Our Client say about Us
      </h1>

      <Row className="m-2 container-fluid d-flex justify-content-center">
        <Col xs={3} className="mycard">
          <div className="d-sm-flex p-4 pb-1">
            <div>
              {" "}
              <img
                src={team2}
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="text-center " style={{paddingLeft:"10px"}}>
              <h4>lorem</h4>
              <Rating value={4.5} />
            </div>
          </div>
          <Row className="p-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Delectus, placeat! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Accusamus, consectetur!
            </p>
          </Row>
        </Col>
        <Col xs={3}>
          <Row>
            <Col className="mycard2">
              <h1>hey</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </Col>
          </Row>
          <Row>
            <Col className="mycard2">
              <h1>hey</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </Col>
          </Row>
        </Col>
        <Col xs={3} className="mycard">
          <h1>hey</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Repellendus,
            laboriosam.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Feedback;
