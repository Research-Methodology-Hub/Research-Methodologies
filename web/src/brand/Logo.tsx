/**
 * Méridien — the Research Methodology Hub logo.
 * A geometric precision compass (option A from the design exploration).
 *
 *   <LogoMark />            — the compass mark on its own (favicons, app icons)
 *   <Logo />               — full lockup (mark + wordmark)
 *   <Logo layout="stacked" />
 */
import { meridien } from './palette'

interface LogoMarkProps {
  size?: number
  color?: string
  accent?: string
  bg?: string
}

export function LogoMark({
  size = 120,
  color = meridien.ink,
  accent = meridien.accent,
  bg = 'transparent',
}: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block', background: bg }} aria-hidden="true">
      {/* outer ring */}
      <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="2.2" />
      {/* tick marks at cardinal points */}
      <line x1="60" y1="6" x2="60" y2="14" stroke={color} strokeWidth="2.2" />
      <line x1="60" y1="106" x2="60" y2="114" stroke={color} strokeWidth="2.2" />
      <line x1="6" y1="60" x2="14" y2="60" stroke={color} strokeWidth="2.2" />
      <line x1="106" y1="60" x2="114" y2="60" stroke={color} strokeWidth="2.2" />
      {/* needle north (filled accent) */}
      <polygon points="60,14 67,60 60,60 53,60" fill={accent} />
      {/* needle south (outlined ink) */}
      <polygon points="60,106 53,60 60,60 67,60" fill="none" stroke={color} strokeWidth="2.2" />
      {/* center dot */}
      <circle cx="60" cy="60" r="3.2" fill={color} />
    </svg>
  )
}

interface LogoProps {
  scale?: number
  color?: string
  accent?: string
  layout?: 'horizontal' | 'stacked'
}

export function Logo({ scale = 1, color = meridien.ink, accent = meridien.accent, layout = 'horizontal' }: LogoProps) {
  if (layout === 'horizontal') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 * scale, fontFamily: '"Space Grotesk", sans-serif', color }}>
        <LogoMark size={88 * scale} color={color} accent={accent} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 * scale }}>
          <div style={{ fontSize: 30 * scale, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>Research Methodology</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 * scale }}>
            <div style={{ fontSize: 30 * scale, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1, color: accent }}>Hub</div>
            <div style={{ flex: 1, height: 1, background: color, opacity: 0.25 }} />
            <div style={{ fontSize: 10 * scale, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.7, fontFamily: '"Space Mono", monospace' }}>EST. 2026</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 * scale, fontFamily: '"Space Grotesk", sans-serif', color }}>
      <LogoMark size={120 * scale} color={color} accent={accent} />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 22 * scale, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Research Methodology</div>
        <div style={{ fontSize: 22 * scale, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, color: accent }}>Hub</div>
      </div>
    </div>
  )
}
