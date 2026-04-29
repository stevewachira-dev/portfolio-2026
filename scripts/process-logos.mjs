import { Jimp } from 'jimp';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGO_DIR = path.join(__dirname, '..', 'logo');
const OUT_DIR = path.join(__dirname, '..', 'public', 'logos');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const LOGOS = [
  { file: '9da973b0d947f9337f419b7746151d5f.jpg', name: 'coderabbit', removeBg: true },
  { file: 'ROCCAT-MAGMA-Keyboard-Logo-1.jpg',     name: 'roccat',      removeBg: true },
  { file: 'download (3).png',                     name: 'skullcandy',  removeBg: true },
  { file: 'download (4).png',                     name: 'trender',     removeBg: true },
  { file: 'surgent-logo.png',                     name: 'surgent',     removeBg: false },
  { file: 'tplink.png',                           name: 'tplink',      removeBg: false },
];

const TOLERANCE = 35;

function colorDist(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

async function removeBackground(inputPath) {
  const image = await Jimp.read(inputPath);
  const { width, height } = image.bitmap;
  const data = image.bitmap.data; // raw RGBA buffer

  const visited = new Uint8Array(width * height);
  const queue = [];

  const enqueue = (x, y) => {
    const i = y * width + x;
    if (visited[i]) return;
    const ri = i * 4;
    const r = data[ri], g = data[ri + 1], b = data[ri + 2];
    if (colorDist(r, g, b, 255, 255, 255) < TOLERANCE) {
      visited[i] = 1;
      queue.push(x, y); // flat pair array for speed
    }
  };

  // Seed from all 4 edges
  for (let x = 0; x < width; x++) { enqueue(x, 0); enqueue(x, height - 1); }
  for (let y = 0; y < height; y++) { enqueue(0, y); enqueue(width - 1, y); }

  let qi = 0;
  while (qi < queue.length) {
    const x = queue[qi++];
    const y = queue[qi++];
    const ri = (y * width + x) * 4;
    data[ri + 3] = 0; // make transparent

    if (x > 0)         enqueue(x - 1, y);
    if (x < width - 1) enqueue(x + 1, y);
    if (y > 0)         enqueue(x, y - 1);
    if (y < height - 1) enqueue(x, y + 1);
  }

  return await image.getBuffer('image/png');
}

async function toWebP(inputBuffer, outputPath) {
  await sharp(inputBuffer)
    .webp({ quality: 85, lossless: false, effort: 6 })
    .toFile(outputPath);
  const { size } = fs.statSync(outputPath);
  console.log(`  → ${path.basename(outputPath)} (${(size / 1024).toFixed(1)} KB)`);
}

async function main() {
  for (const { file, name, removeBg } of LOGOS) {
    process.stdout.write(`${file}... `);
    const inputPath = path.join(LOGO_DIR, file);
    const buf = removeBg
      ? await removeBackground(inputPath)
      : fs.readFileSync(inputPath);
    await toWebP(buf, path.join(OUT_DIR, `${name}.webp`));
  }
  console.log('\nDone. Files saved to public/logos/');
}

main().catch(console.error);
