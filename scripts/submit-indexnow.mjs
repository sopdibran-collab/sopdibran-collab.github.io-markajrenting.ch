#!/usr/bin/env node
/**
 * Compatibilité : `npm run indexnow` et `node scripts/submit-indexnow.mjs`.
 * La soumission post-déploiement envoie le sitemap complet.
 * Voir scripts/ping-indexnow.mjs.
 *
 *   node scripts/submit-indexnow.mjs
 *   node scripts/submit-indexnow.mjs --dry-run
 *   INDEXNOW_DRY_RUN=1 node scripts/submit-indexnow.mjs
 */

import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const script = join(dirname(fileURLToPath(import.meta.url)), "ping-indexnow.mjs");
const result = spawnSync(process.execPath, [script, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env,
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
