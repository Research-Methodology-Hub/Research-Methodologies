import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { meridien } from '../brand/palette'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      {/* faint construction grid, à la Méridien */}
      <svg className="landing__grid" aria-hidden="true">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={meridien.ink} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <SiteHeader />

      <main className="landing__hero">
        <p className="landing__eyebrow">Est. 2026 · Open research methodology</p>
        <h1 className="landing__title">
          A centralized hub for research <span className="landing__title-accent">methodology</span>.
        </h1>
        <p className="landing__lede">
          Sharing research methodologies, frameworks, and tools across diverse academic and scientific disciplines —
          built for reproducibility, rigor, and structure.
        </p>
        <div className="landing__cta">
          <Link to="/methodologies" className="landing__btn landing__btn--primary">
            Explore the guides →
          </Link>
          <a href="#" className="landing__btn landing__btn--ghost">
            Browse the catalogue
          </a>
        </div>
      </main>

      <footer className="landing__footer">
        <div className="landing__footer-mark">
          <LogoMark size={20} />
          <span>Research Methodology Hub</span>
        </div>
        <span className="landing__footer-credit">Initialised by Mohamed El Hajji</span>
        <span className="landing__footer-note">Methods · Frameworks · Tools</span>
      </footer>
    </div>
  )
}
