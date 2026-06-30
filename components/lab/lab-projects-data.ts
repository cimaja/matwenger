export interface LabProject {
  title: string;
  description: string;
  date: string;
  url: string;
  tags?: string[];
  locked?: boolean;
}

export const labProjects: LabProject[] = [
  {
    title: "Dynamics 365 and Model-Driven Apps",
    description: "A high-fidelity prototype for Dynamics 365 and Model-Driven Apps, featuring roughly a dozen feature flags to experiment with layout, agents, scrolling behaviors, navigation, and spacing density across three levels. Used to validate future updates directly with customers.",
    date: "2026",
    url: "https://cimaja.github.io/proto-D365/",
    tags: ["Prototype", "Dynamics 365", "Model-Driven Apps"],
    locked: true
  },
  {
    title: "Power Apps settings redesign",
    description: "A high-fidelity prototype for a complete redesign of the Power Apps settings experience, focused on reorganizing the information architecture to make settings more discoverable and intuitive.",
    date: "2026",
    url: "https://cimaja.github.io/proto-mda-settings/",
    tags: ["Prototype", "Power Apps"],
    locked: true
  },
  {
    title: "Claude Code team onboarding",
    description: "An interactive presentation built to onboard my design team to Claude Code, covering setup, workflows, and practical tips for integrating AI-assisted coding into their daily work.",
    date: "2026",
    url: "https://cimaja.github.io/proto-claude-onboarding/",
    tags: ["Presentation", "AI"]
  },
  {
    title: "Timezone crew",
    description: "A time zone coordination tool designed to help globally distributed teams plan meetings and collaborate more effectively. Built from firsthand experience working across multiple time zones.",
    date: "2025",
    url: "https://timezonecrew.com/",
    tags: ["Personal project"]
  },
  {
    title: "World clock",
    description: "A focused world clock experience showing the current time across key global cities, designed to support scheduling, planning, and remote collaboration.",
    date: "2025",
    url: "https://timezonecrew.com/world-clock",
    tags: ["Personal project"]
  },
  {
    title: "Loading experience",
    description: "An experimental prototype exploring WebGL-based loading animations while an AI-powered app is being generated.",
    date: "2025",
    url: "https://cimaja.github.io/page-loading/",
    tags: ["Prototype", "App Builder"]
  },
  {
    title: "Power Automate desktop actions pane",
    description: "Interactive prototype exploring a redesigned actions pane for Power Automate Desktop, with improved search, categorization, and overall usability.",
    date: "2025",
    url: "https://cimaja.github.io/proto-actions-pane/",
    tags: ["Prototype", "Power Automate Desktop"],
    locked: true
  },
  {
    title: "Figma template generator",
    description: "A Figma plugin designed to improve team consistency by generating structured starting pages and reusable design templates.",
    date: "2024",
    url: "https://www.figma.com/community/plugin/1235522643147030686",
    tags: ["Figma plugin"]
  },
];
