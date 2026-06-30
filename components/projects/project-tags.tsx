import { cn } from '@/lib/utils';

interface ProjectTagsProps {
  tags: string[];
  className?: string;
}

const tagCategories: Record<string, { bg: string; border: string; text: string }> = {
  // AI/ML — Green
  'AI': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#10b981' },
  'No-code': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#10b981' },
  'Multi-modal': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#10b981' },
  'Vision': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#10b981' },

  // Platform — Purple
  'RPA': { bg: 'rgba(147,51,234,0.1)', border: 'rgba(147,51,234,0.2)', text: '#c084fc' },
  'Workflow': { bg: 'rgba(147,51,234,0.1)', border: 'rgba(147,51,234,0.2)', text: '#c084fc' },
  'Cross-platform': { bg: 'rgba(147,51,234,0.1)', border: 'rgba(147,51,234,0.2)', text: '#c084fc' },
  'Edge': { bg: 'rgba(147,51,234,0.1)', border: 'rgba(147,51,234,0.2)', text: '#c084fc' },

  // Domain — Amber
  'Music': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },
  'Reading': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },
  'Security': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },
  'Support': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },
  'Xbox': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },

  // Technique — Cyan
  'Web player': { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)', text: '#22d3ee' },

  // Lab — Prototype (Blue)
  'Prototype': { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  'Power Automate Desktop': { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  'App Builder': { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  'Dynamics 365': { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  'Model-Driven Apps': { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },

  // Lab — Personal (Amber)
  'Personal project': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },
  'Figma plugin': { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#f59e0b' },
};

const defaultStyle = { bg: 'rgba(147,51,234,0.08)', border: 'rgba(147,51,234,0.15)', text: '#c084fc' };

function getTagStyle(tag: string) {
  return tagCategories[tag] || defaultStyle;
}

export function ProjectTags({ tags, className }: ProjectTagsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => {
        const style = getTagStyle(tag);
        return (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: style.bg,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: style.border,
              color: style.text,
            }}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
