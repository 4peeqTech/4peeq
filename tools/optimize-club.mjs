import sharp from 'sharp';
import { stat } from 'fs/promises';
import { join, basename, extname } from 'path';
import { mkdirSync } from 'fs';

const OUT = 'public/club/opt';
const LONG_MAX = 1600;
const QUALITY = 80;

mkdirSync(OUT, { recursive: true });

function sanitize(name) {
  return name.replace(/[\s()]/g, '-').replace(/-+/g, '-').replace(/-$/, '');
}

const FILES = [
  // Pymeton (5)
  { src: 'Pymeton/IMG-20251015-WA0095.jpg' },
  { src: 'Pymeton/IMG-20251125-WA0220.jpg' },
  { src: 'Pymeton/IMG-20251203-WA0085.jpg' },
  { src: 'Pymeton/IMG_6827.JPG' },
  { src: 'Pymeton/Screenshot_20251105_212939_YouTube.jpg' },
  // CUP (6)
  { src: 'CUP/1062-DSC01997.jpg' },
  { src: 'CUP/1086-DSC02035.jpg' },
  { src: 'CUP/1107-DSC02066.jpg' },
  { src: 'CUP/20251121_223727.jpg' },
  { src: 'CUP/645-DSC01371.jpg' },
  { src: 'CUP/659-DSC01385.jpg' },
  // CUP/Padel Edition (7)
  { src: 'CUP/Padel Edition/DSC04063_v1.jpg' },
  { src: 'CUP/Padel Edition/DSC04100_v2.jpg' },
  { src: 'CUP/Padel Edition/_DSC5059.jpg' },
  { src: 'CUP/Padel Edition/_DSC5657.jpg' },
  { src: 'CUP/Padel Edition/_DSC5713_v2.jpg' },
  { src: 'CUP/Padel Edition/_DSC5914.jpg' },
  { src: 'CUP/Padel Edition/_DSC5941.jpg' },
  // 4peeqneta (5)
  { src: '4peeqneta/4peeq (182).jpg' },
  { src: '4peeqneta/4peeq (213).jpg' },
  { src: '4peeqneta/4peeq (221).jpg' },
  { src: '4peeqneta/4peeq (289).jpg' },
  { src: '4peeqneta/4peeq (291).jpg' },
];

for (const { src } of FILES) {
  const name = sanitize(basename(src, extname(src)));
  const dest = join(OUT, name + '.webp');

  const { width, height } = await sharp(src).rotate().metadata().then(m => ({ width: m.width, height: m.height }));
  const isLong = width >= height ? width >= LONG_MAX : height >= LONG_MAX;
  const resize = isLong
    ? { [width >= height ? 'width' : 'height']: LONG_MAX, withoutEnlargement: true }
    : {};

  await sharp(src).rotate().resize(resize).webp({ quality: QUALITY }).toFile(dest);

  const { size } = await stat(dest);
  console.log(`${src} → ${name}.webp  (${(size / 1024).toFixed(0)} KB)`);
}

console.log(`\nDone: ${FILES.length} images → ${OUT}`);
