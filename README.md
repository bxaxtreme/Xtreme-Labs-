# Xtreme Labs

Official website for the Xtreme Labs Discord bots (Quotient Prime, Shizuka and Sonic) and web projects.

## Bots

| Bot | Focus | Invite |
| :--- | :--- | :--- |
| Quotient Prime | Esports scrims and tournaments | [Add Quotient Prime](https://discord.com/oauth2/authorize?client_id=1530927172531916800) |
| Shizuka | Community and moderation | [Add Shizuka](https://discord.com/oauth2/authorize?client_id=1536403248792207470) |
| Sonic | Music and 24/7 voice | [Add Sonic](https://discord.com/oauth2/authorize?client_id=1536757672899252355) |

## Getting started

```bash
npm install
npm run dev
npm run build && npm start
```

## Configuration

Set these in your hosting dashboard (or a local `.env.local`):

| Variable | Purpose |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Your custom domain, for example `https://yourdomain.com`. Used for canonical tags, sitemap, robots and share images. |
| `NEXT_PUBLIC_SUPPORT_SERVER_URL` | Real Discord support invite. Support buttons stay hidden until this is set. |

Other settings live in `src/config/site.ts`. Fill `localBusiness` there with a real address to publish LocalBusiness structured data.

## SEO files

Generated automatically: `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest`, per-page titles, descriptions, canonical tags, Open Graph and Twitter images, and JSON-LD.

## Stack

Next.js, React and TypeScript. Share images live in `public/og`.
