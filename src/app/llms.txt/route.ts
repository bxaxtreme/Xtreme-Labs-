import { SITE_URL, siteConfig } from '@/config/site';
import { initialBotsList, allFleetCommands } from '@/config/botsData';
import { webProjects } from '@/config/webProjects';
import { cleanBotName } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const bots = initialBotsList
    .map((b) => `- [${cleanBotName(b.name)}](${SITE_URL}/bots/${b.id}): ${b.tagline}. ${b.stats.servers} servers, ${b.stats.users} users.`)
    .join('\n');
  const projects = webProjects
    .map((p) => `- [${p.title}](${p.liveUrl}): ${p.category}.`)
    .join('\n');

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} builds and runs Discord bots and a few small websites. The site lists ${allFleetCommands.length} documented slash commands across three bots.

## Discord bots

${bots}

## Pages

- [Home](${SITE_URL}/): Overview of all bots and web projects.
- [Slash commands](${SITE_URL}/commands): Every documented command with syntax and permissions.
- [Setup guide](${SITE_URL}/guide): How to invite a bot and set roles and permissions.
- [Playground](${SITE_URL}/playground): Simulated Discord server to try commands.

## Web projects

${projects}

## Links

- [GitHub](${siteConfig.githubUrl})
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
