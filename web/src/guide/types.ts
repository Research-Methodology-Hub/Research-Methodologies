/** Shared types for the methodology guides. */

export interface GuideItem {
  text: string
  children?: string[]
}

export interface GuideStep {
  n: number
  title: string
  summary: string
  items: GuideItem[]
}

export interface Methodology {
  /** URL slug, e.g. 'cs-ai'. */
  id: string
  /** Full guide title, e.g. "Conducting Computer Science & AI Research". */
  title: string
  /** Short label for cards / footers, e.g. "Computer Science · AI · Data Science". */
  domain: string
  /** One-sentence description for the catalogue card. */
  blurb: string
  /** Whether the full step-by-step guide is ready. */
  status: 'available' | 'coming-soon'
  /** Intro paragraphs shown at the top of the guide entry page. */
  intro: string[]
  /** "Overview of Scientific Research" bullet topics. */
  overviewTopics: string[]
  /** The ordered research steps (empty for coming-soon guides). */
  steps: GuideStep[]
  /** Optional credit line (e.g. when adapted from an external source). */
  credit?: string
}
