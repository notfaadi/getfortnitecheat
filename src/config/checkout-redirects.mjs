/** Zadeyo FDI checkout wrapper (affiliate / deep-link). */
export const ZADEYO_FDI_CODE = 'FDI';

/** Destination paths on zadeyo.com for each module. */
export const ZADEYO_PRODUCT_PATHS = {
  fortnite: '/products/fortnite',
  skinChanger: '/products/skin-changer',
  hwidSpoofer: '/products/hwid-spoofer',
  ugc: '/products/ugc',
};

export function zadeyoCheckoutUrl(zadeyoProductPath) {
  const to = zadeyoProductPath.startsWith('/') ? zadeyoProductPath : `/${zadeyoProductPath}`;
  return `https://zadeyo.com/go/${ZADEYO_FDI_CODE}?to=${encodeURIComponent(to)}`;
}

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  dota2: zadeyoCheckoutUrl(ZADEYO_PRODUCT_PATHS.fortnite),
  skinChanger: zadeyoCheckoutUrl(ZADEYO_PRODUCT_PATHS.skinChanger),
  hwidSpoofer: zadeyoCheckoutUrl(ZADEYO_PRODUCT_PATHS.hwidSpoofer),
  ugc: zadeyoCheckoutUrl(ZADEYO_PRODUCT_PATHS.ugc),
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/fortnite', CHECKOUT_URLS.dota2],
  ['/go/fortnite/', CHECKOUT_URLS.dota2],
  ['/go/dota-2', CHECKOUT_URLS.dota2],
  ['/go/dota-2/', CHECKOUT_URLS.dota2],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
