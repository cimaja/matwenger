'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
}

export function AnimatedCard({ children }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="p-8 backdrop-blur-sm bg-card/95 shadow-lg">
        {children}
      </Card>
    </motion.div>
  );
}
