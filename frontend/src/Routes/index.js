import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/LandingPAge";
import Aboutindex from "../components/About";
import Contactindex from "../components/ContactUs";
// import Booking from "../h/Booking";
// import Room1 from "../h/room1";
import BookingRoom from "../reservation/BookingRoom";
import Booking from "../reservation/Booking";
import Room1 from "../reservation/room1";
// import BookingRoom from "../h/BookingRoom";
// import BookRoute from "../h/BookRoute";
import OurHotels from "../components/OurHotels";
import TheCityJoy from "../components/TheCityJoy";
import Blog1 from "../components/Blog1";
import RabindraLake from "../components/RabindraLake";
import Museum from "../components/museum";
import Food from "../components/Food";
import Mahalya from "../components/Mahalya";
import DurgaPooja from "../components/durgapooja";
import VaayuCafe from "../components/VaayuCafe";
import SignIn from "../components/Signin";
import BookingForm from "../components/BookingForm";
import Signup from "../components/SignUp";
import YouBooking from "../components/YouBooking";

const AppRoute = () => {
  return (
    <>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutindex />} />
        <Route path="/contactus" element={<Contactindex />} />
        {/* <Route exact path="/reservation/*" element={<BookRoute />} /> */}
        <Route exact path="/reservation" element={<Booking />} />
        <Route path="/room1/:id" element={<Room1 />} />
        <Route path="/BookingRoom/:id" element={<BookingRoom />} />
        <Route path="/OurRoom" element={<OurHotels />} />
        <Route path="/cityofjoy" element={<TheCityJoy />} />
        <Route path="/temple" element={<Blog1 />} />
        <Route path="/rabindralake" element={<RabindraLake />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/food" element={<Food />} />
        <Route path="/mahalya" element={<Mahalya />} />
        <Route path="/durgapooja" element={<DurgaPooja />} />
        <Route path="/vaayucafe" element={<VaayuCafe />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/signuppage" element={<Signup />} />
        <Route path="/ourbookings" element={<YouBooking />} />
        
      </Routes>
    </>
  );
};

export default AppRoute;
