import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  dota2: 'fortnite',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path (302 → Zadeyo FDI in middleware). */
export function checkoutPath(product: CheckoutProduct = 'dota2'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Zadeyo FDI URL for Buy Now buttons and direct checkout CTAs. */
export function checkoutExternalUrl(product: CheckoutProduct = 'dota2'): string {
  return CHECKOUT[product];
}

/** Default checkout — main Fortnite module on Zadeyo. */
export const PRIMARY_CHECKOUT_PATH = checkoutExternalUrl('dota2');

/** Map product slugs to the matching Zadeyo module checkout URL. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutExternalUrl('skinChanger');
    case 'hwid-spoofer':
      return checkoutExternalUrl('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutExternalUrl('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutExternalUrl('dota2');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}&`) || href.startsWith(`${url}?`)) {
      return checkoutExternalUrl(product);
    }
  }

  // Legacy / encoded Zadeyo product paths → module checkout
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutExternalUrl('dota2');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutExternalUrl('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutExternalUrl('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutExternalUrl('ugc');
  }
  if (
    href.includes('%2Fproducts%2Ffortnite') ||
    href.includes('/products/fortnite') ||
    href.includes('%2Fproducts%2Fdota-2') ||
    href.includes('/products/dota-2') ||
    href.includes('%2Fproducts%2Ffortnite-hacks') ||
    href.includes('/products/fortnite-hacks')
  ) {
    return checkoutExternalUrl('dota2');
  }

  return href;
}
