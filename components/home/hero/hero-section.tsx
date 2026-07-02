'use client';

import { motion } from 'framer-motion';
import { heroData } from '@/lib/data/hero';
import { Terminal } from './terminal';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-56px)] grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Design side */}
      <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-[60px] py-20 lg:py-0 overflow-hidden">
        {/* Radial gradient decoration */}
        <div
          className="absolute top-[20%] left-[-20%] w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(147,51,234,0.06) 0%, transparent 70%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
        >
          <h1 className="text-[clamp(44px,5vw,60px)] font-bold leading-[1.08] text-white mb-6 whitespace-pre-line">
            {heroData.name}
          </h1>
          <p className="text-[17px] text-[#888] max-w-[460px] leading-[1.7] mb-10">
            {heroData.subtitle}
          </p>
          <div className="flex gap-8">
            {heroData.metrics.map((metric) => (
              <div key={metric.label} className="text-[12px] uppercase tracking-[0.08em] text-[#8A8A8A]">
                <strong className="block font-serif text-[28px] text-white font-semibold mb-0.5 tracking-tight">
                  {metric.value}
                </strong>
                <span className="text-accent-purple">{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <a
              href="/Mathias-Wendlinger-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-6 rounded-full border border-accent-purple/40 bg-accent-purple/10 text-sm text-white hover:bg-accent-purple/20 transition-colors duration-300"
            >
              View resume
            </a>
            <a
              href="https://www.linkedin.com/in/mathias-wendlinger/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-2 text-sm text-[#A3A3A3] hover:text-white transition-colors duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right: Code side */}
      <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-[60px] py-20 lg:py-0 bg-[#111116] border-t lg:border-t-0 lg:border-l border-[rgba(255,255,255,0.06)] overflow-hidden">
        {/* Radial gradient decoration */}
        <div
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10">
          <Terminal />
        </div>
      </div>

      {/* Center divider circle */}
      <div aria-hidden="true" className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[72px] h-[72px] rounded-full bg-[#0c0c0f] border border-[rgba(255,255,255,0.1)] items-center justify-center font-mono text-[11px] text-[#8A8A8A] pointer-events-none select-none">
        &lt;/&gt;
      </div>
    </section>
  );
}
