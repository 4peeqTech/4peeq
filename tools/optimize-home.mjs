import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const SRC = 'public/home';
const OUT = 'public/home/opt';
const LONG_MAX = 1600;
const QUALITY = 80;

const FILES = [
  'IMG-20260227-WA0045.jpg',   // hero
  'IMG-20250606-WA0027.jpg',   // grilla grande
  '156-DSC00745.jpg',          // grilla chica 1
  'IMG-20260523-WA0039.jpg',   // grilla chica 2
  'IMG_20251001_151802_853.webp', // grilla chica 3
  '20250516_235045.jpg',       // grilla chica 4
];

for (const file of FILES) {
  const src = join(SRC, file);
  const name = basename(file, extname(file));
  const dest = join(OUT, name + '.webp');

  const { width, height } = await sharp(src).rotate().metadata().then(m => ({ width: m.width, height: m.height }));
  const isLong = width >= height ? width >= LONG_MAX : height >= LONG_MAX;
  const resize = isLong
    ? { [width >= height ? 'width' : 'height']: LONG_MAX, withoutEnlargement: true }
    : {};

  await sharp(src).rotate().resize(resize).webp({ quality: QUALITY }).toFile(dest);

  const { size } = await stat(dest);
  console.log(`${file} → ${name}.webp  (${(size / 1024).toFixed(0)} KB)`);
}
