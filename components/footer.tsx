'use client';

import { usePathname } from 'next/navigation';
import { SiteFooter } from './design-system/site-footer';

export function Footer() {
  const pathname = usePathname();
  return pathname === '/' || pathname === '/v1' ? null : <SiteFooter />;
}
