import React from 'react'


const HeroSection: React.FC = () => {
  console.log('HeroSection component rendered')
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Removed Asian Tour label and dates (moved below HAAWKE in header) */}
      {/* Background Image with Overlay (uses uploaded hawk image, lighter overlay) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('/images/haawke-tag.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      

      {/* Main Content */}
 


  
    </section>
  )
}

export default HeroSection