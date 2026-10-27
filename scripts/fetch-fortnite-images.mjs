import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

/** Free-to-use Fortnite / battle royale / gaming photos (Pexels + Wikimedia). */
const sourcePool = [
  'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7915284/pexels-photo-7915284.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7869137/pexels-photo-7869137.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1591455/pexels-photo-1591455.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/21067/pexels-photo-21067.jpg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'FortniteHacksLocalSetup/1.0 (image replacement script)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function toHeroPng(buffer, outPath) {
  await sharp(buffer)
    .resize(1920, 1080, { fit: 'cover', position: 'centre' })
    .modulate({ saturation: 1.08, brightness: 1.02 })
    .png({ compressionLevel: 8 })
    .toFile(outPath);
}

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

async function replacePngs(relativeDir) {
  const files = listPngs(relativeDir);
  let i = 0;
  for (const file of files) {
    const url = sourcePool[i % sourcePool.length];
    i += 1;
    const base = path.basename(file, '.png');
    removeDerived(file, base);
    console.log(`Fetching ${url} -> ${path.relative(root, file)}`);
    const buf = await fetchBuffer(url);
    await toHeroPng(buf, file);
  }
}

await replacePngs('public/images/gameplay');
await replacePngs('public/images/blog');
console.log('Fortnite image replacement complete. Run: npm run optimize:images');
