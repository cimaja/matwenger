export const heroData = {
  name: 'Mathias\nWendlinger',
  subtitle:
    '19 years building AI-powered experiences, growing globally distributed design teams, and driving measurable business outcomes for products serving 50 million users.',
  metrics: [
    { value: '50M', label: 'monthly active users' },
    { value: '12', label: 'designers led' },
    { value: '8', label: 'years managing teams' },
  ],
  terminalLines: [
    { type: 'prompt' as const, text: 'git log --oneline career' },
    { type: 'blank' as const },
    { type: 'year' as const, year: '2025', text: 'Principal Design Manager' },
    { type: 'indent' as const, text: 'Designers ship PRs to production repos' },
    { type: 'indent' as const, text: 'Built-in AI assistant for Power Apps' },
    { type: 'success' as const, text: '+81% app publishing | 30% efficiency gain' },
    { type: 'blank' as const },
    { type: 'year' as const, year: '2022', text: 'Natural language to workflow automation' },
    { type: 'indent' as const, text: 'First Copilot in Power Platform' },
    { type: 'success' as const, text: 'Showcased to Satya Nadella at Ignite' },
    { type: 'blank' as const },
    { type: 'year' as const, year: '2018', text: 'AI Builder: from zero to GA' },
    { type: 'indent' as const, text: 'No-code AI for every maker' },
    { type: 'success' as const, text: '+42 NPS | Gartner Leader in IDP' },
    { type: 'blank' as const },
    { type: 'prompt' as const, text: 'git shortlog -s --since="8 months"' },
    { type: 'final' as const, text: '✓ 280 commits across design and engineering repos' },
  ],
};
