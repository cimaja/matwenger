import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
};

export { default } from '../page';
