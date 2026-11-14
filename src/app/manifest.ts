import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Xtreme Labs',
    short_name: 'Xtreme Labs',
    description: 'Discord bots for esports, moderation and music.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0E1020',
    theme_color: '#5865F2',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
