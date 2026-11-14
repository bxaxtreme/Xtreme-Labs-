import { DiscordBotItem, CommandItem } from '@/types/bot';
import { siteConfig } from '@/config/site';

export const initialBotsList: DiscordBotItem[] = [
  {
    id: "quotient-prime",
    name: "Quotient Prime",
    tagline: "Automated Esports, Scrims & Tournament System",
    description: "Professional tournament automation for competitive Discord servers. Instant scrim slot registration, bracket generation, team verification, and match scoreboards with zero manual hassle.",
    longDescription: "Quotient Prime is the ultimate tournament orchestrator engineered for gaming communities, clan organizers, and esports leagues. Say goodbye to manual slot tracking in spreadsheets — manage brackets, team tags, scrim IDs, and automated points tables seamlessly with slash commands.",
    avatar: "/images/quotient-prime.webp",
    accentColor: "#19E6B0",
    category: "Tournaments",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1530927172531916800",
    stats: {
      servers: "40+",
      users: "30,000+"
    },
    tags: ["Tournaments", "Scrims", "Brackets", "Esports", "Slots"],
    featured: true,
    prefixOrSlash: "/",
    topCommands: ["/tourney create", "/scrims register", "/bracket", "/slots", "/leaderboard"],
    detailedFeatures: [
      {
        title: "Automated Double & Single Elimination Brackets",
        description: "Generate interactive tournament brackets directly inside Discord channels. Supports automated seedings, bye assignments, and visual match progressions.",
        iconType: "trophy",
        badge: "Esports Standard"
      },
      {
        title: "1-Click Scrims Slot Registration",
        description: "Host daily scrims with strict roster limits. Teams register in seconds, while the bot verifies required player tags and pages confirmation DMs.",
        iconType: "zap",
        badge: "Anti-Duplicate"
      },
      {
        title: "Live Points Table & Kill Scoreboards",
        description: "Calculate match rankings, placement points, and individual kill scorecards automatically. Generates crisp, branded match result embeds.",
        iconType: "chart",
        badge: "Real-time"
      },
      {
        title: "Verified Team Roles & Private Channels",
        description: "Automatically create dedicated team channels with private voice rooms and auto-assign tournament participant roles upon registration.",
        iconType: "shield",
        badge: "Security"
      }
    ],
    detailedCommands: [
      {
        name: "tourney create",
        category: "Tournaments",
        description: "Initializes a brand new esports tournament with customized slot counts, match rules, and prize pool.",
        syntax: "/tourney create <name> [slots] [format]",
        permissions: "Manage Server / Tournament Admin",
        botId: "quotient-prime",
        botName: "Quotient Prime"
      },
      {
        name: "scrims register",
        category: "Tournaments",
        description: "Registers a squad into the open scrim schedule with 4 player Discord mentions and tag validation.",
        syntax: "/scrims register <team_name> <player1> <player2> <player3> <player4>",
        permissions: "Send Messages",
        botId: "quotient-prime",
        botName: "Quotient Prime"
      },
      {
        name: "bracket",
        category: "Tournaments",
        description: "Displays the active bracket view with current match pairings, scores, and winner pathways.",
        syntax: "/bracket [tournament_id]",
        permissions: "Send Messages",
        botId: "quotient-prime",
        botName: "Quotient Prime"
      },
      {
        name: "slots",
        category: "Tournaments",
        description: "Inspects live slot status, confirmed teams, waitlist queues, and slot cancellation triggers.",
        syntax: "/slots [match_id]",
        permissions: "Send Messages",
        botId: "quotient-prime",
        botName: "Quotient Prime"
      },
      {
        name: "leaderboard",
        category: "Tournaments",
        description: "Renders the cumulative points table, kill multipliers, and MVP player rankings.",
        syntax: "/leaderboard [day]",
        permissions: "Send Messages",
        botId: "quotient-prime",
        botName: "Quotient Prime"
      },
      {
        name: "points update",
        category: "Tournaments",
        description: "Quickly appends match score and kill counts for a registered squad.",
        syntax: "/points update <team> <kills> <placement>",
        permissions: "Manage Messages / Scrim Mod",
        botId: "quotient-prime",
        botName: "Quotient Prime"
      }
    ]
  },
  {
    id: "shizuka",
    name: "Shizuka !!",
    tagline: "Supreme Auto-Moderation, Anime & Community Hub",
    description: "Your all-in-one server companion. Featuring smart anti-raid protection, custom welcomer cards, role leveling, community economy, and engaging anime interactions.",
    longDescription: "Shizuka !! is a full-featured community guardian and entertainment powerhouse. Designed to protect server safety while creating a fun, vibrant atmosphere with customizable anime cards, automated moderation, interactive role levels, and expressive roleplay commands.",
    avatar: "/images/shizuka.webp",
    accentColor: "#EB459E",
    category: "Community",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1536403248792207470",
    stats: {
      servers: "40+",
      users: "40,000+"
    },
    tags: ["AutoMod", "Anime", "Welcomer", "Leveling", "Security"],
    featured: true,
    prefixOrSlash: "/",
    topCommands: ["/help", "/ban", "/automod", "/welcome", "/rank", "/anime"],
    detailedFeatures: [
      {
        title: "Heuristic Auto-Moderation & Anti-Raid",
        description: "State-of-the-art token raid detection, malicious link blocking, anti-spam heuristics, and mass-mention prevention with instant timeout actions.",
        iconType: "shield",
        badge: "24/7 Shield"
      },
      {
        title: "Customizable Welcome & Farewell Canvas",
        description: "Delight joining members with dynamic welcome banners featuring their Discord avatar, server join position, and automatic role assignment.",
        iconType: "heart",
        badge: "High Engagement"
      },
      {
        title: "Dynamic Role Leveling & XP Cards",
        description: "Encourage active community participation with voice and text XP. Level up to unlock tiered server roles and customize personal rank cards.",
        iconType: "chart",
        badge: "Rewards"
      },
      {
        title: "Rich Anime Commands & Interactions",
        description: "Over 50+ animated reaction commands (hug, pat, kiss, quote, wallpaper) and anime trivia games to keep your chat constantly buzzing.",
        iconType: "users",
        badge: "Fun & Social"
      }
    ],
    detailedCommands: [
      {
        name: "help",
        category: "Community",
        description: "Displays complete command directory with interactive categorization and guide links.",
        syntax: "/help [category]",
        permissions: "Send Messages",
        botId: "shizuka",
        botName: "Shizuka !!"
      },
      {
        name: "automod",
        category: "Community",
        description: "Configures real-time auto-moderation rules including link filters, spam thresholds, and timeout triggers.",
        syntax: "/automod <enable|disable|status> [module]",
        permissions: "Administrator / Manage Server",
        botId: "shizuka",
        botName: "Shizuka !!"
      },
      {
        name: "ban",
        category: "Community",
        description: "Bans a malicious user or bot from the server with audit logging and optional message purging.",
        syntax: "/ban <user> [reason] [purge_days]",
        permissions: "Ban Members",
        botId: "shizuka",
        botName: "Shizuka !!"
      },
      {
        name: "welcome",
        category: "Community",
        description: "Configures greeting channel, custom background banner, and auto-roles for new members.",
        syntax: "/welcome <channel> [banner_url] [message]",
        permissions: "Manage Server",
        botId: "shizuka",
        botName: "Shizuka !!"
      },
      {
        name: "rank",
        category: "Community",
        description: "Displays your current level card, server leaderboard rank, and XP progress.",
        syntax: "/rank [user]",
        permissions: "Send Messages",
        botId: "shizuka",
        botName: "Shizuka !!"
      },
      {
        name: "anime",
        category: "Community",
        description: "Fetches quotes, official artwork, character profiles, or animated reaction GIFs.",
        syntax: "/anime [action|character]",
        permissions: "Send Messages",
        botId: "shizuka",
        botName: "Shizuka !!"
      }
    ]
  },
  {
    id: "sonic",
    name: "Sonic",
    tagline: "Lossless 320kbps High-Fi Audio & 24/7 Radio",
    description: "Crystal clear studio sound streaming straight into your voice channels. Supports YouTube, Spotify, SoundCloud, 24/7 radio mode, bassboost, 8D audio, and zero audio stutter.",
    longDescription: "Sonic delivers high-definition, audiophile-grade sound straight into your Discord voice channels. Built on dedicated high-bandwidth audio nodes, it offers instantaneous track playback, multi-platform queue management, and advanced real-time digital signal processing.",
    avatar: "/images/sonic.webp",
    accentColor: "#3B9EFF",
    category: "Music",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1536757672899252355",
    stats: {
      servers: "20+",
      users: "20,000+"
    },
    tags: ["320kbps Audio", "24/7 Radio", "Bassboost", "No Lag", "Spotify"],
    featured: true,
    prefixOrSlash: "/",
    topCommands: ["/play", "/skip", "/queue", "/bassboost", "/volume", "/247"],
    detailedFeatures: [
      {
        title: "True 320kbps Lossless Sound Quality",
        description: "Experience music with pristine studio clarity. Uncompressed audio buffers ensure zero clipping, distortion, or voice gateway stutter.",
        iconType: "music",
        badge: "High-Fi Output"
      },
      {
        title: "24/7 Voice Channel Stay Mode",
        description: "Never let the music stop. Keep Sonic permanently active in your voice channel streaming chill, lofi, or custom radio around the clock.",
        iconType: "zap",
        badge: "Non-Stop"
      },
      {
        title: "Real-Time DSP Hardware Audio Filters",
        description: "Shape your sound with bassboost (+6dB to +15dB), 8D surround sound, vaporwave, nightcore, and acoustic equalizer presets.",
        iconType: "settings",
        badge: "Equalizer"
      },
      {
        title: "Universal Multi-Platform Streaming",
        description: "Seamlessly search and stream tracks or playlists from Spotify, YouTube, SoundCloud, Apple Music, and direct HTTP audio streams.",
        iconType: "chart",
        badge: "Universal Sync"
      }
    ],
    detailedCommands: [
      {
        name: "play",
        category: "Music",
        description: "Plays a song or playlist from Spotify, YouTube, or direct search query in your voice channel.",
        syntax: "/play <song_name_or_url>",
        permissions: "Connect & Speak",
        botId: "sonic",
        botName: "Sonic"
      },
      {
        name: "skip",
        category: "Music",
        description: "Skips the currently playing song to the next track in the server queue.",
        syntax: "/skip",
        permissions: "Connect & Speak",
        botId: "sonic",
        botName: "Sonic"
      },
      {
        name: "queue",
        category: "Music",
        description: "Shows all upcoming tracks, total playtime, requester usernames, and loop status.",
        syntax: "/queue [page]",
        permissions: "Send Messages",
        botId: "sonic",
        botName: "Sonic"
      },
      {
        name: "bassboost",
        category: "Music",
        description: "Toggles DSP low-frequency bass enhancement (Low, Medium, High, Extreme).",
        syntax: "/bassboost <level|off>",
        permissions: "Connect & Speak",
        botId: "sonic",
        botName: "Sonic"
      },
      {
        name: "volume",
        category: "Music",
        description: "Adjusts playback volume output smoothly between 1% and 150%.",
        syntax: "/volume <1-150>",
        permissions: "Connect & Speak",
        botId: "sonic",
        botName: "Sonic"
      },
      {
        name: "247",
        category: "Music",
        description: "Enables 24/7 permanent connection in the current voice channel even when users leave.",
        syntax: "/247 <enable|disable>",
        permissions: "Manage Channels / DJ",
        botId: "sonic",
        botName: "Sonic"
      }
    ]
  }
];

// Unified list of all commands across all bots
export const allFleetCommands: CommandItem[] = initialBotsList.flatMap(
  (bot) => bot.detailedCommands || []
);

export const ecosystemInfo = {
  name: "Xtreme Labs",
  headline: "Empower Your Discord Server With Xtreme Labs",
  subheadline: "Direct 1-click invite links for Quotient Prime, Shizuka !!, and Sonic. Battle-tested Discord bots engineered by Xtreme Labs for esports tournaments, community moderation, and lossless 24/7 audio.",
  supportServerUrl: siteConfig.supportServerUrl,
  githubUrl: siteConfig.githubUrl,
  stats: {
    totalBots: "3",
    totalServers: "100+",
    totalUsers: "90,000+"
  }
};
