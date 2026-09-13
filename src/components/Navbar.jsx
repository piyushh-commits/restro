import React, { useState, useEffect } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 z-20 w-full px-auto transition-all duration-300
        ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">

          {/* Logo */}
          <a href="/">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="w-36"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-zinc-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Book Button */}
          <a
            href="#booking-process"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-4 rounded-full transition"
          >
            Book a Table
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 bg-zinc-800 text-white p-2 rounded-md"
          >
            {mobileOpen ? (
              <XIcon size={24} />
            ) : (
              <MenuIcon size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md
        flex items-center justify-center
        transition-transform duration-300
        ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar