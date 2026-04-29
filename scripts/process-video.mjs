import ffmpegLib from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import ffprobeStatic from 'ffprobe-static';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT = path.join(__dirname, '..', 'videos', 'Intro Video.mp4');
const OUT_DIR = path.join(__dirname, '..', 'public', 'video');

ffmpegLib.setFfmpegPath(ffmpegPath);
ffmpegLib.setFfprobePath(ffprobeStatic.path);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function run(label, cmd) {
  return new Promise((resolve, reject) => {
    console.log(`\nEncoding ${label}...`);
    const start = Date.now();
    cmd
      .on('progress', ({ percent }) =>
        percent != null && process.stdout.write(`\r  ${percent.toFixed(1)}%`)
      )
      .on('end', () => {
        const elapsed = ((Date.now() - start) / 1000).toFixed(0);
        console.log(`\r  done in ${elapsed}s`);
        resolve();
      })
      .on('error', reject)
      .run();
  });
}

function sizeMB(filePath) {
  return (fs.statSync(filePath).size / 1024 / 1024).toFixed(1) + ' MB';
}

const mp4Out = path.join(OUT_DIR, 'intro.mp4');
const webmOut = path.join(OUT_DIR, 'intro.webm');
const posterOut = path.join(OUT_DIR, 'intro-poster.jpg');

// Poster frame (first frame)
await run('poster', ffmpegLib(INPUT)
  .outputOptions(['-vframes 1', '-q:v 3'])
  .output(posterOut)
);

// H.264 MP4 — universal fallback, 1080p, visually lossless
await run('H.264 MP4', ffmpegLib(INPUT)
  .videoCodec('libx264')
  .outputOptions([
    '-vf scale=1080:-2',   // 1080px wide, height divisible by 2
    '-crf 23',             // quality (18=lossless, 28=compressed)
    '-preset slow',        // better compression at cost of encode time
    '-movflags +faststart',// moov atom at front → plays before full download
    '-c:a aac',            // audio codec
    '-b:a 128k',           // audio bitrate
    '-pix_fmt yuv420p',    // Safari compatibility
  ])
  .output(mp4Out)
);

// VP9 WebM — better compression for Chrome/Firefox
await run('VP9 WebM', ffmpegLib(INPUT)
  .videoCodec('libvpx-vp9')
  .outputOptions([
    '-vf scale=1080:-2',
    '-crf 31',
    '-b:v 0',              // constant quality mode (crf only, no target bitrate)
    '-deadline good',      // balance speed vs quality
    '-cpu-used 2',
    '-c:a libopus',        // audio codec for WebM
    '-b:a 128k',
    '-row-mt 1',           // multi-threaded row encoding
  ])
  .output(webmOut)
);

console.log('\n--- Output sizes ---');
console.log('Poster:', sizeMB(posterOut));
console.log('MP4:   ', sizeMB(mp4Out));
console.log('WebM:  ', sizeMB(webmOut));
console.log('\nDone. Files saved to public/video/');
console.log('\nUse in your component:');
console.log(`  <video autoPlay muted loop playsInline poster="/video/intro-poster.jpg">
    <source src="/video/intro.webm" type="video/webm" />
    <source src="/video/intro.mp4" type="video/mp4" />
  </video>`);
