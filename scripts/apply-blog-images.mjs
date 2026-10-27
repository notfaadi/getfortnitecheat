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

const sourceFiles = [
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-520f358c-3d20-4dc3-97fc-88682828c735.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-cd64301c-c3ac-4c1a-b4d8-eadccdba5765.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-ff2e2c75-8cf7-4ed9-a76b-ea4dc200e1fc.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-0d6d2a09-6052-43d3-a920-0d06cabe41df.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-8868008a-1f4d-4450-a367-3f1d3d7e4a12.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-1c43e86f-b451-409a-861f-6182308b546a.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-ec4a4228-c2da-4c1f-a1e7-fc9a2dbcf4ee.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-338941df-178a-4630-bdcd-6cf124e6c75f.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-0616efb0-99e0-4a6a-94c0-dcc5b798ed10.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-f76c576d-f917-457a-bbe8-c890f5779d69.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-b993593d-f8bf-40b0-9113-42720757c6f8.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-5a3b4116-2328-472e-9c54-431bdae5d12b.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-cdf8e31d-8a8a-4c7a-ab49-b9a4a66e4624.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-5323c70e-fff0-40f8-a553-90e6a847b91c.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-685e454b-b53a-466d-9db8-6c732e64db1f.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-c4aa0b45-490f-42ac-8222-7fb37474b956.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-2c081ae2-94ea-470a-89e1-a0fc31216528.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-c388e7e6-bb63-471d-91f0-830b893c877c.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_0551a753754c8a77956aa993f73e2166_images_image-29cddf06-c677-410d-bfae-e92c3cd90114.png',
];

/** Same order as `src/data/blog/posts.ts`. */
const blogSlugs = [
  'dota-2-cheat-codes-guide',
  'dota-2-console-cheats-tips',
  'how-to-use-dota-2-cheat-codes',
  'dota-2-cheats-features-guide',
  'dota-2-console-commands-cheats',
  'dota-2-lite-vs-pro',
  'dota-2-elite-tier-guide',
  'dota-2-scripts-ranked-mmr',
  'dota-2-map-hack-setup',
  'dota-2-zoom-hack-guide',
  'dota-2-skin-changer-guide',
  'vac-patch-day-checklist',
  'dota-2-hwid-spoofer-after-ban',
  'how-to-buy-dota-2-cheats-2026',
  'dota-2-auto-combo-hero-scripts',
  'valve-anti-cheat-unable-to-verify',
  'dota-2-external-cheat-guide',
  'dota-2-stream-proof-setup',
];

/** Per-image slug (19 screenshots → 18 articles; last image → features guide hero). */
const slugBySourceIndex = [
  'dota-2-cheat-codes-guide',
  'dota-2-external-cheat-guide',
  'dota-2-scripts-ranked-mmr',
  'dota-2-map-hack-setup',
  'dota-2-auto-combo-hero-scripts',
  'dota-2-elite-tier-guide',
  'dota-2-cheats-features-guide',
  'dota-2-lite-vs-pro',
  'how-to-use-dota-2-cheat-codes',
  'dota-2-zoom-hack-guide',
  'how-to-buy-dota-2-cheats-2026',
  'dota-2-stream-proof-setup',
  'dota-2-console-cheats-tips',
  'vac-patch-day-checklist',
  'dota-2-hwid-spoofer-after-ban',
  'dota-2-skin-changer-guide',
  'dota-2-console-commands-cheats',
  'valve-anti-cheat-unable-to-verify',
  'dota-2-cheats-features-guide',
];

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
  console.log(`${slug}.png <- ${path.basename(sourcePath)}`);
}

for (const file of sourceFiles) {
  const src = path.join(assetsDir, file);
  if (!fs.existsSync(src)) {
    console.error('Missing:', src);
    process.exit(1);
  }
}

const assigned = new Set();
for (let i = 0; i < sourceFiles.length; i += 1) {
  const slug = slugBySourceIndex[i];
  if (!slug) continue;
  assigned.add(slug);
  await writeBlogPng(path.join(assetsDir, sourceFiles[i]), slug);
}

const missing = blogSlugs.filter((s) => !assigned.has(s));
if (missing.length) {
  console.warn('Posts still using previous PNG (no new screenshot assigned):', missing.join(', '));
}

console.log(`Updated blog images for ${assigned.size} articles.`);
