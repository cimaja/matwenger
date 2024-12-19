import type { Metadata } from 'next';
import { Inter, Lora, Outfit } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navigation } from '@/components/navigation';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: {
    default: 'Mathias Wendlinger',
    template: '%s | Mathias Wendlinger',
  },
  description: 'Principal Design Manager specializing in AI-driven experiences, enterprise solutions, and innovative digital products at Microsoft',
  openGraph: {
    title: 'Mathias Wendlinger',
    description: 'Principal Design Manager specializing in AI-driven experiences, enterprise solutions, and innovative digital products at Microsoft',
    url: 'https://matwenger.at',
    siteName: 'Mathias Wendlinger',
    locale: 'en_US',
    type: 'website',
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
    title: 'Mathias Wendlinger',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/Shared/Logo.png',
    icon: '/Shared/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          lora.variable,
          outfit.variable
        )}
      >
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