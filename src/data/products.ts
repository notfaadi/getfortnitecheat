import { t } from '../i18n';
import { checkoutExternalUrl, checkoutForSlug } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['dota-2-map-hack-setup', 'dota-2-lite-vs-pro', 'dota-2-zoom-hack-guide', 'vac-patch-day-checklist'],
  pro: [
    'dota-2-scripts-ranked-mmr',
    'dota-2-auto-combo-hero-scripts',
    'dota-2-lite-vs-pro',
    'dota-2-stream-proof-setup',
  ],
  elite: [
    'dota-2-elite-tier-guide',
    'fortnite-hacks-features-guide',
    'dota-2-map-hack-setup',
    'vac-patch-day-checklist',
    'how-to-buy-fortnite-hacks-2026',
  ],
  'hwid-spoofer': [
    'dota-2-hwid-spoofer-after-ban',
    'valve-anti-cheat-unable-to-verify',
    'vac-patch-day-checklist',
    'dota-2-external-cheat-guide',
  ],
  ugc: [
    'valve-anti-cheat-unable-to-verify',
    'dota-2-hwid-spoofer-after-ban',
    'how-to-buy-fortnite-hacks-2026',
  ],
  'unlock-all': [
    'dota-2-skin-changer-guide',
    'fortnite-hacks-features-guide',
    'dota-2-stream-proof-setup',
  ],
};

