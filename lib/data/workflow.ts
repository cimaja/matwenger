export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  tools: string[];
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Research & Strategy',
    description:
      'Partner with enterprise customers (John Deere, Chevron, Blackrock) to validate problems and co-design solutions',
    tools: ['Customer co-design', 'Funnel analysis'],
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description:
      'Rapid prototyping with AI-powered tools. From concept to interactive prototype in hours, not weeks',
    tools: ['Figma Make', 'Claude Code'],
  },
  {
    number: '03',
    title: 'Ship to Production',
    description:
      'Author PRs directly into engineering repos. Fix craftsmanship bugs. Publish Storybook components. Edit content strings',
    tools: ['GitHub', 'XAML', 'React'],
  },
  {
    number: '04',
    title: 'Measure & Iterate',
    description:
      'Hypothesis-driven experimentation. Three A/B tests graduated to 100% of users. Data shapes every design decision',
    tools: ['A/B testing', 'NPS'],
  },
];

export const workflowDescription =
  "I don't just manage designers. I build systems that let teams, AI agents, and enterprise customers collaborate at scale, from the first customer conversation to the production PR.";
