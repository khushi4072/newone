import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./durgapuja.css"
import Header from "./LandingPAge/Header";
import Footer from "./LandingPAge/Footer";
import FooterBig from "./LandingPAge/Footerrr";
import durgapuja from '../assets/durgapuja.jpg';
import durga from '../assets/durga.webp';
import durga2 from '../assets/durga2.jpg';




 
const DurgaPooja = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="background-row"
          style={{
            backgroundImage:
              `linear-gradient(0deg,rgba(0,0,0,.5), rgba(0, 242, 255, 0.3) ),  url(${durgapuja})`,
          }}
        >
          {/* <Col className="text-center mx-auto align-items-center" xs={12} md={6} >
          <h1>Titlekvndfkvfgbkjfl</h1>
        </Col> */}
        </Row>

        <Row className="content-row text-center ">
          <h2 className="py-2" style={{ color: "teal" }}>
            The biggest festival of West Bengal - Durga Puja
          </h2>
          <Col
            className="text-start mx-auto py-3 "
            xs={12}
            md={8}
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            <p>
              Durga Puja, the most awaited festival in West Bengal, holds
              immense cultural and religious significance in the hearts of
              Bengalis worldwide. This grand celebration, spanning several days,
              honours the goddess Durga and her triumph over evil. In this
              article, we will delve into the magnificence of Durga Puja,
              exploring its cultural essence, the elaborate rituals and
              traditions associated with it, the stunningly crafted pandals
              (temporary structures), and the culinary delights that make this
              festival a truly enchanting experience.
            </p>
            <p>
              <b> Unveiling the Splendor of Durga Puja: </b>
              Durga Puja, also known as Sharadotsav, is a festival that
              reverberates throughout West Bengal, bringing people together in
              celebration and devotion. It commemorates the triumph of Goddess
              Durga over the buffalo demon Mahishasura, symbolizing the victory
              of good over evil. The festival showcases the power, grace, and
              benevolence of the goddess and instils a sense of awe and
              reverence among devotees.
            </p>
            <Row className="my-2 py-2">
              <Col xs={12} md={6} className="text-center">
                <img src={durga} className="img-fluid" alt="Image 1" />
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
                  Kolkata.
                </p>
              </Col>
            </Row>

            <p>
              Pandals: Architectural Marvels and Cultural Showcases: One of the
              most captivating aspects of Durga Puja is the creation of
              elaborate pandals that house the exquisitely crafted idols of
              Goddess Durga and her divine entourage. These pandals, often built
              with bamboo, cloth, and decorative materials, transform the
              streets of Kolkata into a riot of colours and creativity. Each
              pandal tells a unique story, featuring intricate artwork, thematic
              displays, and creative interpretations of mythology and social
              issues. People from all walks of life flock to witness these
              architectural marvels, marvelling at the craftsmanship and the
              cultural expressions they embody.
            </p>

            <p>
              Rituals and Traditions: Durga Puja is a festival steeped in rich
              traditions and rituals. The festivities kick off with Mahalaya, a
              day that marks the symbolic arrival of the goddess. Throughout the
              festival, devotees engage in various rituals, such as the chanting
              of sacred mantras, offerings of flowers and sweets, and the
              performance of dance and music in honour of the goddess. An
              integral part of Durga Puja is the Dhunuchi Naach, a mesmerizing
              dance performed with incense burners, creating a mystical
              ambience.
            </p>

            <p>
              Cultural Extravaganza and Artistic Expressions: Durga Puja is not
              only a religious festival but also a platform for artistic
              expression. Cultural programs, including classical music, dance
              performances, drama, and recitations, take centre stage in pandals
              and community halls across the city. Renowned artists, both
              established and emerging, showcase their talents, providing a
              feast for the senses and fostering a deeper appreciation of the
              arts.
            </p>
            <Row className="my-2 py-2">
              <Col xs={12} md={6}>
                <p style={{ textAlign: "justify" }}>
                  Delights for the Gastronomic Soul: No festival in West Bengal
                  is complete without indulging in the delectable culinary
                  delights it offers. Durga Puja is no exception, as it presents
                  a gastronomic extravaganza that tantalizes taste buds. From
                  traditional sweets like rasgulla and Sandesh to savoury treats
                  like phuchka (pani puri), rolls, and biryani, the streets of
                  Kolkata come alive with a plethora of flavours. Food stalls
                  and eateries cater to the cravings of visitors, ensuring that
                  no one leaves without experiencing the culinary delights of
                  Durga Puja.
                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={durga2} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>
            <p>
              Durga Puja, the grandest festival of West Bengal, showcases the
              cultural splendour, religious fervour, and artistic expressions of
              the region. It is a time when the city of Kolkata transforms into
              a hub of joy, spirituality, and creative brilliance. The pandals,
              rituals, cultural programs, and gastronomic delights combine to
              create an immersive experience that captures the essence of
              Bengal's rich heritage. Durga Puja unites people from all walks of
              life, transcending boundaries and fostering a sense of community
              and devotion. So, immerse yourself in the magnificence of Durga
              Puja, witness the divine power of Goddess Durga, and revel in the
              cultural extravaganza that defines this extraordinary festival.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DurgaPooja;
