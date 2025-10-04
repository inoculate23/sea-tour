import React from 'react'

const HeaderImage: React.FC = () => {
  return (
    <header className="relative w-full mt-4 h-screen overflow-hidden">
      {/* Full-bleed iframe background (100% width, 100vh height) */}
      <iframe
        src="https://chipper-starburst-27a834.netlify.app/"
        title="Header Background"
        className="absolute inset-0 w-full h-screen"
        loading="lazy"
        referrerPolicy="no-referrer"
        allow="fullscreen; autoplay; encrypted-media; pointer-lock"
      />

      {/* Overlay tint for readability over the iframe content (lighter) */}
      <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />

      {/* Overlay text */}
      <div className="absolute inset-0 z-20 container-custom flex flex-col items-center justify-start text-center pt-1 md:pt-2 pointer-events-none">
        {/* Move AEMP above title */}
        <p className="text-sm md:text-xl text-white drop-shadow-max fade-in-1">
          American Electronic Music Pioneer
        </p>
        <h1 className="text-6xl md:text-8xl font-black mt-1">
          <span className="gradient-text drop-shadow-max">HAAWKE</span>
        </h1>
        {/* One-line Asian Tour with dates below HAAWKE */}
        <p className="mt-2 text-base md:text-2xl text-white drop-shadow-max fade-in-2 tracking-wide">
          Asian Tour – November 2025 - January 2026
        </p>
      </div>
    </header>
  )
}

export default HeaderImage