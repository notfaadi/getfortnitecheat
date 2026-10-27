/** Blog index topic filters + Starwind sort select. */
export function initBlogIndexFilters() {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  const featuredWrap = document.querySelector<HTMLElement>('[data-blog-featured]');
  if (!grid) return;

  const emptyMessage = emptyEl?.dataset.emptyMessage ?? 'No articles match this filter.';
  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');

  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]');

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const apply = () => {
    const tag = activeTag();
    const sort = getSort();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const match = tag === 'all' || el.getAttribute('data-tag') === tag;
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    if (featuredWrap) {
      const featuredMatch = tag === 'all' || featuredWrap.getAttribute('data-tag') === tag;
      featuredWrap.classList.toggle('hidden', !featuredMatch);
    }

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }
  };

  const setActiveFilter = (value: string) => {
    filters.forEach((btn) => {
      const isActive = btn.getAttribute('data-blog-filter') === value;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    apply();
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-blog-filter') ?? 'all';
      setActiveFilter(value);

      const url = new URL(window.location.href);
      if (value === 'all') url.searchParams.delete('tag');
      else url.searchParams.set('tag', value);
      window.history.replaceState({}, '', url);
    });
  });

  const onSortChange = () => apply();

  if (sortRoot) {
    sortRoot.addEventListener('starwind:value-change', onSortChange);
  }
  document.addEventListener('starwind:value-change', onSortChange, true);

  const selectRoot = getSortSelectRoot();
  if (selectRoot) {
    const observer = new MutationObserver(onSortChange);
    observer.observe(selectRoot, { attributes: true, attributeFilter: ['data-value'] });
  }

  const tagFromUrl = new URLSearchParams(window.location.search).get('tag');
  if (tagFromUrl && document.querySelector(`[data-blog-filter="${tagFromUrl}"]`)) {
    setActiveFilter(tagFromUrl);
  } else {
    requestAnimationFrame(apply);
    window.setTimeout(apply, 0);
  }
}
