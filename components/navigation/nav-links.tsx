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
            'transition-colors hover:text-foreground/80',
            pathname === href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );
}