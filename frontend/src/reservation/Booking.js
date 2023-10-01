import React, {useState} from 'react';
import {Container , Row , Col , Image} from 'react-bootstrap';
// import img1 from './image2/img1.webp';
// import img2 from './image2/img2.webp';
// import img3 from './image2/img3.webp';
// import i "./image2/img1.webp";
// import room1 from '../images/room1.webp';
// import room2 from '../images/room2.webp';
// import room3 from '../images/room3.webp';
// import room4 from '../images/room4.webp';
// import room5 from '../images/room5.webp';
// import room6 from '../images/room6.webp';
import Carousel from 'react-bootstrap/Carousel';
import './Booking.css';
import {Link} from 'react-router-dom';
import data from './rooms.json';
import Header from '../components/LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';
import { img1, img2, img3 } from '../assets';
import RoomList from './Roomlist';



 function Booking(){

    const [mm , setMM] = useState(data);

    return(
        <>
        <Header/>
         <Carousel className="section">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-fluid"
          src={img1}
          alt="First slide"
          style={{width:'100vw' , height:'95vh'}}
        />
        <Carousel.Caption  style={{top:'15rem'}}>
          <h3 style={{ fontSize:'3rem'}}>Relaxing Rooms</h3>
          <p style={{ fontSize:'2rem'}}>Your Room , Your Stay</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-fluid"
          src={img2}
          alt="Second slide"
          style={{width:'100vw' , height:'95vh'}}
        />
        <Carousel.Caption style={{top:'15rem'}}>
          <h3 style={{ fontSize:'3rem'}}>Welcome To Suits</h3>
          <p style={{ fontSize:'2rem'}}>Hotel & Resort</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img3}
          alt="Third slide"
          style={{width:'100vw' , height:'95vh'}}
        />
        <Carousel.Caption style={{top:'15rem'}}>
          <h3 style={{ fontSize:'3rem'}}>Unique Experience</h3>
          <p style={{ fontSize:'2rem'}}>
            Enjoy With Us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    {/* <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
          <h2 className="mb-1">Our Rooms</h2>
        </div>
      </div>
      
      <div className="row">
        {

            mm.map((data)=>{
              return(
                <>
                <div className="col-md-6 col-lg-4 mb-5">
        <Link to={`/room1/${data.id}`} style={{textDecoration:'none'}}>
        <div className="hotel-room text-center">
          <a href="#" className="d-block mb-0">
            <img src={data.images} alt="Image" className="img-fluid image_edit" />
          </a>
          <div className="hotel-room-body">
            <h3 className="heading mb-0">
              <a href="#" style={{textDecoration:'none' , color:'#222' , fontSize:'1.5rem'}}>Standard Room</a>
            </h3>
            <strong className="price">{data.charges}</strong>
          </div>
        </div>
        </Link>
      </div>
                </>
              )
            })
        
        }
        
          </div>
          </div>  */}

      
        <RoomList/>
        {/* ----------------------footer------------------ */}
        <Footer/>
        </>
    );
}

export default Booking;