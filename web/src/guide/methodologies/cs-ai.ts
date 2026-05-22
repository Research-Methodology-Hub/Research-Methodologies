import type { Methodology } from '../types'

/**
 * Conducting Computer Science & AI Research.
 *
 * Source: temp-data/index.md. Two corrections applied vs. the source:
 *   1. Numbering — the source had two "Step 2" headings and skipped 5; this is
 *      the clean, logical 7-step sequence.
 *   2. Ordering — the SOTA literature search was moved from Step 3 into Step 2,
 *      so the literature is searched *before* the related-work chapter is written.
 *
 * Content is strictly the computational research methodology (datasets,
 * architectures, benchmarks, ablation) — not the social-science methodology.
 */
export const csAi: Methodology = {
  id: 'cs-ai',
  title: 'Conducting Computer Science & AI Research',
  domain: 'Computer Science · AI · Data Science',
  blurb:
    'A computational research workflow for empirical, theoretical, and engineering studies — datasets, architectures, benchmarks, and reproducible reporting (ACM / IEEE / NeurIPS).',
  status: 'available',
  intro: [
    'Conducting a research study in Computer Science, Artificial Intelligence, or Data Science is an intensive but deeply rewarding process. This tutorial provides step-by-step guidance for conducting a computational research study according to standard academic and peer-reviewed conference guidelines (ACM, IEEE, NeurIPS, SIGKDD). The guidelines adapt to theoretical computer science, systems engineering, or applied machine learning projects.',
  ],
  overviewTopics: [
    'Purpose of Computer Science & AI research',
    'Philosophy of computational research (empirical vs. theoretical vs. engineering)',
    'Ethical considerations in AI (data privacy, bias, algorithmic fairness, and intellectual property)',
    'Introduction to the technical research process',
    'Overview of writing a computer science paper (the IMRAD / conference format)',
  ],
  steps: [
    {
      n: 1,
      title: 'Problem Formulation & Conceptualization',
      summary: 'Turn a rough idea into a precise problem statement, research questions, and a computational framework.',
      items: [
        { text: 'Brainstorm computational research ideas' },
        { text: 'Survey interesting architectural and algorithmic domains to consider' },
        { text: 'Identify the core problem statement, system constraints, and experimental design' },
        { text: 'Write purposes, research questions, and technical objectives based on system constraints and experimental design' },
        { text: 'Write the Research Framework section to describe the selected computational paradigm' },
      ],
    },
    {
      n: 2,
      title: 'Documenting the Context',
      summary: 'Search the field, frame the motivation, and position your contribution against the state of the art.',
      items: [
        { text: 'Search the literature to find state-of-the-art (SOTA) studies solving your target problem' },
        { text: 'Write the rest of Chapter 1: Introduction, focusing on the problem motivation and your specific technical contributions' },
        { text: 'Write Chapter 2: Literature Review & Related Work, comparing current state-of-the-art methods to your proposed solution' },
      ],
    },
    {
      n: 3,
      title: 'Data Engineering & Baseline Selection',
      summary: 'Define the data domain, sampling or simulation procedure, and the baselines you will benchmark against.',
      items: [
        { text: 'Consider the target data domain or problem environment in line with your purposes' },
        { text: 'Based on hardware and logistical considerations, select the dataset sampling or environment simulation procedure' },
        { text: 'Write the Dataset Characterization, Benchmarks, and Data Splits (Train / Val / Test) sections' },
      ],
    },
    {
      n: 4,
      title: 'Methodology & System Instrumentation',
      summary: 'Design the algorithm or architecture, formalize it, and analyze its complexity and soundness.',
      items: [
        { text: 'Choose or design an appropriate algorithm, network architecture, or mathematical model for your problem' },
        { text: 'Adopt or adapt pre-existing neural architectures or algorithmic frameworks' },
        { text: 'Write mathematical formulations and pseudo-code' },
        { text: 'Develop the system pipeline and optimization strategy' },
        { text: 'Evaluate the complexity analysis of the algorithm (Big-O notation)' },
        { text: 'Evaluate the theoretical soundness and convergence of the model' },
        { text: 'Write the Methodology / Proposed Architecture section to describe the system components' },
      ],
    },
    {
      n: 5,
      title: 'Implementation & Experimental Setup',
      summary: 'Build the artifact and specify the hardware, software, hyperparameters, and metrics.',
      items: [
        { text: 'For empirical, comparative, and experimental studies, develop a prototype, system pipeline, or artifact that influences the performance metrics' },
        { text: 'Write the Experimental Setup section: hardware stack (GPUs / CPUs), software environment, hyperparameters, and how baselines will be benchmarked' },
        { text: 'Write the Evaluation Metrics section: quantitative metrics tied to the research questions (e.g. accuracy, F1-score, latency, throughput, memory footprint)' },
      ],
    },
    {
      n: 6,
      title: 'Execution, Benchmark & Data Analysis',
      summary: 'Run experiments to the specified configuration and analyze results rigorously.',
      items: [
        { text: 'Execute benchmarks and run experiments, strictly following the configurations described in Chapter 3: Methodology' },
        {
          text: 'Analyze computational data according to the Evaluation Metrics section',
          children: [
            'Extract logs and performance metrics from training / testing runs',
            'Calculate descriptive statistical aggregates (mean, standard deviation across multiple random seeds)',
            'Conduct statistical significance tests (e.g. t-test, Wilcoxon signed-rank test)',
            'Run ablation studies to evaluate the impact of individual system components',
          ],
        },
        { text: 'Create tables (benchmarking matrix) and figures (loss curves, ROC curves, latency plots)' },
      ],
    },
    {
      n: 7,
      title: 'Reporting & Dissemination',
      summary: 'Write up results and discussion, and ship reproducible supplementary materials.',
      items: [
        { text: 'Write Chapter 4: Experimental Results & Benchmarks' },
        { text: 'Write Chapter 5: Discussion, Limitations (edge cases, failure modes, compute costs), and Conclusion' },
        { text: 'Create supplementary materials (open-source code repository, hyperparameter configurations, and reproducibility scripts)' },
        { text: 'Implement the lessons learned into production software, open-source libraries, or future engineering frameworks' },
      ],
    },
  ],
}
