import { buildMetadata, botListLd, localBusinessLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { initialBotsList } from '@/config/botsData';
import HomeClient from './HomeClient';

export const metadata = buildMetadata({
  title: 'Xtreme Labs | Discord Bots for Esports, Moderation and Music',
  absoluteTitle: true,
  description:
    'Xtreme Labs builds Discord bots for esports scrims, community moderation and music: Quotient Prime, Shizuka and Sonic, plus websites for other projects.',
  path: '/',
  imageAlt: 'Xtreme Labs official Discord bot fleet',
});

export default function Page() {
  return (
    <>
      <JsonLd data={botListLd(initialBotsList)} />
      <JsonLd data={localBusinessLd()} />
      <HomeClient />
    </>
  );
}
