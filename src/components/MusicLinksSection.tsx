import React from 'react'
import { ExternalLink, Headphones, Music, Radio } from 'lucide-react'

const MusicLinksSection: React.FC = () => {
  console.log('MusicLinksSection component rendered')

  const platforms = [
    {
     
      name: 'SoundCloud',
      icon: <Radio className="w-30 h-8" />,
      description: 'Latest tracks and live sets',
      url: 'https://soundcloud.com/haawke-band',
      color: 'haawke-gold',
      bgGradient: 'from-haawke-gold/20 to-haawke-gold/5'
    },
    {
      name: 'Mixcloud',
      icon: <Headphones className="w-30 h-8" />,
      description: 'DJ mixes and radio shows',
      url: 'https://mixcloud.com/craigellenwood',
      color: 'haawke-purple',
      bgGradient: 'from-haawke-purple/20 to-haawke-purple/5'
    },
   
    {
      name: 'Official Website',
      icon: <Music className="w-30 h-8" />,
      description: 'New Album and info',
      url: 'https://music.haawke.com',
      color: 'haawke-gold',
      bgGradient: 'from-haawke-gold/20 to-haawke-gold/5'
    },
     {
      name: 'Psychic Tv',
      icon: <Headphones className="w-30 h-8" />,
      description: 'DJ mixes and radio shows',
      url: 'https://open.spotify.com/artist/3oi0s3WIuxBU5oh87n7za2',
      color: 'haawke-purple',
      bgGradient: 'from-haawke-purple/20 to-haawke-purple/5'
    },
  ]

  

  return (
    <section className="section-padding bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Listen Now</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore decades of electronic music evolution, from Psychic TV classics to AI-enhanced modern compositions
          </p>
        </div>

        {/* Platform Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br ${platform.bgGradient} glass-morphism rounded-xl p-6 hover-lift group transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`text-${platform.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <ExternalLink className={`w-4 h-4 text-${platform.color}`} />
                  <span className={`text-${platform.color} font-semibold text-sm`}>Listen</span>
                </div>
              </div>
            </a>
          ))}
        </div>

    
<div className="animate-fade-in-up">
  <h3 className="text-3xl font-bold text-center mb-12">
    <span className="text-haawke-purple">Featured Sets</span>
  </h3>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
   
      <div
       
        className="glass-morphism rounded-xl p-6 hover-lift"
     
      >
        <div id="wrapper">
          <section id="music">
            <h1>Live DJ Sets</h1>
            <iframe width="100%" height="60" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2Fcraigellenwood%2Ficarus-phoenix%2F"  allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;" ></iframe>
        <iframe 
        width="95%" 
        height="65" 
        src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fcraigellenwood%2Fdj-kraig-electric-libras-dancing-on-a-sunbeam%2F" 
       
        ></iframe>
            <iframe
              width="95%"
              height="65"
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fcraigellenwood%2Fexperimental-knowledge-project%2F"
              frameBorder="0"
            ></iframe>
            <iframe
              width="95%"
              height="65"
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fcraigellenwood%2Fdj-kraig-burning-man-2019-metamorphosis-mix%2F"
              frameBorder="0"
            ></iframe>
            <iframe
              width="95%"
              height="65"
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fcraigellenwood%2Fdj-kraig-goa-anthems-studio-mix-feb2019-for-kells%2F"
              frameBorder="0"
            ></iframe>

          </section>

        </div>
        </div>
        <div id="wrapper2">
             <section id="music2">
            <h1>New Album</h1>
           <iframe width="100%" height="600" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1747834119&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/haawke-band" title="Haawke" target="_blank">Haawke</a> · <a href="https://soundcloud.com/haawke-band/sets/wax-cylinder-recordings-of-primitive-cultures" title="Wax Cylinder Recordings of Primitive Cultures" target="_blank">Wax Cylinder Recordings of Primitive Cultures</a></div>
              </section>
             
              </div>
        </div>
  </div>
</div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Follow the evolution of AI-enhanced electronic music. New releases, live sets, 
              and behind-the-scenes content from the lab.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://music.haawke.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-haawke-purple to-haawke-cyan text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Subscribe to Updates
              </a>
              <a 
                href="https://soundcloud.com/haawke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-haawke-gold text-haawke-gold font-bold py-3 px-6 rounded-full hover:bg-haawke-gold hover:text-black transition-all duration-300"
              >
                Follow on SoundCloud
              </a>
            </div>
          </div>
        </div>
    
    </section>
  )
}

export default MusicLinksSection