'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  icon: string;
  isActive: boolean;
  color: string;
  activeColor: string;
}

export function NavLink({ href, label, isActive, color, activeColor }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
        isActive ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      <ArrowUpRight
        aria-hidden="true"
        style={{ color: isActive ? activeColor : color }}
        size={20}
      />
      <span>{label}</span>
    </Link>
  );
}
