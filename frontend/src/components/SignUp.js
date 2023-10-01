import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import {Link , useNavigate} from 'react-router-dom';

export default function Signup() {
  const history = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function handleSubmit(e) {
      e.preventDefault();
      // Handle sign-in logic

    //   let data= await fetch("http://localhost:5000/signup",{
    //     method:'post',
    //     body : JSON.stringify({name,email,password}),
    //     headers:{
    //         'Content-Type':'application/json',
    //     },
    // })
    // data= await data.json()
    // if (data === "exist") {
    //   alert("Email already exists");
    // } else if(data === "Notexist") {
    //   alert("Sign Up Successful");
    // }

    // Assuming you have the 'history' object available
// And the variables name, email, and password are defined

try {
      const response = await fetch("http://localhost:5000/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        alert('Sign Up Successful');
        history('/signin')
      } else if (response.status === 500) {
        alert('Email already exists');
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  
    };
    const mystyle = {
      display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    }
  
      return (
        <div style={{ backgroundColor: "aliceblue" }}>
          <Container className="auth-form-container" style={mystyle}>
            <Row className="justify-content-center" style={{ width: "100%" }}>
              <Col
                xs={12}
                md={6}
                lg={6}
                style={{
                  backgroundColor: "aliceblue",
                  display: "flex",
                    justifyContent: "center",
                  alignItems:"center"
                }}
              >
                <img
                  src="PNG_LH.png"
                  alt=""
                  style={{ width: "400px", height: "250px" }}
                />
              </Col>
              <Col xs={12} md={6} lg={6} style={{ backgroundColor: "aliceblue" }}>
                <div className="auth-form">
                  <h2>Sign Up</h2>
                  
                  <Form onSubmit={handleSubmit}>

                  <Form.Group controlId="text" className="py-2">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="email" className="py-2">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="password" className="py-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="my-2"
                      style={{
                        // width: "10rem",
                        borderRadius: "10px",
                        backgroundColor: "teal",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      Sign Up
                    </Button>
                <Link to='/Signin' className="mx-3">SignIn</Link>
                  
                  </Form>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
      );
}
