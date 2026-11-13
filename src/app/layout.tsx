import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#5865F2',
};

export const metadata: Metadata = {
  title: 'Xtreme Labs • The Ultimate Discord Bot Suite',
  description: 'Xtreme Labs Discord Bot Suite. Direct 1-click invite links for Quotient Prime (Esports/Scrims), Shizuka !! (AutoMod/Leveling), and Sonic (320kbps Lossless Audio).',
  openGraph: {
    title: 'Xtreme Labs • Official Discord Bot Fleet',
    description: 'Empower your Discord server with verified bots for esports tournaments, community auto-moderation, and lossless music streaming.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
        width: 600,
        height: 400,
        alt: 'Xtreme Labs'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtreme Labs • Official Discord Bot Fleet',
    description: 'Empower your Discord server with verified bots for esports tournaments, community auto-moderation, and lossless music streaming.'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body>
        <div className="ambient-glow ambient-glow-1" />
        <div className="ambient-glow ambient-glow-2" />
        <div className="ambient-glow ambient-glow-3" />
        {children}
      </body>
    </html>
  );
}
