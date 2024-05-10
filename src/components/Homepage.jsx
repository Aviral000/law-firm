import React from 'react'
import Header from './Header'
import Attorney from './Attorney'
import About from './About'
import Feedback from './Feedback'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className='inner-container1'>
      <Header />
      <Attorney />
      <About />
      <Feedback />
      <Footer />
    </div>
  )
}
