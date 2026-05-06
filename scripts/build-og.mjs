import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(here, 'og.svg');
const outPath = resolve(here, '..', 'public', 'og.png');

const svg = readFileSync(svgPath);
await sharp(svg, { density: 300 }).resize(1200, 630).png({ quality: 95 }).toFile(outPath);
console.log('og.png written →', outPath);
