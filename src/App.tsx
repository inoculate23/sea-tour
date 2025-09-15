import React from 'react'
import HeroSection from './components/HeroSection'
import BiographySection from './components/BiographySection'
import LatestReleaseSection from './components/LatestReleaseSection'
import MusicLinksSection from './components/MusicLinksSection'
import BookingSection from './components/BookingSection'
import ContactSection from './components/ContactSection'

function App() {
  console.log('App component rendered')
  
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <HeroSection />
       <BookingSection />
      <BiographySection />
      <LatestReleaseSection />
      <MusicLinksSection />
     
      <ContactSection />
    </div>
  )
}

export default App