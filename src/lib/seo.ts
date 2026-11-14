import type { Metadata } from 'next';
import { siteConfig, SITE_URL } from '@/config/site';
import type { DiscordBotItem } from '@/types/bot';

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const cleanBotName = (name: string) => name.replace(/\s*!+\s*$/, '').trim();

/** Joins whole sentences until the limit so meta descriptions never cut mid-word. */
export function fitDescription(text: string, limit = 158): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let out = '';
  for (const s of sentences) {
    const next = (out + ' ' + s.trim()).trim();
    if (next.length > limit) break;
    out = next;
  }
  return out || text.slice(0, limit - 1).trimEnd() + '…';
}

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
}

export function buildMetadata({ title, description, path, image, imageAlt, absoluteTitle }: PageMeta): Metadata {
  const img = image ?? siteConfig.ogImage;
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: img, width: 1200, height: 630, alt: imageAlt ?? `${siteConfig.name} preview` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [{ url: img, alt: imageAlt ?? `${siteConfig.name} preview` }],
    },
  };
}

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: siteConfig.name,
  url: SITE_URL,
  logo: absoluteUrl('/icon-512.png'),
  sameAs: [siteConfig.githubUrl],
});

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: siteConfig.name,
  url: SITE_URL,
  description: siteConfig.description,
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#organization` },
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const botLd = (bot: DiscordBotItem) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: cleanBotName(bot.name),
  description: bot.description,
  url: absoluteUrl(`/bots/${bot.id}`),
  image: absoluteUrl(`/og/${bot.id}.png`),
  applicationCategory: 'CommunicationApplication',
  operatingSystem: 'Discord',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@id': `${SITE_URL}/#organization` },
});

export const botListLd = (bots: DiscordBotItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Xtreme Labs Discord bots',
  itemListElement: bots.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: cleanBotName(b.name),
    url: absoluteUrl(`/bots/${b.id}`),
  })),
});

/** Emits LocalBusiness data only when a real address has been configured. */
export const localBusinessLd = () => {
  const lb = siteConfig.localBusiness;
  if (!lb) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: siteConfig.name,
    url: SITE_URL,
    image: absoluteUrl(siteConfig.ogImage),
    telephone: lb.telephone,
    email: lb.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: lb.streetAddress,
      addressLocality: lb.addressLocality,
      addressRegion: lb.addressRegion,
      postalCode: lb.postalCode,
      addressCountry: lb.addressCountry,
    },
  };
};
