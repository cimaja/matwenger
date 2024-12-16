'use client';

import { motion } from 'framer-motion';

interface AboutHeaderProps {
  title: string;
  description: string;
}

export function AboutHeader({ title, description }: AboutHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}