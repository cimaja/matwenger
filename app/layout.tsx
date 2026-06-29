import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { GoogleAnalytics } from '@/components/google-analytics';
import { StructuredData } from '@/components/structured-data';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://matwenger.at'),
  title: {
    default: 'Mathias Wendlinger - Principal Design Manager at Microsoft',
    template: '%s | Mathias Wendlinger',
  },
  description: 'Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages. Specializing in AI-driven experiences, enterprise design, and design-to-code workflows.',
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
    'Design Engineering',
  ],
  authors: [{ name: 'Mathias Wendlinger' }],
  creator: 'Mathias Wendlinger',
  icons: {
    icon: '/images/Applogo/logo.png',
    shortcut: '/images/Applogo/logo.png',
    apple: '/images/Applogo/logo.png',
  },
  openGraph: {
    title: 'Mathias Wendlinger - Principal Design Manager',
    description: 'Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages.',
    url: 'https://matwenger.at',
    siteName: 'Mathias Wendlinger',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://matwenger.at/images/Applogo/profil.jpeg',
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
    description: 'Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages.',
    images: ['https://matwenger.at/images/Applogo/profil.jpeg'],
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
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable,
          fraunces.variable
        )}
      >
        <GoogleAnalytics />
        <Providers>
          <Navigation />
          <div className="relative min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
