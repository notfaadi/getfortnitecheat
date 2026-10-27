import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsDir = path.join(
  process.env.USERPROFILE ?? '',
  '.cursor',
  'projects',
  'c-Users-Faadi-Khan-fortnite-cheats',
  'assets',
);

const A = (uuid) =>
  `c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-${uuid}.png`;

/** One unique source asset per blog slug (25 posts, 25 images). */
const slugToAsset = {
  'dota-2-cheat-codes-guide': A('520f358c-3d20-4dc3-97fc-88682828c735'),
  'dota-2-console-cheats-tips': A('cdf8e31d-8a8a-4c7a-ab49-b9a4a66e4624'),
  'how-to-use-dota-2-cheat-codes': A('0616efb0-99e0-4a6a-94c0-dcc5b798ed10'),
  'dota-2-cheats-features-guide': A('ec4a4228-c2da-4c1f-a1e7-fc9a2dbcf4ee'),
  'dota-2-console-commands-cheats': A('2c081ae2-94ea-470a-89e1-a0fc31216528'),
  'dota-2-lite-vs-pro': A('338941df-178a-4630-bdcd-6cf124e6c75f'),
  'dota-2-elite-tier-guide': A('1c43e86f-b451-409a-861f-6182308b546a'),
  'dota-2-scripts-ranked-mmr': A('8868008a-1f4d-4450-a367-3f1d3d7e4a12'),
  'dota-2-map-hack-setup': A('0d6d2a09-6052-43d3-a920-0d06cabe41df'),
  'dota-2-zoom-hack-guide': A('f76c576d-f917-457a-bbe8-c890f5779d69'),
  'dota-2-skin-changer-guide': A('c4aa0b45-490f-42ac-8222-7fb37474b956'),
  'vac-patch-day-checklist': A('5323c70e-fff0-40f8-a553-90e6a847b91c'),
  'dota-2-hwid-spoofer-after-ban': A('685e454b-b53a-466d-9db8-6c732e64db1f'),
  'how-to-buy-dota-2-cheats-2026': A('b993593d-f8bf-40b0-9113-42720757c6f8'),
  'dota-2-auto-combo-hero-scripts': A('ff2e2c75-8cf7-4ed9-a76b-ea4dc200e1fc'),
  'valve-anti-cheat-unable-to-verify': A('c388e7e6-bb63-471d-91f0-830b893c877c'),
  'dota-2-external-cheat-guide': A('cd64301c-c3ac-4c1a-b4d8-eadccdba5765'),
  'dota-2-stream-proof-setup': A('5a3b4116-2328-472e-9c54-431bdae5d12b'),
  // Troubleshooting — unique (no copies of other slugs)
  'fortnite-loader-not-starting': A('1e682c68-fd44-4bd9-9210-3ffcdcebb26e'),
  'fortnite-esp-not-visible': A('09b215a8-2504-44ce-9023-98d2484ab9b0'),
  'fortnite-crash-combat-modules': A('20399a14-1116-4581-9c92-19f0938baf74'),
  // Updates — unique
  'fortnite-season-update-loader': A('100a7bb1-b771-49f7-82a3-9faa5cddb9aa'),
  'fortnite-eac-maintenance-guide': A('4f6ee311-cada-4a26-b548-19bdd5545e2f'),
  'fortnite-status-banner-guide': A('3f8ba160-b52a-42bc-82cf-4708ac19fca5'),
  'fortnite-config-rollback-guide': A('60758462-e0b8-455f-840d-48df99e417a5'),
};

const blogDir = path.join(root, 'public', 'images', 'blog');
const widths = [320, 400, 512, 640, 960];

async function writeBlogPng(sourcePath, slug) {
  const out = path.join(blogDir, `${slug}.png`);
  await sharp(sourcePath)
    .resize(1920, 1080, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8 })
    .toFile(out);

  for (const file of fs.readdirSync(blogDir)) {
    if (file.startsWith(`${slug}-`) && file.endsWith('.webp')) {
      fs.unlinkSync(path.join(blogDir, file));
    }
  }

  for (const width of widths) {
    await sharp(out)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(path.join(blogDir, `${slug}-${width}.webp`));
  }
}

const usedSources = new Set();
for (const [slug, file] of Object.entries(slugToAsset)) {
  if (usedSources.has(file)) {
    console.error('Duplicate source mapping:', file, slug);
    process.exit(1);
  }
  usedSources.add(file);
  const src = path.join(assetsDir, file);
  if (!fs.existsSync(src)) {
    console.error('Missing asset:', src);
    process.exit(1);
  }
  await writeBlogPng(src, slug);
  console.log(`${slug}.png`);
}

const hashes = new Map();
for (const slug of Object.keys(slugToAsset)) {
  const out = path.join(blogDir, `${slug}.png`);
  const hash = (await import('node:crypto')).createHash('md5').update(fs.readFileSync(out)).digest('hex');
  if (hashes.has(hash)) {
    console.error('Duplicate PNG output:', slug, 'same as', hashes.get(hash));
    process.exit(1);
  }
  hashes.set(hash, slug);
}

console.log(`Assigned ${Object.keys(slugToAsset).length} unique blog images.`);
