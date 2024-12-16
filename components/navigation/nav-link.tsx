'use client';

import Link from 'next/link';
import { AnimatedIcon } from '@/components/animated-icon';

interface NavLinkProps {
  href: string;
  label: string;
  icon: string;
  isActive: boolean;
  color: string;
  activeColor: string;
}

export function NavLink({ href, label, icon, isActive, color, activeColor }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
        isActive ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      <AnimatedIcon
        src={icon}
        trigger="morph"
        colors={{
          primary: isActive ? activeColor : color,
          secondary: isActive ? activeColor : color,
        }}
        size={20}
      />
      <span>{label}</span>
    </Link>
  );
}