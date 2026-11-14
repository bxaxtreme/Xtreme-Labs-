import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import GuideClient from './GuideClient';

export const metadata = buildMetadata({
  title: 'Setup and Permissions Guide',
  description:
    'Learn how to invite Quotient Prime, Shizuka and Sonic to your Discord server and set up the right roles and permissions.',
  path: '/guide',
  imageAlt: 'Xtreme Labs Discord bot setup guide',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Setup Guide', path: '/guide' }])} />
      <GuideClient />
    </>
  );
}
