import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { METHODOLOGIES } from '../guide/methodologies'
import './Catalogue.css'

export default function Catalogue() {
  return (
    <div className="catalogue">
      <SiteHeader />

      <main className="catalogue__main">
        <header className="catalogue__intro">
          <p className="catalogue__eyebrow">Methodologies</p>
          <h1 className="catalogue__title">Research methodology guides</h1>
          <p className="catalogue__lead">
            Step-by-step methodology guides across disciplines. Each follows the same rigorous structure — overview,
            then an ordered research process — adapted to its field. Pick a methodology to begin.
          </p>
        </header>

        <ul className="catalogue__grid">
          {METHODOLOGIES.map((m) => {
            const available = m.status === 'available'
            const inner = (
              <>
                <div className="methodology-card__head">
                  <span className="methodology-card__domain">{m.domain}</span>
                  {available ? (
                    <span className="methodology-card__steps">{m.steps.length} steps</span>
                  ) : (
                    <span className="methodology-card__badge">Coming soon</span>
                  )}
                </div>
                <h2 className="methodology-card__title">{m.title}</h2>
                <p className="methodology-card__blurb">{m.blurb}</p>
                <span className="methodology-card__cta">{available ? 'Open guide →' : 'Preview outline →'}</span>
              </>
            )
            return (
              <li key={m.id}>
                <Link
                  to={`/guide/${m.id}`}
                  className={`methodology-card${available ? '' : ' methodology-card--soon'}`}
                >
                  {inner}
                </Link>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className="catalogue__footer">
        <div className="catalogue__footer-mark">
          <LogoMark size={20} />
          <span>Research Methodology Hub</span>
        </div>
        <span className="catalogue__footer-credit">Initialised by Mohamed El Hajji</span>
        <span className="catalogue__footer-note">Methods across disciplines</span>
      </footer>
    </div>
  )
}
