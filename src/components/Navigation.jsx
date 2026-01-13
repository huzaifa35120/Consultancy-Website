import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/targethomes-logo-png.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/why-hire', label: 'Why Hire Us' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img
            src={Logo}
            alt="Target Home Solutions logo"
            style={{ height: 85, marginRight: 16 }}
          />
          <span>
            <span style={{ color: '#f9fafb' }}>Target</span>{' '}
            <span>Home Solutions</span>
          </span>
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={
                location.pathname === link.to ? 'active-link' : undefined
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={`nav-actions ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a className="btn btn-secondary" href="/contact" onClick={() => setMobileMenuOpen(false)}>
            Talk to an advisor
          </a>
          <a className="btn btn-primary" href="/contact#book" onClick={() => setMobileMenuOpen(false)}>
            Book a consult
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navigation
