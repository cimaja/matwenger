'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Linkedin, FileDown } from 'lucide-react';

export function AboutSocial() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
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
        </motion.div>
      </div>
    </Section>
  );
}