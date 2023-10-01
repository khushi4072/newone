import React, { useState } from "react";
// import { fundRaising } from "../../../assets";
// import color from "../../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Button, Form } from "react-bootstrap";
import { contact } from "../../assets";import {
    Container, Row, Col
} from "react-bootstrap";



const ContactUS = () => { 
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [message,setmessage] = useState("")



  const submit1=async()=>{
    
    let data= await fetch("http://localhost:3000/contact",{
      method:'post',
      body : JSON.stringify({name,email,message}),
      headers:{
          'Content-Type':'application/json',
      },
  })
  data= await data.json()
  console.log(data)
  console("done")




  }
  return (
    <div
      className="container-fluid col-12 col-lg-12 my-3 row m-0 py-0 py-md-0 px-0 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "white" }}
    >
      <div className="text-center my-4">
        <h1 className="Heading-1 text-center ">Get in touch with Us</h1>
        <p style={{color:"teal"}}>
          Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
        </p>
      </div>

      <div
        className="col-12 col-lg-7 d-none d-lg-block ps-0 ps-sm-4 py-0 px-0"
        style={{ width: "50%", backgroundColor: "#f5f5f5" }}
      >
        {/* <div style={{ display: "block", width: 700, padding: "2rem" }}>
          <h3 className="my-3">Drop Us a message</h3>
          <Form>
            <Form.Group className="my-3">
              <div className="mb-3 d-flex m">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="First Name"
                />
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="Last Name"
                />
              </div>
              <Form.Control type="text" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control type="email" placeholder="Enter your phone no" />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter a message"
              />
              <Button
                variant="primary"
                type="submit"
                className="py-2 mt-5"
                style={{
                  width: "10rem",
                  borderRadius: "50px",
                  backgroundColor: "teal",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div> */}
        <Container className="py-4">
          <Row>
            <Col>
              <h3>Drop Us a message</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value= {name}
                    placeholder="Enter your name"
                    onChange={(e)=>setname(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e)=>setemail(e.target.value)}

                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={message}
                    rows={4}
                    placeholder="Enter your message"
                    onChange={(e)=>setmessage(e.target.value)}

                    required
                  />
                </Form.Group>
                <Button onClick={submit1}

                  variant="primary"
                  type="submit"
                  className="mt-3"
                  style={{
                    width: "10rem",
                    borderRadius: "50px",
                    backgroundColor: "teal",
                    color: "white",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="col-12 col-lg-5  px-0 py-3 py-lg-0 justify-content-end">
        <img
          src={contact}
          alt=""
          className="img-fluid"
          style={{ width: " 100%" }}
        />
      </div>

      {/* <div className="col-10  d-block d-lg-none ps-0 ps-sm-4">
        <div style={{ display: "block", width: 700, padding: "2rem" }}>
          <h3>Drop Us a message</h3>
          <Form>
            <Form.Group>
              <div className="mb-3 d-flex ">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="hh"
                />
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="cc"
                />
              </div>
              <Form.Label>Enter your full name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter your email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your your email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter your age:</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" />
              <Button variant="primary" type="submit">
                Click here to submit form
              </Button>
            </Form.Group>
          </Form>
        </div>
          </div> */}
      <div
        className="col-12 col-lg-7 d-block d-lg-none  ps-0 ps-sm-4 py-0 px-0"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        {/* <div style={{ display: "block", width: 700, padding: "2rem" }}>
          <h3 className="my-3">Drop Us a message</h3>
          <Form>
            <Form.Group className="my-3">
              <div className="mb-3 d-flex d-sm-block m">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="First Name"
                />
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="Last Name"
                />
              </div>
              <Form.Control type="text" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control type="email" placeholder="Enter your phone no" />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter a message"
              />
              <Button
                variant="primary"
                type="submit"
                className="py-2 mt-5"
                style={{
                  width: "10rem",
                  borderRadius: "50px",
                  backgroundColor: "teal",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div> */}

        <Container className="py-4">
          <Row>
            <Col>
              <h3>Drop Us a message</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  style={{
                    width: "10rem",
                    borderRadius: "50px",
                    backgroundColor: "teal",
                    color: "white",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUS;
