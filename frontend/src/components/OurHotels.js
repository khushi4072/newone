import React from 'react'
import { Container, Row, Col, Image , Button} from 'react-bootstrap';
import rooms from '../assets/Premium_room2.jpg';
import temple from '../assets/BuddhaMandir.jpg';
import RabindraLake from '../assets/RabindraLake.jpg';
import VaayuCafe from '../assets/VaayuCafe.jpg';
import HotelImage from '../assets/lakeHotel.jpg';
import './OurHotels.css';
import Header from './LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';


export default function OurHotels() {
  return (
    <div>
      <Header />
      <Container>

        <Row className="mb-3">
          <Col md={12} className="p-0 image-container" style={{}}>

              <Image src={HotelImage} width="100%" height="500px" className="img2" style={{marginTop:'-10px' , visibility:'visible'}}></Image>
              
          </Col>
        </Row>


        <Row className="mb-3 images">
          <Col md={8} className="p-0 image-container">

            <Image src={rooms} width="100%" height="450px" className="img"></Image>

          </Col>

          <Col md={4} className="bg-success d-flex flex-column justify-content-center align-items-center text-justify" >
            <text className="text-white text-justify lakeText" style={{ fontSize: '18px' , width:'80%' , textAlign:'justify' }}>Welcome to The Lake Hotels, where luxury meets tranquility. Immerse yourself in a serene oasis nestled by picturesque lakes, offering a seamless blend of comfort and sophistication.</text>
           
            <div className="mt-3 ">
                <Button className="btn1 " style={{border:'1px solid #fff' , background:'transparent' }}>Book Now</Button>
            </div>
          </Col>
        </Row>


        <Row className="mb-3">
          <Col md={4} className="bg-success d-flex flex-column justify-content-center align-items-center text-justify">
            <text className="text-white text-justify lakeText" style={{ fontSize: '18px' , width:'80%' , textAlign:'justify' }}>Nipponzan Myohoji Buddhist Temple, a serene sanctuary in the heart of Kolkata, invites you to experience the essence of peace and spirituality. Adorned with intricate architecture and lush gardens, this renowned temple offers a tranquil retreat for reflection and meditation, embracing the teachings of Buddhism.</text>

            <div className="mt-3">
                <Button className="btn1" style={{border:'1px solid #fff' , background:'transparent' }}>Explore</Button>
            </div>
          </Col>

          <Col md={8} className="p-0 image-container">
            <Image src={temple} width="100%" height="450px" className="img" ></Image>
          </Col>
        </Row>



        <Row className="mb-3">
          <Col md={8} className="p-0 image-container">

            <Image src={RabindraLake} width="100%" height="450px" className="img"></Image>
          </Col>

          <Col md={4} className="bg-success d-flex flex-column justify-content-center align-items-center text-justify" >
            <text className="text-white text-justify lakeText" style={{ fontSize: '18px' , width:'80%' , textAlign:'justify' }}>Discover the scenic beauty of Rabindra Sarovar Lake, an enchanting oasis in the bustling city of Kolkata. With its shimmering waters and lush surroundings, this beloved tourist spot offers a peaceful escape for nature lovers and a perfect setting for leisurely walks or serene boat rides. Immerse yourself in the tranquillity and serenity of this picturesque destination.</text>
            <div className="mt-3">
                <Button className="btn1" style={{border:'1px solid #fff' , background:'transparent' }}>Explore</Button>
            </div>
          </Col>
        </Row>



        <Row className="mb-3">
          <Col md={4} className="bg-success d-flex flex-column justify-content-center align-items-center text-justify">
            <text className="text-white text-justify lakeText" style={{ fontSize: '18px' , width:'80%' , textAlign:'justify' }}>Step into the vibrant world of Vaayu Cafe, where boho vibes meet culinary delights, craft beer, and exhilarating games. Indulge in a gastronomic journey with our speciality dishes, sip on handcrafted brews, and engage in exciting games that add a playful touch to your experience. Embrace the bohemian spirit and let Vaayu Cafe be your haven of food, beer, and endless fun.</text>
            <div className="mt-3">
                <Button className="btn1" style={{border:'1px solid #fff' , background:'transparent' }}>Check Us Out</Button>
            </div>
          </Col>

          <Col md={8} className="p-0 image-container">
            <Image src={VaayuCafe} width="100%" height="450px" className="img"></Image>
          </Col>
        </Row>


      </Container>

      <Footer />
    </div>
  )
}
