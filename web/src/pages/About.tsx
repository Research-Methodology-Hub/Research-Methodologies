import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { CONTACT_EMAILS } from '../guide/contacts'
import './About.css'

const AUDIENCE = [
  "Master's students — learning to structure a research project",
  'PhD students — conducting and publishing original research',
  'Supervisors & teachers — guiding and reviewing student work (encadrement)',
  'Scientific researchers — standardizing methodology across projects',
  'AI assistants & agents — supporting researchers throughout the workflow',
]

export default function About() {
  return (
    <div className="about">
      <SiteHeader />

      <main className="about__main">
        <header className="about__intro">
          <p className="about__eyebrow">About</p>
          <h1 className="about__title">About Research Methodology Hub</h1>
        </header>

        {/* ---- Quoi / What ---- */}
        <section className="about__section">
          <h2 className="about__h2">
            <span className="about__h2-rule" />
            What it is
          </h2>
          <p className="about__body">
            Research Methodology Hub is an open-source toolbox of standardized guidelines, frameworks, and templates for
            conducting rigorous, reproducible research in Computer Science, Artificial Intelligence, and Data Science.
            At its core are step-by-step <Link className="about__inline-link" to="/methodologies">methodology guides</Link> that
            walk through the full research lifecycle — from problem formulation and literature review to methodology,
            experimentation, analysis, and dissemination — across multiple disciplines.
          </p>
        </section>

        {/* ---- Pourquoi / Why ---- */}
        <section className="about__section">
          <h2 className="about__h2">
            <span className="about__h2-rule" />
            Why it exists
          </h2>
          <p className="about__body">
            In modern Computer Science and AI research, reproducibility is a major challenge. Methods are often
            under-documented, baselines inconsistent, and results hard to reproduce. This hub exists to improve
            <strong> reproducibility, rigor, and structure</strong> — giving researchers a shared, dependable process
            for data management, model evaluation, and software engineering in science.
          </p>
          <p className="about__body">It is built for:</p>
          <ul className="about__list">
            {AUDIENCE.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        {/* ---- Par qui / Who ---- */}
        <section className="about__section">
          <h2 className="about__h2">
            <span className="about__h2-rule" />
            Who is behind it
          </h2>
          <p className="about__body">
            This project was <strong>initialised by Mohamed El Hajji</strong> and is built with the community, hosted by
            the{' '}
            <a className="about__inline-link" href="https://github.com/Research-Methodology-Hub" target="_blank" rel="noreferrer">
              Research-Methodology-Hub
            </a>{' '}
            organization. Contributions — frameworks, templates, and best-practice guides — are welcome.
          </p>
          <p className="about__contact">
            Get in touch:{' '}
            {CONTACT_EMAILS.map((email, i) => (
              <span key={email}>
                {i > 0 && ' · '}
                <a className="about__inline-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            ))}
          </p>
        </section>
      </main>

      <footer className="about__footer">
        <div className="about__footer-mark">
          <LogoMark size={20} />
          <span>Research Methodology Hub</span>
        </div>
        <span className="about__footer-credit">Initialised by Mohamed El Hajji</span>
        <span className="about__footer-note">Computer Science · AI · Data Science</span>
      </footer>
    </div>
  )
}
