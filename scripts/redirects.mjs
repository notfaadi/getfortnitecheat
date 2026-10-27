/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/fortnite-hacks/'],
  ['/cheats/', '/products/fortnite-hacks/'],
  ['/cheats/lite', '/products/fortnite-hacks/'],
  ['/cheats/lite/', '/products/fortnite-hacks/'],
  ['/cheats/pro', '/products/fortnite-hacks/'],
  ['/cheats/pro/', '/products/fortnite-hacks/'],
  ['/cheats/elite', '/products/fortnite-hacks/elite/'],
  ['/cheats/elite/', '/products/fortnite-hacks/elite/'],
  ['/cheats/compare', '/blog/dota-2-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/dota-2-lite-vs-pro/'],
  ['/products/fortnite-hacks/utilities', '/products/fortnite-hacks/utilities/'],
  ['/products/fortnite-hacks', '/products/fortnite-hacks/'],
  ['/products/fortnite-hacks/account-recovery', '/products/fortnite-hacks/ugc/'],
  ['/products/fortnite-hacks/account-recovery/', '/products/fortnite-hacks/ugc/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
