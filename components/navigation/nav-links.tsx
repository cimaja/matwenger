'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/lab', label: 'Lab' },
  { href: '/about', label: 'About' },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'transition-colors relative',
            'hover:text-pink-500/90 hover:after:scale-x-100',
            'after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:origin-left',
            'after:scale-x-0 after:bg-pink-500 after:transition-transform after:duration-200',
            pathname === href 
              ? 'text-foreground after:scale-x-100' 
              : 'text-foreground/70'
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );
}