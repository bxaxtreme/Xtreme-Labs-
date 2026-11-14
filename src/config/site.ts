// Single source of truth for site-wide settings.
// Set NEXT_PUBLIC_SITE_URL in your hosting dashboard once the custom domain is connected.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : 'http://localhost:3000')
).replace(/\/+$/, '');

export interface LocalBusinessInfo {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  telephone?: string;
  email?: string;
}

export const siteConfig = {
  name: 'Xtreme Labs',
  description:
    'Xtreme Labs builds Discord bots for esports scrims, community moderation and music: Quotient Prime, Shizuka and Sonic, plus websites for other projects.',
  url: SITE_URL,
  ogImage: '/og/home.png',
  githubUrl: 'https://github.com/bxaxtreme',
  // Add a real invite link via NEXT_PUBLIC_SUPPORT_SERVER_URL. The buttons stay hidden until it is set.
  supportServerUrl: process.env.NEXT_PUBLIC_SUPPORT_SERVER_URL || '',
  // Fill with a real address to publish LocalBusiness structured data. Left empty on purpose.
  localBusiness: null as LocalBusinessInfo | null,
};
