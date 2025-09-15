import React from 'react'
import { Mail, Phone, Globe, Instagram, Twitter, Facebook, MapPin, Clock } from 'lucide-react'

const ContactSection: React.FC = () => {
  console.log('ContactSection component rendered')

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Booking Email',
      value: 'booking@haawke.com',
      href: 'mailto:booking@haawke.com',
      description: 'For show bookings and event inquiries'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Management',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Tour management and logistics'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'Official Website',
      value: 'music.haawke.com',
      href: 'https://music.haawke.com',
      description: 'Latest releases and updates'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Based In',
      value: 'San Francisco, CA',
      href: null,
      description: 'Home to Burning Man origins'
    }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/haawkemusic',
      handle: '@haawkemusic'
    },
    {
      name: 'Twitter/X',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/haawkemusic',
      handle: '@haawkemusic'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com/haawkemusic',
      handle: 'Haawke Official'
    }
  ]

  const pressKit = [
    'High-resolution photos',
    'Artist biography & press release',
    'Technical rider specifications',
    'Audio samples from Les Barons Wax Cylinders',
    'Performance videos from Burning Man',
    'AI integration case studies'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring the evolution of electronic music to SE Asia? 
            Contact us for bookings, press inquiries, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-haawke-gold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.label}
                  className="glass-morphism rounded-lg p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-haawke-purple/20 rounded-full p-3 flex-shrink-0">
                      <div className="text-haawke-purple">
                        {contact.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{contact.label}</h4>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-haawke-cyan hover:text-haawke-gold transition-colors duration-300 font-semibold"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-haawke-cyan font-semibold">{contact.value}</span>
                      )}
                      <p className="text-gray-400 text-sm mt-2">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tour Dates Reminder */}
            <div className="mt-8 glass-morphism rounded-lg p-6 border border-haawke-gold/30">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-haawke-gold" />
                <h4 className="text-xl font-bold text-white">Tour Availability</h4>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold text-haawke-gold mb-2">October 30, 2025 - January 20, 2026</p>
                <p className="text-sm">Available for bookings across Thailand and Vietnam</p>
              </div>
            </div>
          </div>

          {/* Social Media & Press Kit */}
          <div className="animate-fade-in">
            <div className="space-y-12">
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-haawke-cyan mb-8">Follow the Journey</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-morphism rounded-lg p-6 hover-lift group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-center">
                        <div className="text-haawke-cyan mb-3 group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <h4 className="font-bold text-white text-sm mb-1">{social.name}</h4>
                        <p className="text-gray-400 text-xs">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Press Kit */}
              <div>
                <h3 className="text-2xl font-bold text-haawke-purple mb-6">Press Kit</h3>
                
                <div className="glass-morphism rounded-lg p-6">
                  <p className="text-gray-300 mb-6">
                    Complete media package available for journalists, promoters, and venues.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {pressKit.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-haawke-purple rounded-full flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="mailto:press@haawke.com"
                    className="inline-flex items-center space-x-2 bg-haawke-purple/20 border border-haawke-purple text-haawke-purple font-semibold py-3 px-6 rounded-full hover:bg-haawke-purple hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Press Kit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 mb-4">
            From the electronic music origins of Burning Man to the cutting edge of AI-enhanced sound
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-500">
            <span>© 2024 Haawke (Craig Ellenwood)</span>
            <span>•</span>
            <span>Powered by Google AI</span>
            <span>•</span>
            <span>SE Asia Tour 2025/2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection