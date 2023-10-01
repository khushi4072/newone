import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RabindraLake from "../assets/RabindraLake.jpg";
import VaayuCafe from "../assets/VaayuCafe.jpg";
import HotelImage from "../assets/lakeHotel.jpg";
import temple from "../assets/BuddhaMandir.jpg";
import Alipore from "../assets/Alipore.jpg";
import food from "../assets/Kolkata-Street-Food.jpg";
import god from "../assets/subhomahalaya.jpg";
import durgaMa from "../assets/durgaMa.jpg";
import "./TheCityJoy.css";
import Header from "./LandingPAge/Header";
import { Link } from "react-router-dom";
import Footer from "./LandingPAge/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";


export default function TheCityJoy() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mainm">
        <Header />
        <div className="App">
          <Slider {...settings}>
            <Link to="/temple">
              <div className="card1">
                <div className="card-top">
                  <img src={temple} alt="" />
                  <h1>
                    Japanese Temple in Kolkata - Nipponzan Myohoji Buddhist
                    Temple
                  </h1>
                  <div className="card-bottom">
                    <h3>City</h3>
                    <p>
                      Kolkata, often referred to as the cultural capital of
                      India, is a city that boasts a rich heritage...
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/rabindralake">
              <div className="card1">
                <div className="card-top">
                  <img src={RabindraLake} alt="" />
                  <h1>
                    Kolkata’s fitness and hangout spot - Rabindra Sarobar Lake
                  </h1>
                  <div className="card-bottom">
                    <h3>City</h3>
                    <p>
                      Kolkata, the bustling city known for its rich culture,
                      historical landmarks, and culinary delights...{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/museum">
              <div className="card1">
                <div className="card-top">
                  <img src={Alipore} alt="" />
                  <h1>
                    Newly arrived tourist spot in Kolkata -Alipore Jail Museum
                  </h1>
                  <div className="card-bottom">
                    <h3>City</h3>
                    <p>
                      Kolkata, the cultural capital of India, is a city steeped
                      in history and brimming with unique...
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/food">
              <div className="card">
                <div className="card-top">
                  <img src={food} alt="" />
                  <h1>Top 5 street food places in Kolkata.</h1>
                  <div className="card-bottom">
                    <h3>Food</h3>
                    <p>
                      Kolkata, the city of joy, is renowned for its rich
                      cultural heritage, vibrant festivals, and delectable{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/mahalya">
              <div className="card">
                <div className="card-top">
                  <img src={god} alt="" />
                  <h1>Cultural significance of Mahalaya.</h1>
                  <div className="card-bottom">
                    <h3>Culture</h3>
                    <p>
                      Mahalaya, a much-celebrated occasion in the city of
                      Kolkata, holds immense cultural{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/durgapooja">
              <div className="card">
                <div className="card-top">
                  <img src={durgaMa} alt="" />
                  <h1>The biggest festival of West Bengal - Durga Puja</h1>
                  <div className="card-bottom">
                    <h3>Culture</h3>
                    <p>
                      Durga Puja, the most awaited festival in West Bengal,
                      holds immense cultural and religious{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
        <Container className="py-5">
          <h4 className="pt-4" style={{ textAlign: "center" }}>
            Our Latest Blogs{" "}
          </h4>
          <hr />
          <Row className="pt-5">
            <Col xs={12} sm={6} md={3} lg={3}>
              <Link to="/durgapooja">
                <Card
                  style={{
                    backgroundColor: "aliceblue",
                    border: "none",
                    height: "250px",
                  }}
                >
                  <Card.Img variant="top" src={durgaMa} alt="Card 1" />
                  <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text className="py-1" style={{ color: "teal" }}>
                      The biggest festival of West Bengal - Durga Puja .....
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to="/rabindralake">
                <Card
                  style={{
                    backgroundColor: "aliceblue",
                    border: "none",
                    height: "250px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={RabindraLake}
                    alt="Card 2"
                    style={{ height: "170px", overflow: "hidden" }}
                  />
                  <Card.Body>
                    {/* <Card.Title>Card 2</Card.Title> */}
                    <Card.Text className="py-1" style={{ color: "teal" }}>
                      Kolkata’s fitness and hangout spot - Rabindra Sarobar Lake
                      . . . .
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to="/food">
                <Card
                  className="my-1"
                  style={{
                    backgroundColor: "aliceblue",
                    border: "none",
                    height: "250px",
                    
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="Streetfood.jpg"
                    alt="Card 3"
                    style={{ height: "170px", overflow: "hidden" }}
                  />
                  <Card.Body>
                    {/* <Card.Title>Card 3</Card.Title> */}
                    <Card.Text className="py-1" style={{ color: "teal" }}>
                      Top 5 street food places in Kolkata to Explore. . . . . .
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to="/mahalya">
                <Card
                  style={{
                    backgroundColor: "aliceblue",
                    border: "none",
                    height: "250px",
                  }}
                >
                  <Card.Img variant="top" src={god} alt="Card 4" />
                  <Card.Body>
                    {/* <Card.Title>Card 4</Card.Title> */}
                    <Card.Text className="py-1" style={{ color: "teal" }}>
                      Cultural significance of Mahalaya.. . . . . .
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
