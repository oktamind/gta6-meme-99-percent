// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an AI-made GTA 6 meme, posted from the
// public @oktamind account with make.fun (link + @makefunai) and the play
// code in its text. This program does the one mechanical job the bounty
// asks of it: copy POST.json from the repository root to the output
// directory, where the gate reads the post's address and then reads the
// post from X. Nothing written here is judged.
//
// Local run (Node 22):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
