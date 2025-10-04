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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/70 backdrop-blur border-b border-gray-700">
      <div className="container-custom flex items-center justify-between py-3">
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