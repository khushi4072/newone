import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./LandingPAge/Header";
import Footer from "./LandingPAge/Footer";

const VaayuCafe = () => {
  const images = [
    { src: "vayu7.avif", alt: "Image 3" },

    { src: "vayu2.jpeg", alt: "Image 2" },
    { src: "vayu3.jpg", alt: "Image 3" },
      { src: "vayu1.jpeg", alt: "Image 1" },
    { src: "vayu8.webp", alt: "Image 1" },

    { src: "vayu4.jpg", alt: "Image 3" },
    { src: "vayu5.jpg", alt: "Image 3" },
      { src: "vayu6.jpg", alt: "Image 3" },
    { src: "vayu9.webp", alt: "Image 1" },
    { src: "vayu1.jpg", alt: "Image 1" },
    { src: "vayu2.jpg", alt: "Image 1" },
    { src: "vayu3.jpg", alt: "Image 1" },
   

    // Add more images here
  ];

  return (
    <>
      <Header />
      <Container fluid className="py-5">
        <Row lg={7} className="justify-content-center px-5">
          {" "}
          <h1 className="text-center" style={{ color: "teal" }}>
            Vaayu Cafe
          </h1>
          <hr />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            earum dolor fugit Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptates obcaecati magnam eveniet ad similique,
            delectus illum et vero ipsam quos? eos quaerat enim itaque delectus
            fuga ratione modi?
          </p>
        </Row>

        <Row
          xs={1}
          sm={2}
          md={3}
          lg={4}
          xl={3}
          className="g-4 py-5 justify-content-center"
        >
          {images.map((image, index) => (
            <Col key={index}>
              <div className="row gallery-item d-flex justify-content-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded"
                  style={{ height: "350px", width: "400px" ,objectFit:"fit"}} // Set a fixed height for the images
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default VaayuCafe;
