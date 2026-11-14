import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import CommandsClient from './CommandsClient';

export const metadata = buildMetadata({
  title: 'Discord Bot Commands',
  description:
    'Browse every slash command for Quotient Prime, Shizuka and Sonic with syntax, required permissions and a short explanation of what each one does.',
  path: '/commands',
  imageAlt: 'Xtreme Labs Discord bot slash commands',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Commands', path: '/commands' }])} />
      <CommandsClient />
    </>
  );
}
