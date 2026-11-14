import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { initialBotsList } from '@/config/botsData';
import { buildMetadata, breadcrumbLd, botLd, cleanBotName, fitDescription } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import BotDetailClient from './BotDetailClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return initialBotsList.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const bot = initialBotsList.find((b) => b.id === id);
  if (!bot) return {};
  const name = cleanBotName(bot.name);
  return buildMetadata({
    title: `${name} Discord Bot`,
    description: fitDescription(`${bot.tagline}. ${bot.description}`),
    path: `/bots/${bot.id}`,
    image: `/og/${bot.id}.png`,
    imageAlt: `${name} Discord bot logo`,
  });
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bot = initialBotsList.find((b) => b.id === id);
  if (!bot) notFound();
  const name = cleanBotName(bot.name);
  return (
    <>
      <JsonLd data={botLd(bot)} />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Bots', path: '/#bots' },
          { name, path: `/bots/${bot.id}` },
        ])}
      />
      <BotDetailClient botId={bot.id} />
    </>
  );
}
