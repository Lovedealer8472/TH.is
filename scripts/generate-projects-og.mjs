import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const width = 1200;
const height = 630;
const outputDir = join(root, 'public', 'og');
const outputPath = join(outputDir, 'projects.png');

const pills = ['Talgervill', 'REST API', 'Sérlausnir', 'Tilraunir'];

function pillGroup(items) {
  const pillWidth = 180;
  const gap = 14;
  const totalWidth = items.length * pillWidth + (items.length - 1) * gap;
  const startX = (width - totalWidth) / 2;
  const y = 548;

  return items
    .map((label, index) => {
      const x = startX + index * (pillWidth + gap);
      return `
        <rect x="${x}" y="${y}" width="${pillWidth}" height="42" rx="10"
          fill="rgba(31,41,55,0.65)" stroke="rgba(55,65,81,0.8)" stroke-width="1"/>
        <text x="${x + pillWidth / 2}" y="${y + 27}" text-anchor="middle"
          font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="18" fill="#d1d5db">
          ${label}
        </text>
      `;
    })
    .join('');
}

const backgroundSvg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="45%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#0c1929"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="56" y="44" width="1088" height="4" rx="2" fill="url(#accent)"/>
  <text x="600" y="340" text-anchor="middle"
    font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="50" font-weight="700" fill="#f9fafb">
    Verkefni og hugbúnaðarlausnir
  </text>
  <text x="600" y="385" text-anchor="middle"
    font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="24" fill="#9ca3af">
    Smíðað af Tölvuhvíslaranum
  </text>
  ${pillGroup(pills)}
</svg>`);

mkdirSync(outputDir, { recursive: true });

const logoPath = join(root, 'public', 'logo.png');
const logoMeta = await sharp(logoPath).metadata();
const logoWidth = 720;
const logoHeight = Math.round((logoMeta.height ?? 162) * (logoWidth / (logoMeta.width ?? 720)));

const logoBuffer = await sharp(logoPath).resize(logoWidth).png().toBuffer();

await sharp(backgroundSvg)
  .composite([
    {
      input: logoBuffer,
      top: 88,
      left: Math.round((width - logoWidth) / 2),
    },
  ])
  .png()
  .toFile(outputPath);

console.log(`Generated ${outputPath} (${width}x${height})`);
