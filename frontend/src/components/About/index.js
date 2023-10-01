import React from 'react'
import Header from '../LandingPAge/Header'
import FooterBig from '../LandingPAge/Footerrr'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from '../LandingPAge/Footer'
import TeamMembersSection from './Ourteam'
import OurTeam from './Ourteam'
import Feedback from './FeedBack'
import Feed from './Feedback1'
// import ManualSlider from "./FeedBack";

const Aboutindex = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      
      {/* <TeamMembersSection/> */}
      {/* <FooterBig/> */}
      <OurTeam />
      {/* <ManualSlider /> */}
      <Feed/>
      <Footer />
    </>
  );
}

export default Aboutindex;
