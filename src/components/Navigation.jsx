import { NavLink, useLocation } from 'react-router-dom'

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
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: 9,
                background:
                  'conic-gradient(from 200deg, #1f5b7f, #38bdf8, #f4b23f, #1f5b7f)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 24px rgba(15,23,42,0.35)',
              }}
            >
              <span
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 6,
                  background: '#0b1120',
                  border: '2px solid rgba(248,250,252,0.9)',
                }}
              />
            </span>
            Target <span>Home Solutions</span>
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
