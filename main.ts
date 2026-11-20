// Leonida 55 — a gta6-trophy-guide-01 entry (Node 22, standard library only).
//
// The guide itself is the app/ folder beside this file: plain static files a
// browser opens at app/index.html, offline, with no build step and no network
// at run time. The trophy data lives in app/data/trophies.json and is also
// embedded in app/app.js, so the page works straight from the local files.
//
// This program is only the handoff: it copies app/ and screenshots/ into the
// output directory and writes dossier.json with the vendored make.fun helper.
// Leave vendor/makefun-frontend.ts exactly as it is — the scorer requires the
// dossier to be byte for byte what its own copy of the helper writes.
//
// Local trial: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail fast on a missing guide instead of handing in a broken dossier.
if (!existsSync(join(here, "app", "index.html"))) {
  throw new Error("app/index.html is missing; the guide is not built yet");
}
if (!existsSync(join(here, "app", "data", "trophies.json"))) {
  throw new Error("app/data/trophies.json is missing; the trophy list is not built yet");
}

mkdirSync(out, { recursive: true });
cpSync(join(here, "app"), join(out, "app"), { recursive: true });
mkdirSync(join(out, "screenshots"), { recursive: true });
if (existsSync(join(here, "screenshots"))) {
  cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });
}

// The scorer's own caps: the text cap shapes the dossier bytes, and the other
// caps refuse an entry the scorer would refuse (more than 4 screenshots, one
// over 256 KiB, more than 993 files and directories in app/, or 48 MiB of
// app files).
writeFileSync(
  join(out, "dossier.json"),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 50331648,
  }),
);
