import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd());

const replacements = [
  ['/products/dota-2-cheats/', '/products/fortnite-hacks/'],
  ['https://dotacheats.com', 'http://localhost:4321'],
  ['dotacheats.com', 'localhost:4321'],
  ['support@dotacheats.com', 'support@fortnitehacks.local'],
  ['DotaCheats', 'Fortnite Hacks'],
  ['dota-2-cheats', 'fortnite-hacks'],
  ['Dota 2 Lite', 'Fortnite Lite'],
  ['Dota 2 Pro', 'Fortnite Pro'],
  ['Dota 2 Elite', 'Fortnite Elite'],
  ['Dota 2', 'Fortnite'],
  ['dota 2', 'Fortnite'],
  ['dota cheats', 'Fortnite hacks'],
  ['dota cheat', 'Fortnite hack'],
  ['Dota cheats', 'Fortnite hacks'],
  ['Valve Anti-Cheat', 'Easy Anti-Cheat'],
  ['Valve Terms of Use', 'Epic Games Terms of Service'],
  ['Valve review', 'Epic review'],
  ['Valve', 'Epic'],
  ['VAC', 'EAC'],
  ['Steam', 'Epic Games'],
  ['Ranked and Turbo', 'Ranked and Zero Build'],
  ['ranked and Turbo', 'ranked and Zero Build'],
  ['Turbo preset', 'Zero Build preset'],
  ['Turbo-friendly', 'Zero Build friendly'],
  ['Turbo', 'Zero Build'],
  ['Map Hack / ESP', 'Player ESP'],
  ['Map hack / ESP', 'Player ESP'],
  ['map hack suite', 'full ESP suite'],
  ['Map hack suite', 'Full ESP suite'],
  ['map hack', 'ESP'],
  ['Map hack', 'ESP'],
  ['Map Hack', 'ESP'],
  ['Minimap hack', 'Minimap ESP'],
  ['minimap hack', 'minimap ESP'],
  ['Auto Combo', 'Triggerbot'],
  ['Auto Farm Bot', 'Loot Farmer'],
  ['Auto Kill Steal', 'Auto Finish'],
  ['Auto Dagon', 'Quick Swap'],
  ['Orbwalker', 'Recoil control'],
  ['Smart Cast', 'Smart aim'],
  ['Zoom Hack', 'FOV extender'],
  ['Zoom hack', 'FOV extender'],
  ['zoom hack', 'FOV extender'],
  ['Skin Changer', 'Skin Unlocker'],
  ['skin changer', 'skin unlocker'],
  ['Hero ESP', 'Player ESP'],
  ['hero ESP', 'player ESP'],
  ['hero boxes', 'player boxes'],
  ['Ward & sentry locator', 'Loot & chest ESP'],
  ['ward ESP', 'loot ESP'],
  ['Ward ESP', 'Loot ESP'],
  ['Rune spawn timers', 'Storm circle alerts'],
  ['Rune timers', 'Storm timers'],
  ['rune timers', 'storm timers'],
  ['Invoker', 'AR meta'],
  ['Phantom Assassin', 'SMG rush'],
  ['Lion', 'Shotgun meta'],
  ['fog of war', 'render distance'],
  ['Jungle camp', 'Loot route'],
  ['jungle camp', 'loot route'],
  ['Jungle pathing', 'Loot pathing'],
  ['jungle pathing', 'loot pathing'],
  ['high-MMR', 'high-ranked'],
  ['MMR', 'ranked points'],
  ['teamfight', 'build fight'],
  ['gank', 'third-party'],
  ['Ganks', 'Third-parties'],
  ['mid push', 'mid-game push'],
  ['Hero-specific', 'Weapon-specific'],
  ['per-hero', 'per-weapon'],
  ['hero configs', 'loadout configs'],
  ['hero outfits', 'outfit skins'],
  ['Hero skin swap', 'Outfit skin swap'],
  ['Arcana preview', 'Legendary skin preview'],
  ['arcanas', 'legendary skins'],
  ['immortals', 'exclusive skins'],
  ['Buy Dota 2 Cheats', 'Buy Fortnite Hacks'],
  ['reqSteam', 'reqEpic'],
  ['DotaCheats home', 'Fortnite Hacks home'],
  ['Join DotaCheats on Discord', 'Join Fortnite Hacks on Discord'],
];

const dirs = [
  path.join(root, 'src'),
  path.join(root, 'public'),
  path.join(root, 'scripts'),
];

const skipFiles = new Set([
  path.join(root, 'scripts', 'rebrand-fortnite.mjs'),
]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(ts|astro|mjs|css|txt|webmanifest|svg|md)$/i.test(ent.name)) out.push(p);
  }
  return out;
}

let touched = 0;
for (const dir of dirs) {
  for (const file of walk(dir)) {
    if (skipFiles.has(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    const before = content;
    for (const [from, to] of replacements) {
      content = content.split(from).join(to);
    }
    if (content !== before) {
      fs.writeFileSync(file, content);
      touched += 1;
    }
  }
}

console.log(`Rebrand applied to ${touched} files.`);
