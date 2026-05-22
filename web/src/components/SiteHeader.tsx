import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import './SiteHeader.css'

const NAV = [
  { label: 'Methodologies', to: '/methodologies' },
  { label: 'About', to: '/about' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand" aria-label="Research Methodology Hub — home">
        <Logo scale={0.5} />
      </Link>
      <nav className="site-header__nav">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `site-header__link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
