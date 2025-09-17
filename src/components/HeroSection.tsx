import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroSection: React.FC = () => {
  console.log('HeroSection component rendered')

  
  return (
    
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}

     <div className="sketchfab-embed-wrapper"> 
   <iframe title="Thai Monkey Mask" frameBorder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cbdc5fe616f946e0950ad6f01cba5e53/embed?autostart=1&transparent=1&ui_theme=dark"> 
 </iframe> 
    </div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-haawke-gold opacity-20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-haawke-purple opacity-30 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-haawke-cyan opacity-25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-haawke-gold opacity-15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center container-custom px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
            <span className="gradient-text neon-glow">HAAWKE</span>
          </h1>
          
          <div className="text-xl md:text-5xl lg:text-3xl font-light mb-8 space-y-2">
            <p className="bg-gradient-to-r from-haawke-gold to-haawke-cyan text-yeilow font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 neon-glow">DJ Kraig (Craig Ellenwood)</p>
            <p className="text-gray-300">American Electronic Music Pioneer</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-haawke-purple via-haawke-cyan to-haawke-gold bg-clip-text text-transparent">
                SE ASIA PROMO TOUR
              </span>
            </h2>
         <div className="text-lg md:text-xl text-gray-300 font-mono">
  <div className="flex justify-center items-center gap-8 mb-4">
    <img src="/images/Flag_of_Thailand.svg" width="100" alt="Thailand flag" />
    <img src="/images/Flag_of_Vietnam.svg" width="100" alt="Vietnam flag" />
    <img src="/images/Flag_of_Japan.svg" width="100" alt="Japan flag" />
  </div>
  <div className="flex justify-center items-center gap-8 mb-2 font-bold">
    <span>THAILAND</span>
    <span>VIETNAM</span>
    <span>JAPAN</span>
  </div>
  <p className="text-haawke-gold mt-2">OCT 30, 2025 - JAN 20, 2026</p>
</div>

          {/* Key Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-sm md:text-base">
            <div className="glass-morphism rounded-lg p-4 hover-lift">
              <p className="text-haawke-gold font-semibold mb-1">BURNING MAN</p>
              <p className="text-gray-300">Electronic Music Founder</p>
            </div>
            <div className="glass-morphism rounded-lg p-4 hover-lift">
              <p className="text-haawke-purple font-semibold mb-1">PSYCHIC TV</p>
              <p className="text-gray-300">Former Band Member</p>
            </div>
            <div className="glass-morphism rounded-lg p-4 hover-lift">
              <p className="text-haawke-cyan font-semibold mb-1">GOOGLE AI</p>
              <p className="text-gray-300">Supercomputer Grant</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://music.haawke.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-haawke-gold to-haawke-cyan text-yeilow font-bold py-4 px-8 rounded-full hover:shadow-sm hover:scale-105 transition-all duration-300"
            >
             Purchase new release: Les Barons - Wax Cylinders
            </a>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-haawke-purple text-haawke-purple font-bold py-4 px-8 rounded-full hover:bg-haawke-purple hover:text-white transition-all duration-300"
            >
              Book Shows
            </button>
             
          </div>
<iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fcraigellenwood%2Fhumans-after-all%2F" allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;" ></iframe>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-8 h-8 text-haawke-gold" />
      </div>
      </div>
    </section>
  )
}

export default HeroSection
