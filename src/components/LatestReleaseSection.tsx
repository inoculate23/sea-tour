import React from 'react'
import { ExternalLink, Brain, Cpu, Waves } from 'lucide-react'

const LatestReleaseSection: React.FC = () => {
  console.log('LatestReleaseSection component rendered')

  return (
    <section className="section-padding bg-dark-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Wax Cylinder Recordings of Primitive Cultures</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            AI-Enhanced Electronic Music Experience
          </p>
          <p className="text-haawke-gold font-mono text-lg">
            Powered by Google's Supercomputing Infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Album Artwork/Visual */}
          <div className="relative animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-haawke-purple via-dark-bg to-haawke-cyan rounded-2xl p-8 glass-morphism hover-lift">
              <div className="h-full w-full bg-gradient-to-br from-haawke-gold/20 via-haawke-purple/20 to-haawke-cyan/20 rounded-xl flex items-center justify-center"
                style={{
          backgroundImage: `url('./assets/wax.png'), linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                <div className="text-center">
                  <Brain className="w-24 h-24 text-haawke-gold mx-auto mb-4 animate-pulse" />
                  <div className="mt-4 flex justify-center space-x-4">
                    <Cpu className="w-6 h-6 text-haawke-purple animate-float" />
                    <Waves className="w-6 h-6 text-haawke-cyan animate-pulse" />
                    <Brain className="w-6 h-6 text-haawke-gold animate-float" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Release Information */}
          <div className="animate-fade-in-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Cutting-Edge AI Integration
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  This groundbreaking release represents the fusion of decades of electronic music expertise 
                  with Google's most advanced supercomputing technology. Machine learning algorithms analyze 
                  and enhance every aspect of the composition, creating an unprecedented sonic experience.
                </p>
              </div>

              {/* Technical Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Brain className="w-5 h-5 text-haawke-gold" />
                    <h4 className="font-bold text-white">Neural Networks</h4>
                  </div>
                  <p className="text-gray-400 text-sm">AI-generated harmonic progressions and rhythmic patterns</p>
                </div>

                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Cpu className="w-5 h-5 text-haawke-purple" />
                    <h4 className="font-bold text-white">Supercomputing</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Google's infrastructure for real-time audio processing</p>
                </div>

                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Waves className="w-5 h-5 text-haawke-cyan" />
                    <h4 className="font-bold text-white">Sound Design</h4>
                  </div>
                  <p className="text-gray-400 text-sm">ML-enhanced synthesis and spatial audio techniques</p>
                </div>

                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <ExternalLink className="w-5 h-5 text-haawke-gold" />
                    <h4 className="font-bold text-white">Innovation</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Pioneering the future of electronic music production</p>
                </div>
              </div>

              {/* Listen Button */}
              <div className="pt-6">
                <a 
                  href="https://music.haawke.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-haawke-gold to-haawke-cyan text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 neon-glow"
                >
                  <ExternalLink className="w-6 h-6" />
                  <span>Purchasenew release: Wax Cylinders</span>
                </a>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-haawke-purple pl-6 py-4 bg-dark-bg/50 rounded-r-lg">
                <p className="text-gray-300 text-lg italic mb-2">
                  "This project represents the convergence of everything I've learned from 30 years in electronic music. AI doesn't replace creativity—it amplifies human intuition."
                </p>
                <cite className="text-haawke-gold font-semibold">— Haawke</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestReleaseSection