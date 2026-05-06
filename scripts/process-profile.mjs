import sharp from 'sharp';
import { resolve } from 'node:path';

const input = '/Users/user/Desktop/profile.jpeg';
const out = resolve(process.cwd(), 'public', 'profile.jpeg');

// Source: 720 x 1280 (9:16). Crop to 4:5 portrait centered on face/shoulders.
// 720 wide → 900 tall for 4:5.  Start y=60 to keep top of hair, end at 960 (cuts mid-chest, less backpack).
await sharp(input)
  .extract({ left: 0, top: 60, width: 720, height: 900 })
  // Tone down the chromatic aberration & oversaturated pink, lift shadows a touch
  .modulate({ saturation: 0.88, brightness: 1.02 })
  .median(1)              // mild noise/aberration reduction
  .sharpen(0.5)           // restore subtle crispness
  .jpeg({ quality: 86, mozjpeg: true, progressive: true })
  .toFile(out);

console.log('profile.jpeg written →', out);
