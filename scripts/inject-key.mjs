// Reads VITE_OPENAI_API_KEY from .env and writes it into public/chat.js,
// replacing the `window.__AISS_KEY__` runtime lookup with the literal key.
// This guarantees the key is in the deployed bundle regardless of how the
// SSR framework (TanStack Start + Cloudflare Workers) handles env vars.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const envPath = resolve(root, '.env');
const chatPath = resolve(root, 'public', 'chat.js');

let key = process.env.VITE_OPENAI_API_KEY || '';
if (!key && existsSync(envPath)) {
  const raw = readFileSync(envPath, 'utf8');
  // Strip line breaks inside the value (handles wrapped keys) and find VITE_OPENAI_API_KEY=
  const stripped = raw.replace(/\r/g, '');
  const m = stripped.match(/VITE_OPENAI_API_KEY=([^\n]*(?:\n(?![A-Z_]+=)[^\n]*)*)/);
  if (m) key = m[1].replace(/\n/g, '').trim();
}

if (!key) {
  console.warn('[inject-key] WARNING: VITE_OPENAI_API_KEY is empty. chat.js will be served without a key.');
}

const chat = readFileSync(chatPath, 'utf8');
// Replace any existing key assignment with the literal key
const patched = chat.replace(
  /var KEY = [^;]*;/,
  `var KEY = ${JSON.stringify(key)};`
);

if (patched === chat) {
  console.warn('[inject-key] WARNING: no `var KEY = ...;` line found in public/chat.js — nothing replaced.');
} else {
  writeFileSync(chatPath, patched, 'utf8');
  console.log(`[inject-key] OK — embedded key (length ${key.length}) into public/chat.js`);
}
