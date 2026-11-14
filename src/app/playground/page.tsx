import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import PlaygroundClient from './PlaygroundClient';

export const metadata = buildMetadata({
  title: 'Live Bot Playground',
  description:
    'Try commands from Quotient Prime, Shizuka and Sonic in a simulated Discord server before you invite them to your own.',
  path: '/playground',
  imageAlt: 'Xtreme Labs Discord bot playground',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Playground', path: '/playground' }])} />
      <PlaygroundClient />
    </>
  );
}
