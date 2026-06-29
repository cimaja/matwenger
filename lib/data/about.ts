export const aboutNarrative = [
  {
    text: 'Born in the south of France, I grew up across Africa and Asia. Moving between cultures and continents from a young age taught me that the best solutions come from understanding different perspectives, and that great design is about making complex things feel simple for everyone.',
  },
  {
    text: 'I started my career in Paris as a 3D motion designer at TF1, creating opening credits and animated infographics for live television. From there I joined Musiwave, a startup building music platforms for European telecom providers. When Microsoft acquired Musiwave in 2008, I found myself inside one of the largest technology companies in the world, with everything still to learn.',
  },
  {
    text: 'Over the next decade, I designed experiences that reached millions of users. Xbox Music, Groove Music, the Books reading experience in Microsoft Edge. I started as the sole designer in Paris, syncing daily with teams in Redmond. As the scope grew, I brought in design agencies and vendors, growing the team to five and learning to lead people before I had the title. That experience of leading without formal authority shaped everything about how I manage today.',
  },
  {
    text: 'In 2018, I became a design manager and helped build AI Builder from scratch with a small founding team. This was before LLMs made AI mainstream. At the time, AI was reserved for pro-developers and data scientists. We were putting AI models into the hands of millions of business users, letting them add object detection, document processing, OCR, and prediction to their apps without writing a single line of code. I designed the entire experience from zero to general availability. It remains one of the projects closest to my heart because we made something that felt impossible feel simple.',
  },
  {
    text: 'Today I lead a team of 12 designers across India, Greece, and the United States, supporting five products inside an engineering org of 300+ engineers and ~30 PMs. With a small, stretched team against broad scope, becoming efficient was the first priority. From there, my focus comes down to three things: growing revenue, increasing AI usage, and building a thriving team.',
  },
  {
    text: 'On revenue, I introduced a rapid A/B experimentation practice that shifted the team from opinion-led to evidence-led design. A set of experiments on the Power Apps maker funnel delivered an 81% increase in users successfully publishing apps.',
  },
  {
    text: 'On AI usage, one of the achievements I\'m proudest of is bringing Power Apps\' data into Microsoft 365 Copilot. Rather than ship AI to chase an adoption metric, we started from value: what would genuinely help people? The answer was giving Copilot the ability to understand and answer questions about any Power App\'s data, so the information people build into their apps becomes instantly useful, wherever they work.',
  },
  {
    text: 'On the team, I invest heavily in culture, growth, and efficiency. After forming a new team across three continents, I built the foundations that raised Thriving by 7 points and Inclusive Team by 18 points within six months.',
  },
  {
    text: 'I also built an upskilling program that moved my entire team from AI awareness to daily production use. Thanks to that, designers now prototype with AI tools, merge pull requests directly into production repos, and ship craft improvements that would otherwise never get prioritized.',
  },
  {
    text: 'I believe the future of design leadership is participatory. Not just setting direction, but being in the code, in the data, in the customer conversation. That is how I lead, and that is the kind of team I build.',
  },
  {
    text: 'Outside of work, I live in the south of France with my wife and daughter. I spend my free time wingfoiling when the wind picks up, playing basketball every Friday evening, cooking and exploring food, and traveling whenever I can. I speak French, English, and Indonesian.',
  },
];

export const personalityTraits = [
  { left: 'Shy', right: 'Outgoing', value: 35 },
  { left: 'Clean', right: 'Messy', value: 30 },
  { left: 'Artsy', right: 'Sporty', value: 70 },
  { left: 'Wake up early', right: 'Stay up late', value: 75 },
  { left: 'Creative', right: 'Analytical', value: 65 },
];

export interface JourneyMilestone {
  year: string;
  title: string;
  location: string;
  description: string;
  highlight?: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: '2006',
    title: '3D Motion Designer',
    location: 'Paris',
    description: 'Started at TF1 creating opening credits and animated infographics for live television',
  },
  {
    year: '2007',
    title: 'UX Designer at Musiwave',
    location: 'Paris',
    description: 'Designed music platforms for European telecom providers. The startup was later acquired by Microsoft',
    highlight: 'Acquired by Microsoft',
  },
  {
    year: '2008',
    title: 'Product Designer at Microsoft',
    location: 'Paris',
    description: 'Joined Microsoft through the Musiwave acquisition. Designed the Xbox Support experience and a Windows Phone 7 companion app, self-teaching Silverlight and XAML to ship production UI',
    highlight: '14% reduction in support tickets',
  },
  {
    year: '2011',
    title: 'Lead Designer',
    location: 'Paris',
    description: 'Sole designer on Xbox Music (Boombox), shipping the web player with daily syncs to Redmond. Later grew the team to 3-5 by bringing in design agency partners and vendors for the Video OneStore and reading experience, learning to lead people before having the title',
    highlight: 'Design blueprint adopted by Windows 8 Music',
  },
  {
    year: '2015',
    title: 'Senior Lead Designer',
    location: 'Paris',
    description: 'Led a team of 5 designers and vendors. Sole designer on the Books reading experience in Microsoft Edge and on Groove Music across Windows, Xbox, iOS, and Android. This period of leading without formal authority shaped how I later managed as a people manager',
    highlight: 'Edge PDF reader now on 1B+ devices',
  },
  {
    year: '2018',
    title: 'Senior Design Manager',
    location: 'Paris → Athens → Seattle',
    description: 'Built a design team across three cities. Designed AI Builder from scratch, putting AI into the hands of millions of business users before LLMs made AI mainstream. Later designed the first Copilot initiative in Power Platform, showcased to Satya Nadella at Ignite 2022',
    highlight: '+42 NPS, Gartner Leader in IDP',
  },
  {
    year: '2025',
    title: 'Principal Design Manager',
    location: 'France → India, Greece, US',
    description: 'Leading design for Power Platform across 5 products and 50M+ users. Pioneered a design-to-code practice where designers ship PRs to production repos',
    highlight: '81% increase in apps published',
  },
];
