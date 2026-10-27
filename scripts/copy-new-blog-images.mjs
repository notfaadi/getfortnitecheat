import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const blogDir = path.join(root, 'public', 'images', 'blog');
const widths = [320, 400, 512, 640, 960];

const newSlugs = [
  'fortnite-loader-not-starting',
  'fortnite-esp-not-visible',
  'fortnite-crash-combat-modules',
  'fortnite-season-update-loader',
  'fortnite-eac-maintenance-guide',
  'fortnite-status-banner-guide',
  'fortnite-config-rollback-guide',
];

const sources = [
  'dota-2-hwid-spoofer-after-ban.png',
  'dota-2-map-hack-setup.png',
  'dota-2-auto-combo-hero-scripts.png',
  'vac-patch-day-checklist.png',
  'valve-anti-cheat-unable-to-verify.png',
  'dota-2-cheats-features-guide.png',
  'dota-2-stream-proof-setup.png',
];

async function writeVariants(slug, sourceFile) {
  const src = path.join(blogDir, sourceFile);
  const out = path.join(blogDir, `${slug}.png`);
  if (!fs.existsSync(src)) {
    console.error('Missing source', src);
    process.exit(1);
  }
  await fs.promises.copyFile(src, out);
  for (const width of widths) {
    await sharp(out)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(path.join(blogDir, `${slug}-${width}.webp`));
  }
  console.log(`${slug}.png`);
}

for (let i = 0; i < newSlugs.length; i += 1) {
  await writeVariants(newSlugs[i], sources[i]);
}

console.log('New blog images ready.');
