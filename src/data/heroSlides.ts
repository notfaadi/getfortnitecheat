import type { ProductSlide } from './products';

const gameplay = '/images/gameplay';

/** Homepage hero carousel — real Fortnite gameplay screenshots. */
export const heroSlides: ProductSlide[] = [
  {
    src: `${gameplay}/hero-slide-01.png`,
    alt: 'Fortnite player ESP showing enemy names and distance through walls',
    caption: 'Player ESP',
    captionDesc: 'Enemy tags, health readouts, and distance markers through builds.',
  },
  {
    src: `${gameplay}/hero-slide-02.png`,
    alt: 'Fortnite wallhack overlay revealing opponent wireframe through wood builds',
    caption: 'Wallhack ESP',
    captionDesc: 'Skeleton and distance overlay for box fights and edits.',
  },
  {
    src: `${gameplay}/hero-slide-03.png`,
    alt: 'Fortnite ESP wireframe on opponent inside a metal room',
    caption: 'Skeleton ESP',
    captionDesc: 'Clear target lines when opponents hold angles indoors.',
  },
  {
    src: `${gameplay}/hero-slide-04.png`,
    alt: 'Fortnite Battle Royale elimination in snowy zone',
    caption: 'Ranked ready',
    captionDesc: 'Conservative presets tuned for public Battle Royale queues.',
  },
  {
    src: `${gameplay}/hero-slide-05.png`,
    alt: 'Fortnite scoped rifle hit with damage numbers',
    caption: 'Aim assist',
    captionDesc: 'Smooth tracking and trigger timing for medium-range fights.',
  },
  {
    src: `${gameplay}/hero-slide-06.png`,
    alt: 'Fortnite build fight on snowy rooftop with SMG',
    caption: 'Build fights',
    captionDesc: 'ESP and aim profiles for piece control and box fights.',
  },
  {
    src: `${gameplay}/hero-slide-07.png`,
    alt: 'Fortnite desert biome combat with assault rifle',
    caption: 'Third-party awareness',
    captionDesc: 'Rotate with radar cues before taking mid-game fights.',
  },
  {
    src: `${gameplay}/hero-slide-08.png`,
    alt: 'Fortnite sniper scope view on target in industrial POI',
    caption: 'Precision aim',
    captionDesc: 'Scope-friendly smoothing for Red-Eye and sniper loadouts.',
  },
  {
    src: `${gameplay}/hero-slide-09.png`,
    alt: 'Fortnite player on metal build structure during endgame',
    caption: 'Endgame overlays',
    captionDesc: 'Readable ESP when zones tighten and builds stack up.',
  },
];
