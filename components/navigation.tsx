'use client';

import Link from 'next/link';
import { NavLinks } from './navigation/nav-links';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.04)] bg-[rgba(12,12,15,0.8)] backdrop-blur-[20px]">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="inline-flex items-center h-14 text-sm font-medium tracking-[0.05em]">
          Mathias Wendlinger
        </Link>
        <div className="flex items-center space-x-8">
          <nav className="flex items-center space-x-8 text-[13px]">
            <NavLinks />
            <Link
              href="/Mathias-Wendlinger-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-14 text-accent-purple hover:text-white transition-colors duration-200"
            >
              Resume
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
}
