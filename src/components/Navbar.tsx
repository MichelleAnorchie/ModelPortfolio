import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  { name: 'HOME', href: '#home' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'ABOUT', href: '#about' },
  { name: 'MODEL PROFILE', href: '#model-profile' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    navigation.forEach((item) => {
      const section = document.querySelector(item.href)

      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

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
            className={
              activeSection === item.href.slice(1)
                ? 'nav-link active'
                : 'nav-link'
            }
            aria-current={
              activeSection === item.href.slice(1)
                ? 'location'
                : undefined
            }
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