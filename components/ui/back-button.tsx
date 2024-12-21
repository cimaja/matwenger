'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from './button';

interface BackButtonProps {
  href: string;
  label?: string;
}

export function BackButton({ href, label = 'Back' }: BackButtonProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      className="gap-2 pl-2 absolute top-6 left-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
      asChild
    >
      <Link href={href}>
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
}
