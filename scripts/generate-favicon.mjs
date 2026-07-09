import sharp from "sharp";
import { writeFileSync } from "fs";

const LIME = [0xb5, 0xe8, 0x4b];
const DARK = [0x0d, 0x0f, 0x14];
const W = 32;
const H = 32;
const HALF = W / 2;
const R = 6;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" rx="4" fill="rgb(${DARK[0]},${DARK[1]},${DARK[2]})"/>
  <path d="M8 25 L16 6 L24 25" stroke="rgb(${LIME[0]},${LIME[1]},${LIME[2]})" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M11.5 18 h9" stroke="rgb(${LIME[0]},${LIME[1]},${LIME[2]})" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="24" cy="8" r="1.8" fill="rgb(${LIME[0]},${LIME[1]},${LIME[2]})" opacity="0.9"/>
</svg>`;

const sizes = [16, 32, 48, 64, 128, 256];

// Generate all PNG sizes
const pngBuffers = await Promise.all(
  sizes.map((s) => sharp(Buffer.from(svg)).resize(s, s).png().toBuffer()),
);

// Generate ICO (embed 32x32 PNG)
function createIco(pngBuffer, w, h) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count: 1

  const entry = Buffer.alloc(16);
  entry.writeUInt8(w >= 256 ? 0 : w, 0); // width
  entry.writeUInt8(h >= 256 ? 0 : h, 1); // height
  entry.writeUInt8(0, 2); // colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(pngBuffer.length, 8); // size
  entry.writeUInt32LE(22, 12); // offset (header 6 + entry 16 = 22)

  return Buffer.concat([header, entry, pngBuffer]);
}

const ico32 = createIco(pngBuffers[1], 32, 32);

writeFileSync("public/favicon.ico", ico32);
writeFileSync("public/favicon-16.png", pngBuffers[0]);
writeFileSync("public/favicon-32.png", pngBuffers[1]);

// Generate apple-touch-icon (180x180)
const apple = await sharp(Buffer.from(svg)).resize(180, 180).png().toBuffer();
writeFileSync("public/apple-touch-icon.png", apple);

console.log("Favicons generated!");
