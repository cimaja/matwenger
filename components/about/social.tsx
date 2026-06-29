'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Linkedin, FileDown } from 'lucide-react';

export function AboutSocial() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/mathias-wendlinger/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.1)] text-[#888] hover:text-white hover:border-accent-purple transition-all duration-300 text-sm"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1VbdIe1Xpcf1KNQpLcSBKb7JktTu9gqiV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.1)] text-[#888] hover:text-white hover:border-accent-purple transition-all duration-300 text-sm"
          >
            <FileDown className="h-4 w-4" />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
