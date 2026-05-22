import type { Methodology } from '../types'

/**
 * Conducting Educational Research.
 *
 * The social-science research methodology (key variables, research design,
 * sampling, instrument reliability & validity, thesis chapters). Adapted from
 * Katrina A. Korb's "Conducting Educational Research" (korbedpsych.com) and
 * regrouped into a 7-step shape. Deliberately kept separate from the
 * computational (CS/AI) methodology.
 */
export const educational: Methodology = {
  id: 'educational',
  title: 'Conducting Educational Research',
  domain: 'Education · Social Sciences',
  blurb:
    'A social-science research workflow — key variables, research design, sampling, instrument reliability & validity, and thesis chapters (Introduction → Conclusion).',
  status: 'available',
  credit: 'Adapted from Katrina A. Korb, "Conducting Educational Research" (korbedpsych.com).',
  intro: [
    'Conducting an educational research study is an intensive but intensely rewarding process. This tutorial provides step-by-step guidance for conducting an educational research study according to standard educational research guidelines. The general principles of research methods can be adapted by other social-science researchers to their own domain of study.',
  ],
  overviewTopics: [
    'Purpose of educational research',
    'Philosophy of research',
    'Ethical considerations of conducting research',
    'Introduction to the research process',
    'Overview of writing a research study',
  ],
  steps: [
    {
      n: 1,
      title: 'Problem Formulation & Research Design',
      summary: 'Move from a research idea to key variables, research questions, hypotheses, and a chosen design.',
      items: [
        { text: 'Brainstorm research ideas' },
        { text: 'Survey interesting educational variables to consider' },
        { text: 'Identify the key variables and the research design' },
        { text: 'Write purposes, research questions, and hypotheses based on the key variables and research design' },
        { text: 'Write the Research Design section to describe the selected design' },
      ],
    },
    {
      n: 2,
      title: 'Population & Sampling',
      summary: 'Define who you will study and how you will select them.',
      items: [
        { text: 'Consider the population that is in line with your purposes' },
        { text: 'Based on logistical considerations, select the sampling procedure' },
        { text: 'Write the Population, Sample, and Sampling Technique sections' },
      ],
    },
    {
      n: 3,
      title: 'Literature & Instrumentation',
      summary: 'Search prior studies and choose a reliable, valid instrument for each key variable.',
      items: [
        { text: 'Search the literature to find other studies about your key variables' },
        {
          text: 'Choose an appropriate instrument for each key variable',
          children: [
            'Adopt or adapt pre-existing instruments',
            'Write questionnaire items',
            'Develop the instrument format',
            'Evaluate the reliability of the instrument',
            'Evaluate the validity of the instrument',
          ],
        },
        { text: 'Write the Instruments section to describe the instruments' },
      ],
    },
    {
      n: 4,
      title: 'Method: Data Collection & Analysis Plan',
      summary: 'Specify any treatment and the procedures for collecting and analyzing data.',
      items: [
        { text: 'For experimental and quasi-experimental studies, develop a treatment that should influence the dependent variables' },
        { text: 'Write the Method of Data Collection section: the treatment and how the instruments will be administered' },
        { text: 'Write the Method of Data Analysis section: the appropriate statistics based on the research questions and hypotheses' },
      ],
    },
    {
      n: 5,
      title: 'Documenting the Context',
      summary: 'Write the introduction and the review of relevant literature around your key variables.',
      items: [
        { text: 'Write the rest of Chapter 1: Introduction, focusing on the key variables in the purposes' },
        { text: 'Write Chapter 2: Review of Relevant Literature, focusing on the key variables in the purposes' },
      ],
    },
    {
      n: 6,
      title: 'Data Collection & Analysis',
      summary: 'Collect data to the planned procedure and analyze it against your research questions.',
      items: [
        { text: 'Collect data, strictly following the procedures described in Chapter 3: Methods' },
        {
          text: 'Analyze data according to the Method of Data Analysis',
          children: [
            'Code data from the instrument',
            'Calculate descriptive statistics',
            'Conduct inferential statistics to analyze the research questions and hypotheses',
            'Create tables and figures',
          ],
        },
      ],
    },
    {
      n: 7,
      title: 'Reporting & Dissemination',
      summary: 'Write up the results and conclusion, and apply what you learned.',
      items: [
        { text: 'Write Chapter 4: Results' },
        { text: 'Write Chapter 5: Conclusion' },
        { text: 'Create supplementary materials' },
        { text: 'Implement the lessons learned from the research study in education' },
      ],
    },
  ],
}
