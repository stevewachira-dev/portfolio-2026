import ffmpegLib from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import ffprobeStatic from 'ffprobe-static';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'video');

ffmpegLib.setFfmpegPath(ffmpegPath);
ffmpegLib.setFfprobePath(ffprobeStatic.path);
fs.mkdirSync(OUT_DIR, { recursive: true });

const VIDEOS = [
  {
    input: 'c:/Users/steve/Pictures/UGC Surgent/UGC Surgent 9.mov',
    slug: 'ugc-surgent-9',
  },
  {
    input: 'c:/Users/steve/Pictures/UGC Surgent/New folder/UGC Surgent - Make $100.mp4',
    slug: 'ugc-surgent-make100',
  },
  {
    input: 'c:/Users/steve/Pictures/UGC Surgent/ugc Surgent 11-refilm.mov',
    slug: 'ugc-surgent-11',
  },
];

function run(label, cmd) {
  return new Promise((resolve, reject) => {
    process.stdout.write(`  ${label}...`);
    const start = Date.now();
    cmd
      .on('progress', ({ percent }) =>
        percent != null && process.stdout.write(`\r  ${label} ${percent.toFixed(0)}%   `)
      )
      .on('end', () => {
        const elapsed = ((Date.now() - start) / 1000).toFixed(0);
        console.log(`\r  ${label} done in ${elapsed}s`);
        resolve();
      })
      .on('error', reject)
      .run();
  });
}

function sizeMB(p) {
  return (fs.statSync(p).size / 1024 / 1024).toFixed(1) + ' MB';
}

for (const { input, slug } of VIDEOS) {
  console.log(`\n── ${slug} ──`);

  const poster = path.join(OUT_DIR, `${slug}-poster.jpg`);
  const mp4    = path.join(OUT_DIR, `${slug}.mp4`);
  const webm   = path.join(OUT_DIR, `${slug}.webm`);

  await run('poster', ffmpegLib(input)
    .outputOptions(['-vframes 1', '-q:v 3'])
    .output(poster)
  );

  await run('H.264 MP4', ffmpegLib(input)
    .videoCodec('libx264')
    .outputOptions([
      '-vf scale=1080:-2',
      '-crf 26',
      '-preset slow',
      '-movflags +faststart',
      '-c:a aac',
      '-b:a 128k',
      '-pix_fmt yuv420p',
    ])
    .output(mp4)
  );

  await run('VP9 WebM', ffmpegLib(input)
    .videoCodec('libvpx-vp9')
    .outputOptions([
      '-vf scale=1080:-2',
      '-crf 33',
      '-b:v 0',
      '-deadline good',
      '-cpu-used 2',
      '-c:a libopus',
      '-b:a 128k',
      '-row-mt 1',
    ])
    .output(webm)
  );

  console.log(`  poster: ${sizeMB(poster)}  mp4: ${sizeMB(mp4)}  webm: ${sizeMB(webm)}`);
}

console.log('\nAll done. Files saved to public/video/');
