import sharp from 'sharp';
import { readFile } from 'fs/promises';

const NAVY = '#15142b';
const svg = await readFile('assets/favicon.svg');

// --- App icons / favicons (from the SVG badge) ---
const icons = [
  ['assets/favicon-32.png', 32],
  ['assets/favicon-180.png', 180],   // apple-touch-icon
  ['assets/favicon-192.png', 192],   // android / pwa
  ['assets/favicon-512.png', 512],
];

for (const [out, size] of icons) {
  await sharp(svg).resize(size, size).png().toFile(out);
  console.log(`${out}  (${size}x${size})`);
}

// --- Social share card (Open Graph / Twitter), 1200x630 ---
const OG_W = 1200, OG_H = 630;
const logo = await sharp('assets/logo-blanco.png')
  .resize({ width: 760, withoutEnlargement: true })
  .toBuffer();
const { height: logoH } = await sharp(logo).metadata();

await sharp({
  create: { width: OG_W, height: OG_H, channels: 4, background: NAVY },
})
  .composite([{ input: logo, top: Math.round((OG_H - logoH) / 2), left: Math.round((OG_W - 760) / 2) }])
  .png()
  .toFile('assets/og-image.png');
console.log('assets/og-image.png  (1200x630)');
