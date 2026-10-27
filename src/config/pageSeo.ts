/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

/** Appended to meta descriptions site-wide when not already present. */
export const CLOUD_DMA_SEO_SUFFIX = 'Cloud DMA on AWS included with every tier.';

function withCloudDma(description: string): string {
  if (/cloud dma/i.test(description)) return description;
  const trimmed = description.trim().replace(/\.$/, '');
  return `${trimmed}. ${CLOUD_DMA_SEO_SUFFIX}`;
}

function seo(title: string, description: string): PageSeoEntry {
  return { title, description: withCloudDma(description) };
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': seo(
    'Fortnite Cheats and Hacks | Aimbot, ESP & Cloud DMA',
    'Private Fortnite cheats and hacks with aimbot, ESP, and Cloud DMA on AWS. Keys instantly after checkout—updated after every patch at getfortnitecheat.net.',
  ),
  '/products/fortnite-hacks/': seo(
    'Fortnite Cheats & Hacks FAQ | Cloud DMA & HWID Spoofer',
    '101 product FAQs: undetected-style Fortnite cheats 2026, Cloud DMA on AWS aimbot & ESP presets, HWID spoofer for EAC, ranked Battle Royale setup—getfortnitecheat.net.',
  ),
  '/products/fortnite-hacks/elite/': seo(
    'Fortnite Elite Hacks | Loot Assist & Full ESP',
    'Elite tier: loot farmer, auto finish, skin unlocker, full ESP suite, priority patches, and Cloud DMA on AWS.',
  ),
  '/products/fortnite-hacks/utilities/': seo(
    'Fortnite Utilities | HWID, UGC & Skin Unlocker',
    'HWID Spoofer, UGC, and Skin Unlocker utilities—pair with Cloud DMA AWS cheat profiles from the operator portal.',
  ),
  '/blog/': seo(
    'Fortnite Hacks Guides & Season Notes',
    'Setup guides, Lite vs Pro comparisons, EAC patch checklists, and Cloud DMA AWS config tips for Fortnite hacks.',
  ),
  '/forum/': seo(
    'Fortnite Community Forum | Fortnite Hacks',
    'Discuss loadouts, Cloud DMA presets, season changes, and guides with the Fortnite Cheats community.',
  ),
  '/faq/': seo(
    'FAQ | Fortnite Hacks, Products & Setup',
    'Answers on hack tiers, ESP, aimbot, Cloud DMA on AWS, HWID tools, checkout, and setup.',
  ),
  '/terms/': seo(
    'Terms & Conditions | Fortnite Hacks',
    'Purchase terms, license use, and refund policy for Fortnite Cheats products sold through checkout.',
  ),
  '/privacy/': seo(
    'Privacy Policy | Fortnite Hacks',
    'How Fortnite Cheats uses analytics, cookies, and contact data when you browse or request support.',
  ),
  '/about/': seo(
    'About Fortnite Hacks',
    'What Fortnite Cheats publishes: cheat tiers, Cloud DMA on AWS delivery, utilities, guides, and live status.',
  ),
  '/support/': seo(
    'Support | Fortnite Hacks',
    'Help with loader setup, Cloud DMA AWS sync, HWID, and checkout for Fortnite hack tiers and utilities.',
  ),
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
