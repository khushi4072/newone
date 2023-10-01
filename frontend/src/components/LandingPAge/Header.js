import React, {useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useLocation } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link , useNavigate} from "react-router-dom";
import header from '../../../src/PNG_LH.png';
import './offer.css';
import './Header.css';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
  
    };

    const token = localStorage.getItem('TOKEN')
      if(!token){
        navigate('/signin');
      }

    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand="sm"
          className={`py-3 ${isScrolled ? "sticky-header" : ""}`}
          style={isScrolled ? { backgroundColor: "#222" } : null}
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={header}
                alt=""
                style={{ width: "150px", height: "50px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ATRASKI | HOTELS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link style={{ fontSize: "15px" }} className="headlink">
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "teal",
                        fontWeight: "700",
                      }}
                      className="head"
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  {/* <Nav.Link className="headlink">
                    <Link to="/about" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    About
                    </Link>
                  </Nav.Link> */}
                  <Nav.Link className="headlink">
                    <Link
                      to="/OurRoom"
                      style={{
                        textDecoration: "none",
                        color: "teal",
                        fontWeight: "700",
                      }}
                      className="head"
                    >
                      Our Hotel
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link
                      to="/cityofjoy"
                      style={{
                        textDecoration: "none",
                        color: "teal",
                        fontWeight: "700",
                      }}
                      className="head"
                    >
                      The City Of Joy
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link
                      to="/vaayucafe"
                      style={{
                        textDecoration: "none",
                        color: "teal",
                        fontWeight: "700",
                      }}
                      className="head"
                    >
                      Vaayu Cafe
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link
                      to="/reservation"
                      style={{
                        textDecoration: "none",
                        color: "teal",
                        fontWeight: "700",
                      }}
                      className="head"
                    >
                      Reservation{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link
                      to="/contactus"
                      style={{
                        textDecoration: "none",
                        color: "teal",
                        fontWeight: "700",
                      }}
                      className="head"
                    >
                      contact Us
                    </Link>
                  </Nav.Link>

                  {/* <Nav.Link className="headlink">
                    <Link to="/cityofjoy" style={{textDecoration:'none' , color:'teal' , fontWeight:'700' }} className="head">
                    City Of Joy{" "}
                    </Link>
                  </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ backgroundColor: "" }}
                  /> */}
                  <NavDropdown.Item
                    className="navBtn"
                    style={{
                      // width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <Link
                      to="/signin"
                      style={{ textDecoration: "none", color: "#fff",width:"150px" }}
                    >
                      Sign In
                    </Link>
                  </NavDropdown.Item>


                  


                 
                  
                </Form>
                <div className="navbar">
      {/* Other navbar content */}
      <span
        className={`profile-initials ${isDropdownOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {localStorage.getItem('NAME')?.substring(0, 2).toUpperCase()}
      </span>
      {isDropdownOpen && (
        <div className="dropdown-content" style={{zIndex:'500'}}>
          {/* Content of the dropdown */}

          <span>USER : {localStorage.getItem('NAME')}</span>


          <Link to='/ourbookings'>
          <button className="mt-2 bg-transparent border-0">YOUR BOOKING</button>
          </Link>

          <NavDropdown.Item
                    className="navBtn"
                    style={{
                      // width: "10rem",
                      
                      backgroundColor: "blue",
                      color: "#fff",
                      marginTop:'15px',
                      padding:"3px"
  
                    }}

                    onClick={()=>{
                      localStorage.removeItem('USERID');
                      localStorage.removeItem('TOKEN')
                      navigate('/signin')
                    }}
                  >

                      LOG OUT
           </NavDropdown.Item>
          
        </div>
      )}
    </div>
                
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
