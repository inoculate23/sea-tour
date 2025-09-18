import React from 'react'
import { ArrowDown } from 'lucide-react'

const IntroSection: React.FC = () => {
  console.log('IntroSection component rendered')

  
  return (
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">


  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
    <ArrowDown className="w-8 h-8 text-haawke-gold" />
  </div>



      {/* Main Content */}
        <div className="mb-12 h-[100vh] w-full">
    <iframe src="https://cheery-starship-67c0f5.netlify.app" className="mb-12 h-[100vh] w-full"></iframe>

     

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-8 h-8 text-haawke-gold" />
      </div>
      </div>
    
    </section>
  )
}

export default IntroSection
