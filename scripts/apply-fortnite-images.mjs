import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsLocal = path.join(root, 'public', 'images', 'sources');
const assetsCursor = path.join(process.env.USERPROFILE ?? '', '.cursor', 'projects', 'c-Users-Faadi-Khan-fortnite-cheats', 'assets');
const assets = fs.existsSync(assetsLocal) ? assetsLocal : assetsCursor;

const sources = [
  path.join(assets, 'fortnite-br-island.jpg'),
  path.join(assets, 'fortnite-br-combat.jpg'),
  path.join(assets, 'fortnite-br-loot.jpg'),
  path.join(assets, 'fortnite-br-skins.jpg'),
  path.join(assets, 'fortnite-br-setup.jpg'),
];

const crops = [
  { left: '0%', top: '0%', width: '100%', height: '100%' },
  { left: '10%', top: '5%', width: '80%', height: '80%' },
  { left: '5%', top: '10%', width: '90%', height: '75%' },
  { left: '15%', top: '0%', width: '70%', height: '100%' },
  { left: '0%', top: '15%', width: '100%', height: '70%' },
  { left: '20%', top: '10%', width: '60%', height: '80%' },
];

function listPngs(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.png'))
    .map((f) => path.join(dir, f));
}

function removeDerived(dirPath, baseName) {
  const dir = path.dirname(dirPath);
  for (const file of fs.readdirSync(dir)) {
    if (file.startsWith(baseName) && file.endsWith('.webp')) {
      fs.unlinkSync(path.join(dir, file));
    }
  }
}

async function exportPng(sourcePath, outPath, crop, index) {
  const meta = await sharp(sourcePath).metadata();
  const w = meta.width ?? 1920;
  const h = meta.height ?? 1080;
  const c = crops[index % crops.length];
  const left = Math.round((parseFloat(c.left) / 100) * w);
  const top = Math.round((parseFloat(c.top) / 100) * h);
  const width = Math.round((parseFloat(c.width) / 100) * w);
  const height = Math.round((parseFloat(c.height) / 100) * h);

  removeDerived(outPath, path.basename(outPath, '.png'));

  await sharp(sourcePath)
    .extract({
      left: Math.min(left, w - 2),
      top: Math.min(top, h - 2),
      width: Math.min(width, w - left),
      height: Math.min(height, h - top),
    })
    .resize(1920, 1080, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8 })
    .toFile(outPath);
}

async function replaceDir(relativeDir) {
  const files = listPngs(relativeDir);
  for (let i = 0; i < files.length; i += 1) {
    const source = sources[i % sources.length];
    if (!fs.existsSync(source)) {
      throw new Error(`Missing source image: ${source}`);
    }
    console.log(`${path.relative(root, files[i])} <- ${path.basename(source)}`);
    await exportPng(source, files[i], crops[i % crops.length], i);
  }
}

async function updateLogo() {
  const logoSrc = path.join(assets, 'fortnite-hacks-logo.jpg');
  const logoPng = path.join(root, 'public', 'logo-source.png');
  await sharp(logoSrc).resize(512, 512, { fit: 'cover' }).png().toFile(logoPng);

  const logoSvg = path.join(root, 'public', 'logo.svg');
  const faviconSvg = path.join(root, 'public', 'favicon.svg');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" role="img" aria-label="Fortnite Hacks">
  <defs>
    <linearGradient id="bg" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
      <stop stop-color="#221533"/>
      <stop offset="1" stop-color="#0A0D10"/>
    </linearGradient>
    <linearGradient id="accent" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9654FF"/>
      <stop offset="1" stop-color="#7F3DEE"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#bg)"/>
  <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" stroke="#2A333D" stroke-width="1"/>
  <image href="/logo-source.png" x="8" y="8" width="48" height="48" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip)"/>
  <clipPath id="clip"><rect x="8" y="8" width="48" height="48" rx="12"/></clipPath>
</svg>`;
  fs.writeFileSync(logoSvg, svg);
  fs.writeFileSync(faviconSvg, svg.replace('viewBox="0 0 64 64"', 'viewBox="0 0 64 64"'));

  const favicon32 = path.join(root, 'public', 'favicon-32.png');
  const favicon16 = path.join(root, 'public', 'favicon-16.png');
  const apple = path.join(root, 'public', 'apple-touch-icon.png');
  await sharp(logoPng).resize(32, 32).png().toFile(favicon32);
  await sharp(logoPng).resize(16, 16).png().toFile(favicon16);
  await sharp(logoPng).resize(180, 180).png().toFile(apple);
  console.log('Updated logo.svg, favicon.svg, and PNG icons.');
}

for (const src of sources) {
  if (!fs.existsSync(src)) {
    console.error('Asset not found:', src);
    process.exit(1);
  }
}

await replaceDir('public/images/gameplay');
await replaceDir('public/images/blog');
await updateLogo();
console.log('Done. Run: npm run optimize:images');
