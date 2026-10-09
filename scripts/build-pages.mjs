// Builds the static site for GitHub Pages into _site/.
// public/index.html is written without <html>/<head> (that is the shape the Artifact publisher expects),
// so this wraps it in a full document and adds link-preview tags for sharing.
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, '_site');
const SITE_URL = (process.env.SITE_URL || '').replace(/\/$/, '');
const DESCRIPTION = 'CS2 smoke and flash lineups by map and side, with where-to-stand, where-to-aim and result screenshots.';

const head = [
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
  `<meta name="description" content="${DESCRIPTION}">`,
  '<meta property="og:type" content="website">',
  '<meta property="og:title" content="Nade Book">',
  `<meta property="og:description" content="${DESCRIPTION}">`,
  SITE_URL && `<meta property="og:url" content="${SITE_URL}/">`,
  SITE_URL && `<meta property="og:image" content="${SITE_URL}/img/dust2/midt-aim.jpg">`,
  '<meta name="twitter:card" content="summary_large_image">',
].filter(Boolean).join('');

const page = await readFile(path.join(ROOT, 'public', 'index.html'), 'utf8');
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
for (const dir of ['img', 'clips']) {
  await cp(path.join(ROOT, 'public', dir), path.join(OUT, dir), { recursive: true }).catch((e) => { if (e.code !== 'ENOENT') throw e; });
}
await writeFile(path.join(OUT, 'index.html'), `<!doctype html><html lang="en"><head>${head}</head><body>${page}</body></html>`);
console.log(`Built ${path.relative(ROOT, OUT)}/ (${SITE_URL || 'no SITE_URL set'})`);
