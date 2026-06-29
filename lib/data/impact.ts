export interface ImpactMetric {
  metric: string;
  title: string;
  description: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    metric: '81%',
    title: 'Increase in Apps Published',
    description:
      'A/B experimentation on Power Apps maker funnel. Three experiments graduated to 100% of users.',
  },
  {
    metric: '250%',
    title: 'NL2FLOW Usage Growth',
    description:
      'First Copilot initiative in Power Platform. Showcased to Satya Nadella at Ignite 2022.',
  },
  {
    metric: '+42',
    title: 'AI Builder NPS',
    description:
      'Highest NPS across Power Automate, Power Apps, and PVA. Billed revenue up 179%.',
  },
  {
    metric: '+18pts',
    title: 'Inclusive Team Score',
    description:
      'Built systematic action plan when scores dropped. Thriving rose 7 points in six months.',
  },
  {
    metric: '$8.7M',
    title: 'Revenue Features Shipped',
    description:
      'Version Comparison and UI Element Triggers for enterprise customers including Nike, Rogers, StateFarm.',
  },
  {
    metric: '125',
    title: 'Ideas from Gen-AI Workshop',
    description:
      'Workshop across Paris and Athens shaped Build 2024 keynote features including AI Recorder and self-healing.',
  },
];
