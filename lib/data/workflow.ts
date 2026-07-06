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
      'Start with customers, not assumptions. Validate problems directly with the people who face them and co-design solutions around their real workflows',
    tools: ['Customer co-design', 'User interviews', 'Journey mapping'],
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description:
      'Rapid prototyping with AI-powered tools. From concept to interactive prototype in hours, not weeks',
    tools: ['Figma Make', 'Lovable', 'Claude Code', 'GitHub Copilot', 'Design systems'],
  },
  {
    number: '03',
    title: 'Ship to Production',
    description:
      'Design does not stop at handoff. My teams author PRs in the same repos as engineers, shipping polish, components, and copy directly to production',
    tools: ['GitHub', 'Cursor', 'VS Code', 'React', 'Storybook'],
  },
  {
    number: '04',
    title: 'Measure & Iterate',
    description:
      'Every design decision is a hypothesis. Ship experiments, measure real behavior, and let the evidence decide what stays',
    tools: ['A/B testing', 'Funnel analysis', 'Product telemetry', 'NPS'],
  },
];

export const workflowDescription =
  "I don't just manage designers. I build systems that let teams, AI agents, and enterprise customers collaborate at scale, from the first customer conversation to the production PR.";
