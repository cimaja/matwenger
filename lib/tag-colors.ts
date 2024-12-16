export const tagColors: Record<string, { bg: string; text: string }> = {
  'AI/ML': { bg: 'bg-purple-500/10', text: 'text-purple-700 dark:text-purple-300' },
  'Enterprise': { bg: 'bg-blue-500/10', text: 'text-blue-700 dark:text-blue-300' },
  'Power Platform': { bg: 'bg-yellow-500/10', text: 'text-yellow-700 dark:text-yellow-300' },
  'UX Design': { bg: 'bg-pink-500/10', text: 'text-pink-700 dark:text-pink-300' },
  'Windows': { bg: 'bg-cyan-500/10', text: 'text-cyan-700 dark:text-cyan-300' },
  'Cross-platform': { bg: 'bg-indigo-500/10', text: 'text-indigo-700 dark:text-indigo-300' },
  'Analytics': { bg: 'bg-emerald-500/10', text: 'text-emerald-700 dark:text-emerald-300' },
  'Dashboard': { bg: 'bg-teal-500/10', text: 'text-teal-700 dark:text-teal-300' },
  'Music': { bg: 'bg-rose-500/10', text: 'text-rose-700 dark:text-rose-300' },
  'ML': { bg: 'bg-violet-500/10', text: 'text-violet-700 dark:text-violet-300' },
  'Personalization': { bg: 'bg-orange-500/10', text: 'text-orange-700 dark:text-orange-300' },
  'Security': { bg: 'bg-red-500/10', text: 'text-red-700 dark:text-red-300' },
  'E-commerce': { bg: 'bg-green-500/10', text: 'text-green-700 dark:text-green-300' },
  'Xbox': { bg: 'bg-lime-500/10', text: 'text-lime-700 dark:text-lime-300' },
  'Entertainment': { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-700 dark:text-fuchsia-300' },
  'Support': { bg: 'bg-sky-500/10', text: 'text-sky-700 dark:text-sky-300' },
  'Service Design': { bg: 'bg-amber-500/10', text: 'text-amber-700 dark:text-amber-300' },
  'Discovery': { bg: 'bg-purple-500/10', text: 'text-purple-700 dark:text-purple-300' }
};

export function getTagColors(tag: string) {
  return tagColors[tag] || { bg: 'bg-gray-500/10', text: 'text-gray-700 dark:text-gray-300' };
}