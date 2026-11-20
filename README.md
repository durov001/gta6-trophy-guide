# Leonida 55 — GTA VI Trophy Guide & Tracker

[![gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/durov001/gta6-trophy-guide/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/durov001/gta6-trophy-guide/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01)

Built for the [make.fun gta6-trophy-guide-01 bounty](https://make.fun/bounty/gta6-trophy-guide-01) — an offline web app that is the best guide and tracker for the 55 PlayStation 5 trophies of Grand Theft Auto VI.

Referral code: `zsk0hsg3` — https://make.fun/r/zsk0hsg3

## What it is

A static, fully offline guide and tracker. Open it in a desktop browser and it works with the network off — no server, no build step, no account.

- **All 55 official trophies**, with the official name, description and grade exactly as PlayStation publishes them (list live since 18 Nov 2026; the game launched 19 Nov 2026).
- **A guide to every trophy in our own words**, with numbered steps that each cite their source by number — 187 cited steps across 9 dated sources.
- **A checklist that saves in the browser**, with export to a file and import back, per-trophy progress counters, and a 35-line 100% completion ledger.
- **Filters by kind** (story, missable, collectibles, activities, side quests, crime, misc) and by grade, plus search and a PSN-hidden filter.
- **A spoiler setting** that hides the names and descriptions of story trophies until they are earned.
- **A roadmap to the platinum** in three steps (~200 hours), chapter by chapter, with the key story-gated unlocks in order.
- **The one possibly missable trophy flagged loudly** — Positive Mental Attitude, whose Chapter 1 balcony meditation never returns — with the honest note that whether it is required is still unconfirmed.
- **Disputes shown both ways**: where sources disagree (the final mission's name, 15 vs 18 meditations, the platinum time, the unverified 52-area figure), both versions appear with our call.
- **Corrections, not copies**: the bowling trophy is corrected to the Kingpin Bowling robbery, and the one trophy no guide has solved yet (Bad Luck, I Guess) is labelled unknown with a test protocol instead of a fake method.

## How to open it

Just open `app/index.html` in a desktop browser — Chrome, for example. No server is needed: the trophy data is embedded in the app, so the page works straight from the local files with the network off.

To serve it locally instead:

```sh
cd app && python3 -m http.server 8080
```

then open http://localhost:8080.

Demo mode (for screenshots): open `app/index.html?demo=1` to see the tracker with 14 trophies marked earned. The demo state is labelled in the interface and never touches saved progress.

## Layout

- `main.ts` — the entrypoint: copies `app/` and `screenshots/` to the output directory and writes `dossier.json` with the vendored helper.
- `app/index.html`, `app/app.js`, `app/style.css` — the guide itself.
- `app/data/trophies.json` — the 55 trophies with their guides, sources and disputes.
- `screenshots/` — four real renders of the finished app.
- `vendor/makefun-frontend.ts` — the kit's dossier helper, unchanged.

## Sources

Every guide step cites its source by number. The main source is the PowerPyx trophy guide, 100% checklist and walkthrough (played through the released game); the list itself is confirmed by Push Square, GTABase, Insider Gaming, Radio Times and the official Exophase / PSNProfiles list, which all agree on all 55 names, descriptions and grades. Sources were read on 20 Nov 2026. The full source matrix, with read dates and citation counts, is in the app's Sources tab.

No Rockstar Games logo, artwork or game screenshots are used anywhere in this guide.
