'use client';

import { motion } from 'framer-motion';
import { TimelineItemProps } from './types';

export function TimelineItem({ date, title, company, description }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      {/* Vertical line that connects timeline items */}
      <div className="absolute left-0 sm:left-10 top-0 h-full w-px bg-emerald-200 dark:bg-emerald-800 group-last:h-1/2" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-700 ring-4 ring-white dark:ring-slate-900" />
      
      {/* Content card */}
      <div className="relative bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">{title}</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-medium">{company}</div>
          </div>
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            {date}
          </div>
        </div>
        <div className="text-slate-700 dark:text-slate-300">{description}</div>
      </div>
    </motion.div>
  );
}