import type { Metadata } from 'next';
import { Inter, Lora, Outfit } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navigation } from '@/components/navigation';
import { GoogleAnalytics } from '@/components/google-analytics';
import { StructuredData } from '@/components/structured-data';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://matwenger.at'),
  title: {
    default: 'Mathias Wendlinger - Principal Design Manager at Microsoft',
    template: '%s | Mathias Wendlinger',
  },
  description: 'Principal Design Manager at Microsoft with 18+ years of experience in AI-driven design, enterprise solutions, and innovative digital products. Specializing in user experience, design systems, and product innovation.',
  keywords: [
    'Mathias Wendlinger',
    'UX Design',
    'Product Design',
    'AI Design',
    'Microsoft',
    'Design Manager',
    'Enterprise Design',
    'Design Systems',
    'User Experience',
  ],
  authors: [{ name: 'Mathias Wendlinger' }],
  creator: 'Mathias Wendlinger',
  openGraph: {
    title: 'Mathias Wendlinger - Principal Design Manager',
    description: 'Principal Design Manager at Microsoft specializing in AI-driven experiences, enterprise solutions, and innovative digital products.',
    url: 'https://matwenger.at',
    siteName: 'Mathias Wendlinger',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://matwenger.at/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mathias Wendlinger - Principal Design Manager at Microsoft',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mathias Wendlinger - Principal Design Manager',
    description: 'Principal Design Manager at Microsoft specializing in AI-driven experiences and enterprise solutions.',
    images: ['https://matwenger.at/og-image.jpg'],
    creator: '@matwenger',
  },
  alternates: {
    canonical: 'https://matwenger.at',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          lora.variable,
          outfit.variable
        )}
      >
        <GoogleAnalytics />
        <Providers>
          <Navigation />
          <div className="relative min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}