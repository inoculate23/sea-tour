import React from 'react'
import { Calendar, MapPin, Clock, Mail, Phone, Globe, Zap, Music } from 'lucide-react'

const BookingSection: React.FC = () => {
  console.log('BookingSection component rendered')

  const tourDates = [
    {
      location: 'Bangkok, Thailand',
      venue: 'Available for Booking',
      dateRange: 'Oct 30 - Nov 15, 2025',
      type: 'Club Shows, Festivals, Private Events'
    },
    {
      location: 'Chiang Mai, Thailand', 
      venue: 'Available for Booking',
      dateRange: 'Nov 16 - Nov 30, 2025',
      type: 'Intimate Venues, Art Galleries'
    },
    {
      location: 'Phuket, Thailand',
      venue: 'Available for Booking', 
      dateRange: 'Dec 1 - Dec 15, 2025',
      type: 'Beach Clubs, Resort Shows'
    },
    {
      location: 'Ho Chi Minh City, Vietnam',
      venue: 'Available for Booking',
      dateRange: 'Dec 16 - Dec 31, 2025', 
      type: 'Underground Clubs, Electronic Venues'
    },
    {
      location: 'Hanoi, Vietnam',
      venue: 'Available for Booking',
      dateRange: 'Jan 1 - Jan 20, 2026',
      type: 'Cultural Centers, Modern Venues'
    }
  ]

  const techRider = [
    'Pioneer CDJ-3000 or equivalent',
    'DJM-A9 or DJM-V10 mixer preferred',
    'Full-range sound system (minimum 10kW)',
    'Professional lighting rig',
    'AI processing capability for live enhancements'
  ]

  return (
    <section id="booking" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Book Haawke</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            SE Asia Promo Tour 2025/2026
          </p>
          <p className="text-haawke-gold font-mono text-lg">
            Available for clubs, festivals, private events, and cultural venues
          </p>
        </div>

        {/* Tour Schedule */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-haawke-purple">Tour Schedule</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourDates.map((date, index) => (
              <div 
                key={date.location}
                className="glass-morphism rounded-xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-haawke-gold/20 rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-haawke-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{date.location}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-haawke-cyan" />
                        <span className="text-haawke-cyan font-mono">{date.dateRange}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-haawke-purple" />
                        <span className="text-gray-300">{date.venue}</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-2">{date.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* What to Expect */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-haawke-gold mb-6">What to Expect</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="bg-haawke-purple/20 rounded-full p-2 flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-haawke-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">AI-Enhanced Live Sets</h4>
                  <p className="text-sm">Real-time machine learning integration creating unique sonic experiences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-haawke-cyan/20 rounded-full p-2 flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-haawke-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Burning Man Aesthetic</h4>
                  <p className="text-sm">Immersive visuals and sound design from the playa to SE Asia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-haawke-gold/20 rounded-full p-2 flex-shrink-0 mt-1">
                  <Music className="w-4 h-4 text-haawke-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Diverse Repertoire</h4>
                  <p className="text-sm">From Psychic TV classics to cutting-edge electronic compositions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-haawke-cyan mb-6">Technical Rider</h3>
            <div className="space-y-3">
              {techRider.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-haawke-cyan rounded-full flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-haawke-purple/10 border border-haawke-purple/30 rounded-lg">
              <p className="text-haawke-purple font-semibold text-sm mb-2">Special Note:</p>
              <p className="text-gray-300 text-xs">
                Haawke's performances feature live AI processing, requiring stable internet connection 
                for cloud-based machine learning enhancements during select tracks.
              </p>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center">
          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Book?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Bring the legendary sound of Burning Man and Psychic TV to your venue. 
              Limited availability across Thailand and Vietnam.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="mailto:booking@haawke.com" 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-haawke-gold to-haawke-cyan text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 neon-glow"
              >
                <Mail className="w-6 h-6" />
                <span>booking@haawke.com</span>
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-3 border-2 border-haawke-purple text-haawke-purple font-bold py-4 px-8 rounded-full hover:bg-haawke-purple hover:text-white transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Phone className="w-6 h-6" />
                <span>Contact Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection