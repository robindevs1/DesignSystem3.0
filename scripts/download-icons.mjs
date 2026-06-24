import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';

const OUT_DIR = 'apps/docs/public/assets/icons';
mkdirSync(OUT_DIR, { recursive: true });

const OUTLINED_URL = (name) =>
  `https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/${name}/materialsymbolsoutlined/${name}_24px.svg`;

const FILLED_URL = (name) =>
  `https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/${name}/materialsymbolsrounded/${name}_fill1_24px.svg`;

const ICONS = [
  { coleman: 'information', material: 'info',                 hasFill: true },
  { coleman: 'error',       material: 'error',                hasFill: true },
  { coleman: 'success',     material: 'check_circle',         hasFill: true },
  { coleman: 'warning',     material: 'warning',              hasFill: true },
  { coleman: 'recommended', material: 'recommend',            hasFill: true },
  { coleman: 'plus',        material: 'add',                  hasFill: false },
  { coleman: 'chevron-down', material: 'keyboard_arrow_down', hasFill: false },
  { coleman: 'chevron-up',  material: 'keyboard_arrow_up',    hasFill: false },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log(`  ✓ ${dest}`);
}

for (const { coleman, material, hasFill } of ICONS) {
  await download(OUTLINED_URL(material), `${OUT_DIR}/${coleman}-outlined.svg`);
  if (hasFill) {
    await download(FILLED_URL(material), `${OUT_DIR}/${coleman}-filled.svg`);
  }
}

console.log('\nDone — all icons downloaded.');
