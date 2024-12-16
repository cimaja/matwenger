'use client';

import { TimelineItem } from './timeline-item';
import { TimelineProps } from './types';

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative before:absolute before:inset-0 before:ml-4 sm:before:ml-[2.75rem] before:-z-10">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          company={item.company}
          description={item.description}
        />
      ))}
    </div>
  );
}