import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./RabindraLake.css";
import Header from "./LandingPAge/Header";
import Footer from "./LandingPAge/Footer";
import FooterBig from "./LandingPAge/Footerrr";
import lakebanner from '../assets/lakebanner.jpg';
import fitnesslake from '../assets/fitnesslake.jpg';
import lake2 from '../assets/lake2.jpg';
import lake from '../assets/lake.jpg';

 
const RabindraLake = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="background-row"
          style={{
            backgroundImage:
              `linear-gradient(0deg,rgba(0,0,0,.5), rgba(0, 242, 255, 0.3) ),  url(${lakebanner})`,
          }}
        >
          {/* <Col className="text-center mx-auto align-items-center" xs={12} md={6} >
          <h1>Titlekvndfkvfgbkjfl</h1>
        </Col> */}
        </Row>

        <Row className="content-row text-center ">
          <h2 className="py-2" style={{ color: "teal" }}>
            Kolkata’s fitness and hangout spot - Rabindra Sarobar Lake
          </h2>
          <Col
            className="text-start mx-auto py-3 "
            xs={12}
            md={8}
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            <p style={{ textAlign: "justify" }}>
              Kolkata, the bustling city known for its rich culture, historical
              landmarks, and culinary delights, also offers its residents and
              visitors a serene oasis for fitness and leisure activities.
              Nestled in the southern part of the city, Rabindra Sarobar Lake,
              also known as Dhakuria Lake, serves as a popular hangout spot
              where fitness enthusiasts, nature lovers, and families come
              together to enjoy its tranquillity and engage in various outdoor
              activities. In this article, we will explore the allure of
              Rabindra Sarobar Lake, its fitness opportunities, and the
              delightful experiences it offers to all.
            </p>

            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img
                  src={fitnesslake}
                  className="img-fluid"
                  alt="Image 1"
                />
              </Col>
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b>A Nature's Haven for Fitness Enthusiasts: </b> Rabindra
                  Sarobar Lake spread across an expansive area, offers a
                  picturesque setting for fitness activities in the heart of
                  Kolkata. The well-maintained jogging tracks that surround the
                  lake provide the perfect space for joggers and runners to
                  pursue their fitness goals amidst lush greenery and refreshing
                  natural surroundings. The early mornings and evenings witness
                  a flurry of activity, as fitness enthusiasts gather to engage
                  in brisk walks, jogging, and running, breathing in the fresh
                  air and embracing the serene ambience.
                </p>
              </Col>
            </Row>

            <p style={{ textAlign: "justify" }}>
              <b> Nature's Abode: </b> Rabindra Rabindra Sarobar Lake is not
              only a hub for fitness and leisure but also a sanctuary for nature
              enthusiasts and birdwatchers. The lake's ecosystem attracts a wide
              variety of bird species, making it a haven for birdwatching. With
              its serene atmosphere and diverse avian population, birdwatchers
              can spend hours observing and documenting the captivating birds
              that inhabit the lake and its surrounding foliage.
            </p>
            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b> A Paradise for Outdoor Activities:</b> Beyond its fitness
                  appeal, Rabindra Sarobar Lake presents a plethora of outdoor
                  activities for people of all ages. The lake's vast expanse
                  serves as a perfect spot for picnics, where families and
                  friends can unwind, savour delicious food, and enjoy quality
                  time together. The sprawling lawns, dotted with shaded areas,
                  provide ample space for relaxation and leisurely activities.
                  The lake's tranquil waters offer an opportunity for boating
                  enthusiasts to embark on a serene journey, gliding across the
                  calm surface. Whether it's paddleboats, rowing boats, or
                  simply sitting by the lakeside and watching the boats pass by,
                  the boating experience at Rabindra Sarobar Lake is a must-try.
                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={lake2} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>
            <p>
              <b>Culture and Leisure:</b> Apart from its natural beauty,
              Rabindra Sarobar Lake also hosts cultural events and performances,
              adding a touch of artistic vibrancy to the surroundings. During
              festive seasons, the lake premises come alive with music, dance,
              and theatrical performances, offering a glimpse into the city's
              cultural heritage.
            </p>
            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img src={lake} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  Rabindra Sarobar Lake, Kolkata's fitness and hangout spot,
                  invites residents and tourists alike to embrace nature's
                  beauty while engaging in various outdoor activities. Whether
                  it's jogging along the scenic tracks, enjoying a leisurely
                  picnic, boating on the tranquil waters, or birdwatching amidst
                  the lush greenery, Rabindra Sarobar Lake offers a respite from
                  the city's hustle and bustle. The blend of fitness, leisure,
                  and cultural experiences makes it a unique destination where
                  one can rejuvenate both the mind and body. So, the next time
                  you visit Kolkata, don't miss the opportunity to explore and
                  enjoy the serenity of Rabindra Sarobar Lake.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default RabindraLake;
