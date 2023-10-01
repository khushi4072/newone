import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

import Offer from './WhatWeOffer'
import Footer from './Footer'

const Home = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('TOKEN')
    if(!token){
      navigate('/signin');
    }
  })

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Offer />
      <Footer />

    </>
  )
}

export default Home
