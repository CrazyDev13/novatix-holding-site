import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const publicDir = path.resolve('public');
const svgPath = path.join(publicDir, 'favicon.svg');

const sizes = [16, 32, 48, 192, 512];

for (const size of sizes) {
  const output = path.join(publicDir, size === 192 ? 'favicon-192.png' : `favicon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(output);
  console.log(`Created ${path.basename(output)} (${size}x${size})`);
}

const appleTouch = path.join(publicDir, 'apple-touch-icon.png');
await sharp(svgPath).resize(180, 180).png().toFile(appleTouch);
console.log('Created apple-touch-icon.png (180x180)');

const icoSource = path.join(publicDir, 'favicon-32.png');
const ico = await pngToIco([icoSource, path.join(publicDir, 'favicon-16.png')]);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
console.log('Created favicon.ico');
