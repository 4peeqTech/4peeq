const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'club');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.jpeg|\.jpg/i, '.webp'));
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted ${file} to ${path.basename(outputPath)}`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
