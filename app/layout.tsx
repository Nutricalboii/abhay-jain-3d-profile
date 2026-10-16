import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://abhay-jain-3d.vercel.app'),
  title: 'Abhay Jain — Interactive Executive Profile',
  description: 'Executive profile of Abhay Jain, a business and strategy leader working across power-management semiconductors, product direction, and execution.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Abhay Jain — Interactive Executive Profile',
    description: 'Business and strategy leader working across power-management semiconductors, product direction, and execution.',
    url: 'https://abhay-jain-3d.vercel.app',
    siteName: 'Abhay Jain',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhay Jain — Interactive Executive Profile',
    description: 'Business and strategy leader working across power-management semiconductors, product direction, and execution.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
