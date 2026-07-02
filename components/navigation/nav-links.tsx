'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/lab', label: 'Lab' },
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
            'inline-flex items-center h-14 transition-colors duration-200',
            pathname === href
              ? 'text-white'
              : 'text-[#888] hover:text-white'
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
