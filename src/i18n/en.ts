import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Fortnite Cheats',
    domain: 'getfortnitecheat.net',
    title: 'Fortnite Cheats and Hacks | Private Aimbot, ESP & Cloud DMA',
    description:
      'Private Fortnite cheats and hacks with aimbot, ESP, and Cloud DMA on AWS—updated after every patch at getfortnitecheat.net.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  cloudDma: {
    eyebrow: 'Cloud infrastructure',
    title: 'Cloud DMA on AWS',
    description:
      'Every Fortnite Cheats tier includes Cloud DMA delivery—aimbot, ESP, and utility profiles sync through our AWS-hosted operator portal instead of fragile local-only caches.',
    note: 'Log in on any Windows PC, pull your ranked or Zero Build preset, and queue after the status banner shows green.',
    bullets: [
      'AWS-backed Cloud DMA sync for weapon, ESP, and utility sliders',
      'Portal configs push after Fortnite season and EAC maintenance',
      'Same-day loader builds paired with cloud profile snapshots',
      'Included on Lite, Pro, and Elite—no separate Cloud DMA upsell',
    ],
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Fortnite — patch build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'Fortnite Cheats',
    titleLine2: 'and Hacks',
    subtitle: 'Private Fortnite cheats and hacks for ranked Battle Royale and Zero Build on PC.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Buy Now',
    modesLabel: 'Fortnite modes',
    modes: ['Battle Royale', 'Zero Build', 'Ranked', 'Creative'],
    highlights: [
      'Private Fortnite cheats with aimbot, ESP, and Cloud DMA on AWS',
      'Updated after every patch, usually the same day',
      'Keys delivered instantly after checkout',
      'HWID spoofer to bypass hardware bans',
      'Discord support for install and setup',
      'Cheats and add-on products for every setup',
    ],
    metrics: [
      { label: 'Instant keys', strong: 'Checkout' },
      { label: 'Patch speed', strong: 'Same day' },
      { label: 'Cloud DMA AWS', strong: 'Included' },
      { label: 'Live support', strong: 'Discord' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle:
      'Aim assist, ESP, Cloud DMA on AWS, and utility tools for Fortnite—maintained every season.',
    items: [
      {
        title: 'Cloud DMA on AWS',
        subtitle: 'Configs that follow you.',
        desc: 'AWS-hosted Cloud DMA keeps operator portal presets in sync—ESP, utility sliders, and combat profiles on every Windows PC without manual exports or stale local caches.',
        bullets: [
          'AWS-backed operator portal with dated config snapshots',
          'Cloud DMA sync included on Lite, Pro, and Elite',
          'Ranked and Zero Build profiles per input device',
          'Auto-backup before loader pushes on patch days',
          'Instant restore after season or EAC maintenance',
          'Discord #status for Cloud DMA and build notes',
        ],
        tags: ['Cloud DMA AWS', 'cloud sync', 'auto update'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See third parties before they shoot.',
        desc: 'Readable boxes, skeletons, and distance tags that stay clear during build fights and endgame zones.',
        bullets: [
          'Player boxes, health bars, and platform icons',
          'Loot and chest highlights with rarity filters',
          'Reboot van, supply drop, and vehicle alerts',
        ],
        tags: ['Fortnite ESP', 'player esp', 'loot esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Radar & Storm',
        subtitle: 'Rotate with confidence.',
        desc: 'Minimap overlays, storm timers, and last-seen markers so you pick fights on your terms.',
        bullets: ['Storm circle countdowns', 'Enemy last-seen on minimap', 'Safe rotation hints'],
        tags: ['Fortnite radar', 'storm timer', 'map awareness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Triggerbot',
        subtitle: 'Instant swaps when it counts.',
        desc: 'One-key shotgun and SMG chains with sane ranked defaults—tighten only after Creative testing.',
        bullets: ['Target selector for closest threat', 'Build edit assist hooks', 'Per-weapon fire chains in portal'],
        tags: ['triggerbot', 'shotgun meta', 'target selector'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra tools for clutch moments.',
        desc: 'Skin Unlocker, finish assist, quick swap, and stream-proof modes beyond raw aim and ESP.',
        bullets: [
          'Skin Unlocker: preview outfits and pickaxes locally',
          'Auto Finish: secure eliminations at low HP',
          'Quick Swap: faster weapon swap timing',
          'Stream proof: hide overlays from OBS capture',
        ],
        tags: ['skin unlocker', 'auto finish', 'stream proof'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Loot Farmer',
        subtitle: 'Efficient loot routes. Less downtime.',
        desc: 'Pathing assists and chest prioritization that stay subtle—built for arena and ranked grinding.',
        bullets: [
          'Chest and floor loot prioritization',
          'Optimal drop path hints on ESP',
          'Safe disengage when players ping on radar',
          'Zero Build friendly loot presets',
        ],
        tags: ['loot esp', 'loot route', 'farm assist'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators stay safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'FOV extender',
        subtitle: 'See more of the fight.',
        desc: 'Pull camera back for third-party awareness without losing shotgun tracking.',
        bullets: ['Distance caps per game mode', 'Quick reset to default FOV', 'Pairs with minimap ESP'],
        tags: ['FOV extender', 'camera', 'vision'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Aimbot & Triggerbot',
        subtitle: 'Track. Click. Win.',
        desc: 'Full aim suite for Battle Royale and Zero Build—tuned for AR, shotgun, and SMG metas with humanized smoothing and conservative ranked defaults.',
        bullets: [
          'Weapon profiles for AR tap-fire and shotgun box fights',
          'Recoil control with per-weapon curves',
          'Smart aim with delay and FOV sliders',
          'Prediction for moving targets and jump shots',
          'Triggerbot chains for shotgun swaps and SMG tracking',
          'Target selector for closest threat in build fights',
        ],
        tags: ['Fortnite aimbot', 'triggerbot', 'recoil control'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most Fortnite cheat shops ship stale loaders, obvious automation, and ticket bots. We built Fortnite Cheats around season-day delivery, humanized aim assist, and live operators.',
    usLabel: 'Fortnite Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EAC-aware builds pushed within hours of Fortnite updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized aim & delays',
        desc: 'Delay sliders, target selector, and conservative defaults mimic high-ranked timing—not instant snap aim that floods reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, loadout configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Fortnite process like legacy providers still sell.',
      },
      {
        title: 'Cloud DMA on AWS',
        desc: 'Ranked, Zero Build, and per-weapon profiles sync through Cloud DMA on AWS—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Fortnite or EAC changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Epic Games PC players running aimbot, ESP, and utilities on Fortnite Cheats.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue Fortnite on Epic Games PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or Zero Build presets, and tune aimbot plus ESP sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Fortnite',
        desc: 'Check the live status banner, launch Epic Games Fortnite, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Fortnite after updates.',
    items: ['Windows 10 & 11', 'Epic Games', 'Fortnite client', 'Cloud DMA on AWS', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite hacks',
    title: 'Fortnite Elite hacks',
    subtitle: 'Full ranked suite—ESP, aimbot, loot tools, Skin Unlocker, and priority season delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Fortnite Elite',
        desc: 'Private Fortnite hacks build with Loot Farmer, Auto Finish, Quick Swap, Skin Unlocker, and direct dev support.',
        features: ['Loot Farmer', 'Auto Finish', 'Quick Swap', 'Full full ESP suite', 'Skin Unlocker', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Fortnite products',
    subtitle:
      'Elite Fortnite hacks with Cloud DMA on AWS—plus HWID spoofer, UGC recovery, Skin Unlocker, and utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    cloudDmaBox: {
      title: 'Cloud DMA on AWS',
      subtitle: 'Included with every cheat tier',
      description:
        'Pull the same aimbot, ESP, and utility presets on any PC—configs sync through our AWS-hosted operator portal with automatic snapshots before patch-day loader updates.',
      buyNow: 'Buy now',
      ctaFeatures: 'See Cloud DMA features',
      ctaLearn: 'Full Cloud DMA details',
    },
    hubCloudDma: {
      eyebrow: 'Included on every cheat tier',
      title: 'Fortnite Cloud DMA on AWS',
      subtitle: 'Private cheat configs that sync—not a separate upsell',
      description:
        'Every Elite, Standard, and Essential Fortnite hack on this page ships with Cloud DMA delivery. Aimbot smoothing, ESP and wallhack sliders, triggerbot chains, and loot filters live in our AWS-hosted operator portal so you can restore ranked or Zero Build presets after patches, reinstalls, or PC swaps—without rebuilding configs by hand.',
      seoParagraph:
        'Cloud DMA is how getfortnitecheat.net keeps undetected-style Fortnite cheats practical in 2026: same-day loader builds plus dated snapshots before Easy Anti-Cheat maintenance, conservative presets for Battle Royale ranked, and Discord #status when Cloud DMA profiles change. It is not a physical DMA card—it is secure cloud sync for your licensed external loader on Windows PC.',
      buyNow: 'Buy Fortnite cheats',
      ctaFaq: 'Cloud DMA FAQs',
      ctaHome: 'Homepage Cloud DMA strip',
      highlights: [
        {
          title: 'Portal sync',
          desc: 'Push and pull aimbot, ESP, and utility profiles on any licensed Windows PC.',
        },
        {
          title: 'Patch-day backups',
          desc: 'Automatic snapshots before loader updates so you can roll back one season.',
        },
        {
          title: 'Ranked & Zero Build',
          desc: 'Separate Cloud DMA presets for each mode and input device.',
        },
        {
          title: 'No extra SKU',
          desc: 'Cloud DMA on AWS is bundled with Lite-style ESP through Elite full suites.',
        },
      ],
    },
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Fortnite.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Epic Games restrictions, EAC bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Unlocker',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Lightweight Skin Unlocker for outfit skins, weapon skins and rare variants—local preview without Epic Games store purchases.',
        features: ['Outfit skin swap', 'Weapon & effect customizer', 'Legendary skin preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Aimbot setup, ESP config, season patch checks, and ranked guides for Fortnite.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Fortnite cheat codes guide: console commands for practice lobbies',
        slug: 'dota-2-cheat-codes-guide',
        image: '/images/blog/dota-2-cheat-codes-guide.png',
        desc: 'Full list of Fortnite cheat codes for custom lobbies—gold, levels, vision, hero spawn and item commands.',
        date: 'Aug 20, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'All Fortnite console cheats and tips',
        slug: 'dota-2-console-cheats-tips',
        image: '/images/blog/dota-2-console-cheats-tips.png',
        desc: 'Private lobby cheat list with refresh, wtf mode, creep spawn and bot commands explained.',
        date: 'Aug 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to use cheat codes in Fortnite',
        slug: 'how-to-use-dota-2-cheat-codes',
        image: '/images/blog/how-to-use-dota-2-cheat-codes.png',
        desc: 'Enable cheats in lobbies, open the console and understand the difference between practice codes and private Fortnite hacks.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'Fortnite cheats features: scripts, bots, ESP and more',
        slug: 'fortnite-hacks-features-guide',
        image: '/images/blog/dota-2-cheats-features-guide.png',
        desc: 'Complete guide to our Fortnite cheats—Triggerbot, Loot Farmer, Skin Unlocker, FOV extender, ESP and Quick Swap.',
        date: 'Aug 18, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Fortnite console commands and cheats: chat vs console',
        slug: 'dota-2-console-commands-cheats',
        image: '/images/blog/dota-2-console-commands-cheats.png',
        desc: 'Side-by-side chat cheats and console commands for gold, levels, vision and game start in private lobbies.',
        date: 'Aug 17, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Fortnite Lite vs Pro: which tier fits you',
        slug: 'dota-2-lite-vs-pro',
        image: '/images/blog/dota-2-lite-vs-pro.png',
        desc: 'Map awareness vs script automation—compare Lite and Pro Fortnite hacks for ranked and Zero Build.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Elite tier guide: when to upgrade your Fortnite hacks',
        slug: 'dota-2-elite-tier-guide',
        image: '/images/blog/dota-2-elite-tier-guide.png',
        desc: 'Loot Farmer, Auto Finish, Skin Unlocker and full ESP—who Elite is for and how to tune safely.',
        date: 'Aug 16, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Fortnite scripts for ranked ranked points',
        slug: 'dota-2-scripts-ranked-mmr',
        image: '/images/blog/dota-2-scripts-ranked-mmr.png',
        desc: 'Triggerbot, Prediction and Activator configs for climbing ranked with Pro tier Fortnite cheats.',
        date: 'Aug 15, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'ESP setup for Fortnite ranked',
        slug: 'dota-2-map-hack-setup',
        image: '/images/blog/dota-2-map-hack-setup.png',
        desc: 'Enemy position tracking, loot ESP, smoke alerts and vision detector tuning for Lite and Elite tiers.',
        date: 'Aug 15, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'FOV extender guide for Fortnite',
        slug: 'dota-2-zoom-hack-guide',
        image: '/images/blog/dota-2-zoom-hack-guide.png',
        desc: 'Extended camera view, dynamic zoom and safe angle lock for supports and midlaners.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Skin changer and Unlock All for Fortnite',
        slug: 'dota-2-skin-changer-guide',
        image: '/images/blog/dota-2-skin-changer-guide.png',
        desc: 'Preview legendary skins, exclusive skins and exclusive sets locally with our Unlock All Skin Unlocker module.',
        date: 'Aug 14, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Updates',
        title: 'EAC patch day checklist for Fortnite cheats',
        slug: 'vac-patch-day-checklist',
        image: '/images/blog/vac-patch-day-checklist.png',
        desc: 'Status banner, loader reload and conservative profiles after every Fortnite or EAC update.',
        date: 'Aug 13, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'HWID spoofer vs new account after a EAC ban',
        slug: 'dota-2-hwid-spoofer-after-ban',
        image: '/images/blog/dota-2-hwid-spoofer-after-ban.png',
        desc: 'When to spoof hardware, when to start fresh, and how getfortnitecheat.net/products/fortnite-hacks fits each path.',
        date: 'Aug 13, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy Fortnite cheats in 2026',
        slug: 'how-to-buy-fortnite-hacks-2026',
        image: '/images/blog/how-to-buy-dota-2-cheats-2026.png',
        desc: 'Step-by-step purchase walkthrough for Lite, Pro and Elite via our secure checkout.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Auto combo hero scripts: AR meta, PA and Shotgun meta',
        slug: 'dota-2-auto-combo-hero-scripts',
        image: '/images/blog/dota-2-auto-combo-hero-scripts.png',
        desc: 'Weapon-specific combo examples for Pro tier scripts—AR meta tornado combos, PA blink dagger and Shotgun meta finger chains.',
        date: 'Aug 12, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Troubleshooting',
        title: 'Easy Anti-Cheat was unable to verify Fortnite',
        slug: 'valve-anti-cheat-unable-to-verify',
        image: '/images/blog/valve-anti-cheat-unable-to-verify.png',
        desc: 'Fix verification errors, file integrity checks and when to use UGC appeal workflows after EAC issues.',
        date: 'Aug 11, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Fortnite external cheat guide',
        slug: 'dota-2-external-cheat-guide',
        image: '/images/blog/dota-2-external-cheat-guide.png',
        desc: 'Why external Fortnite cheats matter, how the external loader works on PC and what makes private software safer than free tools.',
        date: 'Aug 11, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream-proof overlay setup for Fortnite',
        slug: 'dota-2-stream-proof-setup',
        image: '/images/blog/dota-2-stream-proof-setup.png',
        desc: 'Hide ESP and script overlays from OBS, Game Bar and capture cards—test workflow for content creators.',
        date: 'Aug 10, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Combat', title: 'Aim that adapts to your loadout', desc: 'Triggerbot, recoil control, smart aim, and delay sliders in one combat tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by distance, team color, loot rarity, and reboot van alerts.' },
      { num: '03', label: 'Radar', title: 'Rotations on lock', desc: 'Storm timers, enemy hints, and minimap ESP on a compact overlay.' },
      { num: '04', label: 'Loadouts', title: 'Per-weapon profiles', desc: 'Save AR, shotgun, and SMG presets and swap with hotkeys.' },
      { num: '05', label: 'Loot', title: 'Farm & route automation', desc: 'Loot Farmer, chest timers, and safe path hints for efficient drops.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Zero Build, and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Fortnite profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check EAC status',
        desc: 'Read the live banner on getfortnitecheat.net before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches your ranked goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and Zero Build presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Fortnite plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or loadout configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Fortnite Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@getfortnitecheat.net',
        href: 'mailto:support@getfortnitecheat.net',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on getfortnitecheat.net or via our secure checkout.' },
      { title: 'Platform', desc: 'Epic Games on Windows 10 or 11—and your Fortnite client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Epic Games.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Fortnite cheats are online?',
        a: 'The live status banner is on getfortnitecheat.net and in the Discord #status channel. Always check after a Fortnite or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Fortnite.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Fortnite hacks?',
        a: 'Yes—any modification carries risk. EAC and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Fortnite via Epic Games on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Skin Unlocker live at getfortnitecheat.net/products/fortnite-hacks with feature lists and checkout via our partner.',
      },
      {
        num: '07',
        q: 'What is Cloud DMA on AWS?',
        a: 'Cloud DMA is our AWS-hosted delivery path for operator portal configs—aimbot, ESP, and utility sliders sync to any PC you log in from. It is included on Lite, Pro, and Elite; back up presets before patch days and restore them after loader updates.',
      },
    ],
  },
  footer: {
    tagline: 'Fortnite Cheats — private aimbot, ESP, Cloud DMA on AWS, and PC tools.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/', label: 'Cloud DMA on AWS', ariaLabel: 'Cloud DMA on AWS', scrollTarget: 'cloud-dma' },
      { href: '/products/fortnite-hacks/elite/', label: 'Elite Fortnite hacks', ariaLabel: 'Elite cheats' },
      { href: '/products/fortnite-hacks/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Fortnite Cheats',
      description:
        'Fortnite Cheats provides Fortnite cheat tiers, utility tools and PC support resources at getfortnitecheat.net.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Fortnite Cheats is a PC-focused resource for Fortnite players exploring scripts, ESP, FOV extender and Skin Unlocker workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate Fortnite hacks before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Lite, Pro, and Elite cheat tiers, Cloud DMA on AWS config delivery, HWID utilities, Skin Unlocker and account recovery workflows. Blog articles explain ranked-safe configs, patch-day checks, and EAC update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Epic Games account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Fortnite Cheats handles analytics, cookies, and contact data when you use getfortnitecheat.net.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on getfortnitecheat.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Fortnite Cheats products and getfortnitecheat.net.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using getfortnitecheat.net or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Fortnite cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Skin Unlocker / Unlock All) delivered through an operator portal and loader for Epic Games on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Fortnite or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. getfortnitecheat.net does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Fortnite.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Epic Games Fortnite on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Fortnite build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Fortnite can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Fortnite Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at getfortnitecheat.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Fortnite Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Fortnite Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
