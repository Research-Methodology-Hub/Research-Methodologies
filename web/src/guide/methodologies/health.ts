import type { Methodology } from '../types'

/**
 * Conducting Health Research — placeholder.
 * Full step-by-step guide is in progress; the overview outlines the intended scope.
 */
export const health: Methodology = {
  id: 'health',
  title: 'Conducting Health Research',
  domain: 'Clinical · Public Health · Biomedical',
  blurb:
    'A clinical and public-health research workflow — study design, ethics & IRB approval, data collection, biostatistics, and standardized reporting (CONSORT / STROBE).',
  status: 'coming-soon',
  intro: [
    'A step-by-step guide for clinical, public-health, and biomedical research is in progress. The overview below outlines the intended scope; the full process — from study design through reporting — will follow.',
  ],
  overviewTopics: [
    'Purpose and types of health research (observational vs. interventional)',
    'Research ethics, informed consent, and IRB / ethics-committee approval',
    'Study design (RCT, cohort, case-control, cross-sectional)',
    'Sampling, recruitment, and data collection',
    'Biostatistics and analysis (effect sizes, confidence intervals, survival analysis)',
    'Standardized reporting (CONSORT for trials, STROBE for observational studies)',
  ],
  steps: [],
}
