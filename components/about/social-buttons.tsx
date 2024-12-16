'use client';

import { motion } from 'framer-motion';
import { Linkedin, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SocialButtons() {
  return (
    <div className="flex gap-4 mb-12">
      <Button 
        variant="outline" 
        size="lg" 
        asChild
        className="group relative overflow-hidden border-primary/20 hover:border-primary/30 transition-colors"
      >
        <a
          href="https://www.linkedin.com/in/mathias-wendlinger/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
          <motion.div
            className="absolute inset-0 bg-primary/5"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        asChild
        className="group relative overflow-hidden border-primary/20 hover:border-primary/30 transition-colors"
      >
        <a
          href="https://drive.google.com/file/d/1VbdIe1Xpcf1KNQpLcSBKb7JktTu9gqiV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FileDown className="h-4 w-4" />
          <span>Resume</span>
          <motion.div
            className="absolute inset-0 bg-primary/5"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </Button>
    </div>
  );
}