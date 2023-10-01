import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { team2 } from "../../assets";
import Rating from "./Rating";

const Feed = () => {
  return (
    <Container fluid className="my-5">
      <h1 className="Heading-1  text-center my-5 text-uppercase">
        What Our Client say about Us
      </h1>
      <Row className="m-2 container-fluid d-flex justify-content-center">
        <Col xs={12} sm={3} className="mycard">
          <div className="d-sm-flex p-4 pb-1">
            <div>
              {" "}
              <img
                src={team2}
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="text-center " style={{ paddingLeft: "10px" }}>
              <h4>lorem</h4>
              <Rating value={4.5} />
            </div>
          </div>
          <Row className="p-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Delectus, placeat! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Accusamus, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae distinctio voluptates tenetur nihil fuga magni adipisci corporis aliquid commodi?
            </p>
          </Row>
        </Col>
        <Col xs={12} sm={3} className="mycard3">
          <Row>
            <Col xs={12} className="mycard1" style={{ marginBottom: "10px" }}>
              <div className="d-sm-flex p-2 pb-1">
                <div>
                  {" "}
                  <img
                    src={team2}
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <div className="text-center " style={{ paddingLeft: "10px" }}>
                  <h4>lorem</h4>
                  <Rating value={4.5} />
                </div>
              </div>
              <Row className="p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus,
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="mycard1 ">
              <div className="d-sm-flex p-2 pb-1">
                <div>
                  {" "}
                  <img
                    src={team2}
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <div className="text-center " style={{ paddingLeft: "10px" }}>
                  <h4>lorem</h4>
                  <Rating value={4.5} />
                </div>
              </div>
              <Row className="p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, placeat!
                </p>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={3} className="mycard">
          <div className="d-sm-flex p-4 pb-1">
            <div>
              {" "}
              <img
                src={team2}
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="text-center " style={{ paddingLeft: "10px" }}>
              <h4>lorem</h4>
              <Rating value={4.5} />
            </div>
          </div>
          <Row className="p-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Delectus, placeat! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Accusamus, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repellendus iste quod facere officiis assumenda quaerat nemo magni enim corporis?
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
