import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mahalya.css"
import Header from "./LandingPAge/Header";
import Footer from "./LandingPAge/Footer";
import FooterBig from "./LandingPAge/Footerrr";
import Mehalya from '../assets/Mehalya.jpg';
import mehalya2 from '../assets/mehalya2.webp';
import mehalya3 from '../assets/mehalya3.webp';



 
const Mahalya = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="background-row"
          style={{
            backgroundImage:
              `linear-gradient(0deg,rgba(0,0,0,.5), rgba(0, 242, 255, 0.3) ),  url(${Mehalya})`,
          }}
        >
          {/* <Col className="text-center mx-auto align-items-center" xs={12} md={6} >
          <h1>Titlekvndfkvfgbkjfl</h1>
        </Col> */}
        </Row>

        <Row className="content-row text-center ">
          <h2 className="py-2" style={{ color: "teal" }}>
            Cultural significance of Mahalaya.
          </h2>
          <Col
            className="text-start mx-auto py-3 "
            xs={12}
            md={8}
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            <p>
              Mahalaya, a much-celebrated occasion in the city of Kolkata, holds
              immense cultural significance in the hearts of Bengalis around the
              world. It marks the beginning of the fervent countdown to Durga
              Puja, the grand festival that honours Goddess Durga. In this
              article, we will explore the cultural significance of Mahalaya,
              the rituals and traditions associated with this auspicious day,
              and the deep-rooted emotions it evokes in the hearts of Kolkata's
              residents.
            </p>
            <p>
              <b> Unveiling the Essence of Mahalaya:</b>
              Mahalaya observed on the dark fortnight of the month of Ashwin
              according to the Hindu calendar, symbolizes the advent of the
              goddess Durga. It is a time when the people of Kolkata prepare to
              welcome the mother goddess and seek her blessings. The day is
              believed to be the moment when the divine energy descends on
              Earth, marking the beginning of the festive season.
            </p>
            <Row className="my-2 py-2">
              <Col xs={12} md={6} className="text-center">
                <img src={mehalya2} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  <b>Invoking the Spirit of Goddess Durga: </b> Mahalaya is
                  celebrated with great enthusiasm as a day of invocation and
                  remembrance. In the early hours of the morning, people wake up
                  before dawn to listen to the soul-stirring recitation of the
                  Mahishasura Mardini, an iconic hymn that describes the epic
                  battle between the goddess Durga and the demon Mahishasura.
                  This mesmerizing recital, known as the Chandi Path, sets the
                  tone for the upcoming festivities and instils a sense of
                  devotion in the hearts of the devotees.
                </p>
              </Col>
            </Row>
            <p>
              <b>Mahalaya and Kolkata's Cultural Fabric:</b> In Kolkata,
              Mahalaya is deeply woven into the cultural fabric of the city. The
              day brings together people from all walks of life, irrespective of
              caste, creed, or age, to celebrate their shared love for Goddess
              Durga. The city adorns itself with artistic expressions of
              reverence, with vibrant street decorations, illuminated pandals
              (temporary structures), and the sound of Dhak (traditional drums)
              filling the air. The atmosphere is charged with anticipation and
              excitement, as the city gears up for the grand spectacle of Durga
              Puja.
            </p>

            <p>
              <b>Embracing Tradition and Rituals: </b> Mahalaya also signifies
              the start of the elaborate preparations for Durga Puja. Homes and
              pandals are adorned with intricate decorations, meticulously
              crafted idols of Goddess Durga are created, and the planning of
              cultural programs and performances commences. Families and
              communities come together to organize various events and rituals,
              further strengthening the bonds of unity and camaraderie that
              Kolkata is renowned for.
            </p>
            <Row className="my-2 py-2">
              <Col xs={12} md={6} className="text-center">
                <img src={mehalya3} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  The Emotional Connect: Mahalaya evokes a deep emotional
                  connection in the hearts of Bengalis, wherever they may be.
                  For many, it is a nostalgic journey that takes them back to
                  their childhood, reminiscing about the festive fervour, the
                  scent of incense, and the joyous gatherings with loved ones.
                  It is a time of collective memories, where the old and the
                  young unite in their love for their cultural heritage.
                  Mahalaya, the auspicious day that ushers in the spirit of
                  Durga Puja, is a time of immense cultural significance in
                  Kolkata. It signifies the invocation of the mother goddess
                  Durga and sets the stage for the grand festivities that follow
                </p>
              </Col>
            </Row>
            <p>
              . The day holds a special place in the hearts of Bengalis,
              symbolizing the collective expression of devotion, unity, and
              cultural pride. As the city prepares for the enchanting spectacle
              of Durga Puja, the spirit of Mahalaya reverberates through its
              streets, reminding everyone of the rich cultural heritage and the
              timeless traditions that make Kolkata truly unique.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Mahalya;
