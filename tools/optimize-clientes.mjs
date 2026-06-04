import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const SRC = 'Clientes';
const OUT = 'public/clientes/opt';
const LONG_MAX = 1600;
const QUALITY = 80;

const FILES = [
  'IMG-20250704-WA0045.jpg',
  'IMG-20250428-WA0047.jpg',
  '20250612_144946.jpg',
  'IMG-20251230-WA0265(1).jpg',
  '20250724_174526.jpg',
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
