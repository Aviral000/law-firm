import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PresidentCard from './PresidentCard'
import AttorneyCard from './AttorneyCard'

export default function AttorneyHome() {
  return (
    <div>
      <Header />
      <PresidentCard />
      <AttorneyCard />
      <Footer />
    </div>
  )
}
