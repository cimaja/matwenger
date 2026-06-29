export interface ExperienceEntry {
  dateRange: string;
  role: string;
  company: string;
  bullets: string[];
  badges: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    dateRange: '2025 – Present',
    role: 'Principal Design Manager',
    company: 'Microsoft - Power Platform',
    bullets: [
      'Build and lead a distributed design team of 12 across India, Greece, and the US, owning the end-to-end experience for five products (Power Apps, Power Automate, Power Pages, Process Mining, Mobile) against a deliberately lean headcount',
      'Grew and strengthened the team, recruited and hired 1 designer, onboarded 5, and drove 3 promotions, developing senior talent across five time zones',
      "Pioneered the org's design-to-code practice, moving designers to daily production use of AI tooling (Figma Make, GitHub Copilot, Claude Code CLI). Designers now ship craft and content improvements as PRs directly in production repos",
      'Led design on a built-in AI assistant for Power Apps that lets people ask plain-language questions about their app\'s data and get instant answers',
      'Established a rapid A/B experimentation practice that grounds design decisions in funnel data, shifting the team from opinion-led to evidence-led',
    ],
    badges: [
      '50M+ monthly active users',
      '81% increase in apps published',
      '30% design efficiency gain',
      'Inclusive Team score +18 points in 6 months',
    ],
  },
  {
    dateRange: '2018 – 2025',
    role: 'Senior Design Manager',
    company: 'Microsoft - Power Automate Desktop | AI Builder',
    bullets: [
      'Team of 4 across Paris and Greece supporting Power Automate Desktop, AI capabilities in Power Automate Web, and AI Builder',
      'Designed natural language to workflow automation, the first Copilot initiative in Power Platform, showcased to Satya Nadella at Ignite 2022. Shipped AI-powered recording for desktop automation, featured at Build 2024 and called "magic" by the CVP',
      'Designed AI Builder from scratch with a small founding team, a no-code platform that lets anyone bring AI into their apps and workflows. Defined the end-to-end experience across object detection, document processing, OCR, and prediction, from zero to general availability',
    ],
    badges: [
      "Contributed to Microsoft's Leader position in Gartner IDP",
      '+42 NPS (highest in Power Platform)',
    ],
  },
  {
    dateRange: '2015 – 2018',
    role: 'Senior Lead Designer',
    company: 'Microsoft - Groove Music | Books in Edge',
    bullets: [
      'Team of 5 designers in Paris. Groove Music (Windows, Xbox, Web, iOS, Android) and Books reading experience in Microsoft Edge',
      'Shipped the EPUB and PDF reading experience in Microsoft Edge with the Windows 10 Fall Creators Update, including Fluent Design revamp, annotations, and cross-platform support (desktop, iOS, Android, Andromeda foldable device)',
      'Designed Groove Music Taste Profile and Your Groove personalization, evolving the Xbox Music web experience (Boombox) into a cross-platform music service',
    ],
    badges: [
      'Reading experience evolved into the default Edge PDF reader on 1B+ Windows devices',
    ],
  },
  {
    dateRange: '2011 – 2015',
    role: 'Lead Designer',
    company: 'Microsoft - Xbox Music | OneStore',
    bullets: [
      'Team of 2 designers in Paris. Xbox Music web (Boombox), Music OneStore, and Video OneStore',
      'Shipped the full Video OneStore (Movie/TV hub, detail pages, library, player). Design recognized as "on par with a professional agency" by stakeholders across Redmond',
      'Designed and shipped Boombox (July 2013), the Xbox Music web player serving as the sole designer in Paris with daily syncs to Redmond',
    ],
    badges: ['Design blueprint adopted by Windows 8 Music'],
  },
  {
    dateRange: '2008 – 2011',
    role: 'Product Designer',
    company: 'Microsoft - Xbox Support | Mediaroom Mobile',
    bullets: [
      'Led the Xbox Support website redesign in collaboration with Frog Design, redesigning the console repair experience and Contact Us flows',
      'Designed and dev\'d a Windows Phone 7 companion app for Microsoft Mediaroom, the IPTV set-top box platform powering TV experiences for telecom providers worldwide. Self-taught Silverlight and XAML to ship production UI',
    ],
    badges: ['14% reduction in support tickets'],
  },
  {
    dateRange: '2007 – 2008',
    role: 'User Experience Designer',
    company: 'Musiwave, Paris',
    bullets: [
      'Designed music portal websites on desktop and mobile for European phone network providers including Orange, SFR, Vodafone, Verizon, and T-Mobile',
    ],
    badges: [],
  },
  {
    dateRange: '2006 – 2007',
    role: '3D Motion Designer',
    company: 'TF1 · La booteek, Paris',
    bullets: [
      'Created opening credits for several TF1 programs and 3D animated infographics for the news',
      'Documentary for Arte "Faut il avoir peur de Google?" — motion graphics, modeling, setup, skinning',
    ],
    badges: [],
  },
];