const productBase = '/products/fortnite-hacks/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on localhost:4321 and Discord #status before purchase—especially after a Fortnite or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite Fortnite hacks or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Epic Games platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Zero Build.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Fortnite and EAC receive frequent updates. Confirm module availability on the live status panel at localhost:4321 before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Fortnite can violate Epic Games Terms of Service and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const fortniteSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqEpic', text: 'Current Fortnite client via Epic Games with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Fortnite published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/dota-2-map-hack.png`,
    alt: 'Fortnite ESP showing enemy players and loot highlights',
    caption: 'ESP awareness',
    captionDesc: 'Enemy tracking, loot ESP, and storm timers during a ranked endgame.',
  },
  gpScripts: {
    src: `${gameplay}/dota-2-scripts-combo.png`,
    alt: 'Fortnite triggerbot assisting AR and shotgun swaps',
    caption: 'Triggerbot & aim assist',
    captionDesc: 'Weapon profiles with smoothing and humanized delay sliders.',
  },
  gpZoomHack: {
    src: `${gameplay}/dota-2-zoom-hack.png`,
    alt: 'Fortnite FOV extender showing wider Battle Royale view',
    caption: 'Extended FOV',
    captionDesc: 'FOV extender for safer rotations and third-party awareness.',
  },
  gpSkinChanger: {
    src: `${gameplay}/dota-2-skin-changer.png`,
    alt: 'Fortnite Skin Unlocker previewing a legendary outfit locally',
    caption: 'Skin Unlocker preview',
    captionDesc: 'Local outfit and pickaxe preview via Unlock All—client-side only.',
  },
  gpAutoKill: {
    src: `${gameplay}/dota-2-auto-kill-steal.png`,
    alt: 'Fortnite Auto Finish securing a low-HP elimination',
    caption: 'Auto Finish',
    captionDesc: 'Threshold detection for clean eliminations in box fights.',
  },
  gpFarmBot: {
    src: `${gameplay}/dota-2-farm-bot.png`,
    alt: 'Fortnite Loot Farmer highlighting chest routes',
    caption: 'Loot Farmer',
    captionDesc: 'Chest pathing with safe route hints for faster loadouts.',
  },
  gpHeroEsp: {
    src: `${gameplay}/dota-2-hero-esp.png`,
    alt: 'Fortnite player ESP with name tags and distance readouts',
    caption: 'Player ESP overlay',
    captionDesc: 'Player tags, team colors, and distance markers through builds.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'fortnite-hacks';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Fortnite Lite is built for players who want information first. In ranked, knowing enemy positions, loot routes, and storm timing wins more fights than raw mechanics—Lite gives you that edge without aim automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Triggerbot and bot modules entirely. Your gameplay looks natural while ESP, FOV extender and storm timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Fortnite Pro is the sweet spot for ranked grinders. Triggerbot, Recoil control and Smart aim help you win build fights without obvious bot patterns—when you tune Delay Setting using our portal presets.',
    },
    { type: 'h2', text: 'Aim assist + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds triggerbot, target selector, and build-fight assists. You see the fight before it starts and win it with aim curves that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Fortnite Elite is the private build for players who want everything—Loot Farmer, Auto Finish, Quick Swap, Skin Unlocker, full ESP and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in Creative, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, loot and chest highlights, storm alerts, FOV extender, and stream-safe overlay hiding. Config presets for ranked and Zero Build ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aim assist and automation' },
    {
      type: 'p',
      text: 'Triggerbot, recoil control, smart aim with prediction, and target selector for AR, shotgun, and SMG loadouts. Delay sliders tune assist strength so aim stays natural in ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier—enough firepower for high-ranked lobbies without Elite slot limits. Pair with our ranked aim guide in the blog before your first session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Loot Farmer, rotation assists, Auto Finish, Quick Swap, Skin Unlocker, and full ESP with reboot alerts. Use Creative testing before ranked—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Epic Games accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/fortnite-hacks/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Epic Games restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for Epic review. Pair with [HWID Spoofer](/products/fortnite-hacks/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Unlocker ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpMapHack', 'gpZoomHack'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Loot & chest ESP',
      'Loot route awareness',
      'Weapon swap timing readouts',
      'Minimap ESP overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Storm circle alerts',
      'FOV extender',
      'Zero Build preset config',
      'Ranked preset config',
      'Cloud DMA on AWS sync',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear Fortnite awareness workflow',
      paragraphs: [
        'Fortnite Lite focuses on player ESP, loot highlights, storm timers, and FOV extender—everything you need to track third parties and rotations without aim automation. Cloud DMA on AWS keeps ESP and FOV presets synced through the operator portal before your first queue.',
        'Lite is the entry path for ranked and Zero Build players who want map awareness with minimal report risk. No triggerbot, no loot bots—just readable overlays maintained every season on Fortnite Hacks.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpMapHack', 'gpHeroEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'All Lite ESP modules',
      'Triggerbot profiles',
      'Recoil control',
      'Smart aim & Prediction',
      'Target Selector',
      'Build edit assist hooks',
      'Shield/consumable reminders',
      'Shotgun swap radius hints',
      'Delay Setting tuning',
      'Weapon-specific aim profiles',
      'Reboot van alert integration',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud DMA on AWS sync',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear Fortnite aim workflow',
      paragraphs: [
        'Fortnite Pro adds triggerbot, recoil control, and smart aim on top of every Lite module. Weapon profiles sync via Cloud DMA on AWS—delay tuning and hotkeys live in one combat tab with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for ranked and Zero Build without Elite slot limits. Target selector keeps you efficient in build fights while aim assist stays human at default settings.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpFarmBot', 'gpSkinChanger'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Loot Farmer',
      'Drop zone assist',
      'Chest stack timer',
      'Material farm hints',
      'Auto Finish',
      'Quick Swap',
      'Full ESP suite',
      'Supply drop alert system',
      'Vision detector',
      'Skin Unlocker (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud DMA on AWS sync',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full Fortnite operator workflow',
      paragraphs: [
        'Fortnite Elite is the private build with Loot Farmer, Auto Finish, Quick Swap, Skin Unlocker, full ESP and priority patch delivery. Cloud DMA on AWS backs up every module profile—no caps, no upsells inside the loader.',
        'Elite slots are limited so season patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before ranked. Check the status banner before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Fortnite.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Fortnite after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps Fortnite players recover when EAC flags PC hardware but the Epic Games account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only EAC cases. After spoof, load a conservative cheat profile from localhost:4321 before queuing ranked.',
      ],
    },
  },
  ugc: {
    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on localhost:4321 or at checkout on localhost:4321.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpHeroEsp', 'gpMapHack'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Epic Games inventory or store state. Other players cannot see previewed legendary skins or sets.',
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Arcana & immortal preview',
      'Weapon & effect customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Ward & courier replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse hero legendary skins, exclusive skins and exclusive sets locally in Fortnite—searchable catalog, favorites, and loadout export without modifying live Epic Games purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Fortnite Lite' : cheat.name === 'Pro' ? 'Fortnite Pro' : 'Fortnite Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpScripts', 'gpAutoKill', 'gpFarmBot');

export { heroSlides } from './heroSlides';

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Elite Fortnite hacks, HWID spoofer, UGC recovery, and cosmetic utilities for Fortnite on PC.',
  buyUrl: checkoutExternalUrl('dota2'),
};
