import { NavLink, useLocation } from 'react-router-dom'
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
        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={
                location.pathname === link.to ? 'active-link' : undefined
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-secondary" href="/contact">
            Talk to an advisor
          </a>
          <a className="btn btn-primary" href="/contact#book">
            Book a consult
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navigation
