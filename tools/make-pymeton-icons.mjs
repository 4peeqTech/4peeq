import sharp from 'sharp';
import { readFile } from 'fs/promises';

const PAPER = '#faf9fc';
const svg = await readFile('assets/pymeton/logopymeton.svg');

// --- Favicons (need an opaque background since the mark has no fill behind it) ---
const icons = [
  ['assets/pymeton/favicon-pymeton-32.png', 32],
  ['assets/pymeton/favicon-pymeton-180.png', 180],
];

for (const [out, size] of icons) {
  const pad = Math.round(size * 0.08);
  const mark = await sharp(svg).resize(size - pad * 2, size - pad * 2, { fit: 'contain' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: PAPER } })
    .composite([{ input: mark, top: pad, left: pad }])
    .png()
    .toFile(out);
  console.log(`${out}  (${size}x${size})`);
}

// --- Social share card (Open Graph / Twitter), 1200x630 ---
const OG_W = 1200, OG_H = 630;
const markHeight = 460;
const mark = await sharp(svg).resize({ height: markHeight }).toBuffer();
const { width: markW } = await sharp(mark).metadata();

await sharp({
  create: { width: OG_W, height: OG_H, channels: 4, background: PAPER },
})
  .composite([{ input: mark, top: Math.round((OG_H - markHeight) / 2), left: Math.round((OG_W - markW) / 2) }])
  .png()
  .toFile('assets/pymeton/og-pymeton.png');
console.log('assets/pymeton/og-pymeton.png  (1200x630)');
