import React from 'react'
import FrontContent from './FrontContent'
import Footer from '../Components/Footer'
import OurServices from './OurServices'
import Technology from './Technology'
import Clients from './Clients'
import Testimonial from '../Components/Testimonial'
import LetsTalk from './LetsTalk'
import Header from '../Components/Header'

const Main = () => {
  return (
    <>
      <Header />
      <FrontContent />
      <OurServices />
      <Technology />
      <Clients />
      <Testimonial />
      <LetsTalk />
      <Footer />
    </>
  )
}

export default Main