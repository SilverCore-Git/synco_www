import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Synco - Solutions Technologiques Innovantes',
  description: 'Synco fournit des solutions technologiques de pointe pour transformer votre business. Conseil, développement, intégration et support.',
  keywords: ['Synco', 'technologie', 'développement', 'intégration', 'conseil', 'solutions', 'innovation'],
  authors: [{ name: 'Synco' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://synco.com',
    siteName: 'Synco',
    title: 'Synco - Solutions Technologiques Innovantes',
    description: 'Synco fournit des solutions technologiques de pointe pour transformer votre business.',
    images: [
      {
        url: '/synco_icons/banner_h500_synco.png',
        width: 500,
        height: 300,
        alt: 'Synco Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synco - Solutions Technologiques Innovantes',
    description: 'Synco fournit des solutions technologiques de pointe pour transformer votre business.',
    images: ['/synco_icons/banner_h500_synco.png'],
  },
  icons: {
    icon: '/synco_icons/favicon_synco.ico',
    shortcut: '/synco_icons/favicon_100x100_synco.png',
    apple: '/synco_icons/favicon_1000x1000_synco.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
