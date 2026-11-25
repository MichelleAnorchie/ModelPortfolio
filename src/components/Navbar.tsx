
import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <a href="#home" className="logo">
        M<span>.</span>
      </a>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="booking-link">
        BOOK ME <ArrowUpRight size={15} />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}
