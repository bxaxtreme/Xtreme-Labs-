export interface WebProject {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  highlights: string;
  tags: string[];
  accent: string;
  previews: { src: string; alt: string }[];
  // The website link. The button below the card is named after the project.
  liveUrl: string;
}

export const webProjects: WebProject[] = [
  {
    id: 'sonic-website',
    index: '01',
    category: 'Discord Bot Website · Music',
    title: 'Sonic Website',
    description:
      'The official website of the Sonic Discord bot. A dark, fast landing experience that introduces the bot, shows its music engine, live status monitoring, server utilities and commands, with a clear Invite Bot call to action on every screen.',
    highlights:
      'One-page product site with a now-playing style music card, feature cards for controls, monitoring, music and utilities, plus Premium, Developer, Commands and Legal sections.',
    tags: ['Dark UI', 'Responsive UI', 'Lavalink Music', 'Live Status', 'Animations'],
    accent: '#3B9EFF',
    previews: [
      { src: '/images/projects/sonic-hero.webp', alt: 'Sonic website hero section' },
      { src: '/images/projects/sonic-core.webp', alt: 'Sonic website features section' },
      { src: '/images/projects/sonic-music.webp', alt: 'Sonic website music engine section' },
    ],
    liveUrl: 'https://sonicx.vercel.app',
  },
  {
    id: 'cafe-junction',
    index: '02',
    category: 'Cafe Website · Food & Ordering',
    title: 'Cafe Junction',
    description:
      'A warm, editorial website for Chai Junction Café in Indore. Visitors can browse the handcrafted menu, search and filter items, add them to an order, read customer reviews and find the café with hours, WhatsApp support and a landmark guide.',
    highlights:
      'Menu with category filters and search, Add to Order buttons, bestseller and veg tags, a reviews wall, contact details with WhatsApp chat and an Open in Maps guide.',
    tags: ['Menu Filters', 'Order Online', 'Reviews', 'WhatsApp Support', 'Responsive UI'],
    accent: '#E8742B',
    previews: [
      { src: '/images/projects/cafe-menu.webp', alt: 'Cafe Junction menu page' },
      { src: '/images/projects/cafe-story.webp', alt: 'Cafe Junction heritage section' },
      { src: '/images/projects/cafe-reviews.webp', alt: 'Cafe Junction customer reviews' },
      { src: '/images/projects/cafe-contact.webp', alt: 'Cafe Junction contact page' },
    ],
    liveUrl: 'https://cafe-junction-web.vercel.app/',
  },
  {
    id: 'green-india',
    index: '03',
    category: 'Community Awareness · Environment',
    title: 'Green India',
    description:
      'A community awareness website that helps people notice local problems like potholes, plastic waste and water pollution, share them as reports, and build greener habits with a daily eco checklist, tips and guides. Sample reports on the site are clearly labelled as examples.',
    highlights:
      'Community reports with category chips and city search, a Report an Issue flow, a daily eco check-in checklist with progress, tips and guides, and a soft green design that stays easy to read.',
    tags: ['Community Reports', 'Search & Filters', 'Eco Checklist', 'Tips & Guides', 'Responsive UI'],
    accent: '#1F8A6B',
    previews: [
      { src: '/images/projects/green-hero.webp', alt: 'Green India hero section' },
      { src: '/images/projects/green-reports.webp', alt: 'Green India community reports' },
      { src: '/images/projects/green-checklist.webp', alt: 'Green India daily eco checklist' },
      { src: '/images/projects/green-about.webp', alt: 'Green India about section' },
    ],
    liveUrl: 'https://perfectindia.vercel.app/',
  },
];
