import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Food.css"
import Header from "./LandingPAge/Header";
import Footer from "./LandingPAge/Footer";
import FooterBig from "./LandingPAge/Footerrr";
import food from '../assets/japtemple.jpg';
import kathiroll from '../assets/kathiroll.jpg';
import chinese from '../assets/chinese.jpg';
import terretibazar from '../assets/terretibazar.webp';
import parkstreet from '../assets/parkstreet.jpg';
import collegestreet from '../assets/collegestreet.jpg';




 
const Food = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="background-row"
          style={{
            backgroundImage:
              `linear-gradient(0deg,rgba(0,0,0,.5), rgba(0, 242, 255, 0.3) ),  url(${food})`,
          }}
        >
          {/* <Col className="text-center mx-auto align-items-center" xs={12} md={6} >
          <h1>Titlekvndfkvfgbkjfl</h1>
        </Col> */}
        </Row>

        <Row className="content-row text-center ">
          <h2 className="py-2" style={{ color: "teal" }}>
            Top 5 street food places in Kolkata
          </h2>
          <Col
            className="text-start mx-auto py-3 "
            xs={12}
            md={8}
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            <p>
              Kolkata, the city of joy, is renowned for its rich cultural
              heritage, vibrant festivals, and delectable street food. The
              streets of Kolkata are a culinary paradise, offering a wide array
              of flavours and aromas that tempt locals and tourists alike. In
              this article, we will take you on a gastronomic journey through
              the top 5 street food places in Kolkata, where you can savour the
              city's iconic dishes and immerse yourself in its vibrant food
              culture.
            </p>

            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img src={kathiroll} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                {/* <img
                  src="japtemple.jpg"
                  className="img-fluid"
                  alt="Image 2"
                /> */}
                <p style={{ textAlign: "justify" }}>
                  <b> Nizam's Kathi Rolls - A Legendary Delight: </b> Our food
                  trail begins with the iconic Nizam's Kathi Rolls. Located in
                  the heart of Kolkata, Nizam's has been serving mouthwatering
                  rolls for generations. These flavorful rolls consist of
                  succulent kebabs, tender chunks of meat or paneer, and a
                  medley of spices, all wrapped in a warm paratha. Whether you
                  choose the classic chicken or the vegetarian paneer option,
                  Nizam's Kathi Rolls are a must-try for any street food
                  enthusiast.
                </p>
              </Col>
            </Row>

            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b> Dacre Lane - The Hub of Kolkata's Chinese Food: </b>{" "}
                  Nestled in the heart of Kolkata's Chinatown, Dacre Lane is a
                  paradise for those craving authentic Chinese street food. This
                  bustling lane is lined with food stalls serving delectable
                  momos, crispy fried noodles, and flavorful stir-fried
                  delicacies. From steaming hot dim sums to the iconic Hakka
                  noodles, Dacre Lane offers a unique blend of flavours that
                  will tantalize your taste buds.
                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={chinese} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>
            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img
                  src={terretibazar}
                  className="img-fluid"
                  alt="Image 1"
                />
              </Col>
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b>Tiretti Bazaar - A Breakfast Delight: </b> For early risers
                  and food lovers, Tiretti Bazaar is the ultimate destination
                  for a delectable breakfast. This bustling street transforms
                  into a bustling food market in the morning, serving an array
                  of mouthwatering Chinese breakfast delights. From fluffy
                  steamed buns stuffed with savory fillings to piping hot bowls
                  of congee, Tiretti Bazaar offers a taste of traditional
                  Chinese breakfast with a Kolkata twist.
                </p>
              </Col>
            </Row>
            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b>Park Street - Kolkata's Food Boulevard: </b> No culinary
                  journey through Kolkata is complete without a visit to Park
                  Street, the city's iconic food boulevard. This vibrant street
                  is lined with numerous restaurants and food joints that cater
                  to every palate. From traditional Bengali sweets to
                  flavoursome North Indian curries, Park Street is a melting pot
                  of culinary delights. Don't miss the opportunity to indulge in
                  Kolkata's famous street food, such as puchka (pani puri),
                  kathi rolls, and Kolkata-style biryani.
                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={parkstreet} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>
            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img
                  src={collegestreet}
                  className="img-fluid"
                  alt="Image 1"
                />
              </Col>
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b> College Street - A Literary and Food Haven:</b>
                  College Street, synonymous with Kolkata's intellectual hub, is
                  also a treasure trove of street food delights. As you explore
                  the street's bookstores and soak in its intellectual ambience,
                  make sure to treat yourself to the famous kochuri-aloor dom
                  and jhalmuri. These mouthwatering snacks, bursting with
                  flavours, offer the perfect accompaniment to a literary
                  journey through College Street.
                </p>
              </Col>
            </Row>
            <p>
              Kolkata's street food scene is a testament to the city's vibrant
              culture and culinary legacy. The top 5 street food places
              mentioned above provide a tantalizing glimpse into the diverse
              flavours and aromas that make Kolkata a food lover's paradise.
              From the legendary Nizam's Kathi Rolls to the bustling streets of
              Dacre Lane and the breakfast delights of Tiretti Bazaar, each
              destination offers a unique experience that reflects the essence
              of Kolkata's street food culture. So, embark on this gastronomic
              adventure, savour the delectable dishes, and immerse yourself in
              the flavours of Kolkata's vibrant street food scene.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Food;
