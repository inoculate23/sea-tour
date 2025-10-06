import React from 'react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'booking', label: 'Asia Tour/Booking' },
  { id: 'biography', label: 'Biography' },
  { id: 'latest-release', label: 'Release' },
  { id: 'music', label: 'Music' },
  { id: 'contact', label: 'Contact' }
]

const NavBar: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700 overflow-hidden h-[60px]">
      {/* Background iframe */}
      <div className="absolute inset-0">
        <iframe
          src="https://gleeful-youtiao-a8b20c.netlify.app/"
          title="Nav Background"
          className="absolute inset-0 w-full h-full pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer"
          allow="fullscreen; autoplay; encrypted-media; pointer-lock"
        />
        {/* Overlay tint for readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 container-custom flex items-center justify-between h-[60px]">
        <a href="#hero" onClick={(e) => handleClick(e, 'hero')} className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-haawke-gold/50">
            <img
              src="/images/haawke1-bk.jpg.jpg"
              alt="Haawke logo"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              className="text-gray-300 hover:text-haawke-gold transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
