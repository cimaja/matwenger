export interface LabProject {
  title: string;
  description: string;
  date: string;
  url: string;
  tags?: string[];
}

export const labProjects: LabProject[] = [
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
    title: "Action pane",
    description: "Interactive prototype exploring a redesigned actions pane for Power Automate Desktop, with improved search, categorization, and overall usability.",
    date: "2025",
    url: "https://cimaja.github.io/actions-pane-V4/",
    tags: ["Prototype", "Power Automate Desktop"]
  },
  {
    title: "Template generator",
    description: "A Figma plugin designed to improve team consistency by generating structured starting pages and reusable design templates.",
    date: "2024",
    url: "https://www.figma.com/community/plugin/1235522643147030686",
    tags: ["Figma plugin"]
  },
];
