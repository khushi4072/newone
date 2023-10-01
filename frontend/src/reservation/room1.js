import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './room1.css';


import data from "./rooms.json"

// import data from './rooms.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';
// import Header from './Header';
// import Footer from './Footer';



const Room1 = () => {
  const [mm, setMM] = useState(data);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.index == params.id);

 
  return (
    <>
    <Header />
      {mm1.map((data) => {
        return (
          <>
            
            {/* <Container className='my-5'>
            <Row>
                <Col md={9}>
                  <Card
                    style={{
                      width: '40rem',
                      margin: '0 auto',
                      height: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <Card.Img variant="top" src={data.images} />
                    <Card.Body>
                      <Card.Title>Room Specification</Card.Title>
                      <Card.Text>
                        This 13x12sq feet room is designed with wooden floorings. The decor includes a double bed or twin beds and a desk along with a couple of chairs. A mini-bar, Internet access (complimentary), coffee/tea maker, a telephone with direct dial access, a cable TV, and an in-room safe are available in this room.
                      </Card.Text>
                      <Row className="mb-3">
                        <Col md={6}>
                          <i class="fa fa-male" title=" Sleeps 2 Guests" aria-hidden="true"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Sleeps 2 Guests</span>
                        </Col>
                        <Col md={6}>
                          <i class="fa fa-wifi"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Free Wi-Fi</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <i class="fa fa-bath"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Bath</span>
                        </Col>
                        <Col md={6}>
                          <i class="fa fa-shower"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Shower</span>
                          
                        </Col>
                        <Link to="/BookingRoom">
                        <Button variant="primary">Booking</Button>
                      </Link>
                      </Row>
                    </Card.Body>
                  </Card>
                  
                </Col>
                
              </Row>            </Container> */}


                <Container className="d-flex flex-column justify-content-start align-items-center mt-5 mb-5 text-center " key={data.index}>
                  <Image src={data.imageSrc} width={1000} height={500} className={`rounded ${window.innerWidth <= 700 ? 'img-fluid' : ''}`}></Image>
                
                  <Card.Body className="mt-5" >
                      <Card.Title className="mb-3">Room Specification</Card.Title>
                      <Card.Text style={{width:'1000px'}} className="w-100">
                        This 13x12sq feet room is designed with wooden floorings. The decor includes a double bed or twin beds and a desk along with a couple of chairs. A mini-bar, Internet access (complimentary), coffee/tea maker, a telephone with direct dial access, a cable TV, and an in-room safe are available in this room.
                        
                      </Card.Text>
                      <Row className="mb-2 mt-2">
                        <Col md={3}>
                          <i class="fa fa-male" title=" Sleeps 2 Guests" aria-hidden="true"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Sleeps 2 Guests</span>
                        </Col>
                        <Col md={3}>
                          <i class="fa fa-wifi"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Free Wi-Fi</span>
                        </Col>
                      
                        <Col md={3}>
                          <i class="fa fa-bath"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Bath</span>
                        </Col>
                        <Col md={3}>
                          <i class="fa fa-shower"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Shower</span>
                          
                        </Col>
                        <Link to={`/BookingRoom/${data.index}`}>
                        <Button variant="primary" className="mt-4">Booking</Button>
                      </Link>
                      </Row>
                    </Card.Body>
                </Container>


                

                  <Row className="d-flex justify-content-start mt-5 mb-5 p-5 " style={{backgroundColor:'#f8f1cd'}}>
                    <Col md-8>
                      <Container className="mt-4">

                        <h3 style={{fontFamily:"monospace" , fontWeight:'600'}} className="mt-5">NEAR BY PLACE</h3>

                        <ul type="circle" style={{fontWeight:'600'}}>
                          <li className='mt-3'><span style={{textAlign:'left'}}>The Garden of Five Senses :- The Garden of Five Senses in Delhi is a paradise for nature lovers, away from the city centre. It is an amalgamation of natural beauty and man-made art.</span></li>
                          <li className='mt-3'><span style={{textAlign:'left'}}>Body Smith Gym :- Body Smith Fitness Center in Saiyad Ul Ajaib, Delhi. Body Smith Fitness Center in Delhi is one of the leading businesses in the Women Gyms.</span></li>
                          <li className='mt-3'><span style={{textAlign:'left'}}>Rose Cafe :- Rose Cafe New Delhi, Lado Sarai; View reviews, menu, contact, location, and more for Rose Cafe Restaurant.</span></li>
                          <li className='mt-3'><span style={{textAlign:'left'}}>IFBC Studio :- Ifbc-Dance Studio Saket in Saiyad Ul Ajaib,Delhi listed under Dance Classes For Ballet in Delhi.</span></li>
                          {/* <li className='mt-3'><span style={{textAlign:'left'}}>The Garden of Five Senses</span></li> */}
                        </ul>
                        
                        
                      </Container>
                    </Col>

                    <Col md-4>
                      
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.76577774632!2d88.36443127497452!3d22.512969379534216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027777f653aee3%3A0x3647fb0b388d2c28!2sThe%20Lake%20Hotel!5e0!3m2!1sen!2sin!4v1689400042161!5m2!1sen!2sin" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    </Col>
                  </Row>

                


         
          <Footer/>
          </>
        );
      })}
    </>
  );
}

export default Room1;

