import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';
import { initialBotsList } from '@/config/botsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: '/', priority: 1 },
    { path: '/commands', priority: 0.8 },
    { path: '/guide', priority: 0.7 },
    { path: '/playground', priority: 0.6 },
  ];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p.path === '/' ? '' : p.path}`, lastModified: now, changeFrequency: 'monthly' as const, priority: p.priority })),
    ...initialBotsList.map((b) => ({ url: `${SITE_URL}/bots/${b.id}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 })),
  ];
}
