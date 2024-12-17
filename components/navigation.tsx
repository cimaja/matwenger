'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavLinks } from './navigation/nav-links';
import { ThemeToggle } from './theme-toggle';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 font-bold"
        >
          <Image
            src="/Shared/Logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <span>Mathias Wendlinger</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLinks />
          </nav>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}