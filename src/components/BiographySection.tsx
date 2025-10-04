import React from 'react'
import { Music, Users, Zap, Award } from 'lucide-react'

const BiographySection: React.FC = () => {
  console.log('BiographySection component rendered')

  const collaborations = [
    { name: 'Moby', type: 'Producer/DJ', icon: <Music className="w-6 h-6" /> },
    { name: 'Timothy Leary', type: 'Psychologist/Writer', icon: <Zap className="w-6 h-6" /> },
    { name: 'Robert Anton Wilson', type: 'Author/Philosopher', icon: <Users className="w-6 h-6" /> },
    { name: 'Tool Members', type: 'Progressive Metal', icon: <Award className="w-6 h-6" /> },
    { name: 'The Smiths Members', type: 'Alternative Rock', icon: <Music className="w-6 h-6" /> },
     { name: 'Space Tribe', type: 'Psytrance', icon: <Music className="w-6 h-6" /> },
  ]

  return (
    <section id="biography" className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container-custom">
        {/* Top tagline: keep same style, one line */}
        <div className="text-center mb-4 overflow-x-auto">
          <h2 className="whitespace-nowrap text-4xl md:text-6xl font-bold">
            <span className="gradient-text">An Electronic Music Pioneer</span>
          </h2>
        </div>
        {/* Key Credentials moved from Hero (one-line row) */}
        <div className="flex items-stretch justify-center gap-6 pb-8 overflow-x-auto whitespace-nowrap">
          <div className="glass-morphism rounded-lg p-4 hover-lift flex-shrink-0 min-w-[240px]">
            <p className="text-haawke-gold font-semibold mb-1">BURNING MAN</p>
            <p className="text-gray-300">Co-Founder, Established Sound Camps, 1st DJ</p>
          </div>
          <div className="glass-morphism rounded-lg p-4 hover-lift flex-shrink-0 min-w-[240px]">
            <p className="text-haawke-purple font-semibold mb-1">PSYCHIC TV</p>
            <p className="text-gray-300">Former Band Member</p>
          </div>
          <div className="glass-morphism rounded-lg p-4 hover-lift flex-shrink-0 min-w-[240px]">
            <p className="text-haawke-cyan font-semibold mb-1">GOOGLE AI</p>
            <p className="text-gray-300">Supercomputer Grant</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Biography Text */}
          <div className="animate-fade-in-up">
            
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-haawke-gold font-semibold">Haawke (Craig Ellenwood)</span> is a legendary figure in electronic music, 
                having founded the electronic music aspect of <span className="text-haawke-purple font-semibold">Burning Man</span> and continuing 
                to perform at the world's most iconic festival.
              </p>
              
              <p>
                As a former member of the groundbreaking British rock group <span className="text-haawke-cyan font-semibold">Psychic TV</span>, 
                Haawke helped shape the experimental music landscape of the 1980s and beyond, working alongside Genesis P-Orridge to push 
                the boundaries of sound and performance.
              </p>
              
              <p>
                His extensive touring and collaboration history includes working with electronic music pioneer 
                <span className="text-haawke-gold font-semibold"> Moby</span>, counterculture icon 
                <span className="text-haawke-purple font-semibold"> Timothy Leary</span>, philosopher 
                <span className="text-haawke-cyan font-semibold"> Robert Anton Wilson</span>, and members of legendary bands 
                <span className="text-haawke-gold font-semibold"> Tool</span> and <span className="text-haawke-purple font-semibold">The Smiths</span>.
              </p>
              
              <p className="text-white font-medium">
                Recently, Haawke received a prestigious <span className="text-haawke-cyan font-bold">Google grant</span> to utilize their 
                supercomputers for incorporating machine learning and AI into his latest musical endeavors, representing the cutting edge 
                of electronic music production.
              </p>
            </div>
          </div>

          {/* Collaborations Grid */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="text-haawke-gold">Notable Collaborations</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {collaborations.map((collab, index) => (
                <div 
                  key={collab.name} 
                  className="glass-morphism rounded-lg p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-haawke-gold">
                      {collab.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{collab.name}</h4>
                      <p className="text-gray-400 text-sm">{collab.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards Section */}
            <div className="mt-8 glass-morphism rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-haawke-cyan" />
                <h4 className="text-xl font-bold text-white">Recent Recognition</h4>
              </div>
              <p className="text-gray-300">
                Google Supercomputer Grant recipient for AI/ML integration in electronic music production, 
                showcased in the latest release <span className="text-haawke-gold font-semibold">"Les Barons Wax Cylinders"</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BiographySection