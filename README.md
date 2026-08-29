# droogworks-pond

The source of **https://droogworks.netlify.app** — the pond. This repo is the
truth; Netlify is only where it is shown.

## What is here

| path | what |
|---|---|
| `index.html` | **Droog's Pad** — the one-file app, and the front door. Served at `/`, `/library` and `/pad/` |
| `catalog.json` | 141 works in 9 racks; each work's `media[]` says what can be played/read |
| `_redirects` | rewrites `/library` and `/pad/` onto the root `index.html` |
| `pad/media/<work-id>/` | the actual albums, comics, PDFs, book texts, covers (~200 MB) |
| `pond.html` | the pond hub page (`/pond`) |
| `library.html`, `pad/index.html`, `pad/catalog.json` | **gone** — they were byte-identical duplicates; see *One Pad, three URLs* below |
| `quotes.html` | Voice Notes (`/quotes`) — fetches `quotes.json` |
| `quotes.json` | 6,968 dictaphone quotes (~3.8 MB); without it Voice Notes renders empty |
| `control.html`, `design.html`, `biro.html`, `dramaton.html` | the other pods |
| `music.html`, `art.html`, `games.html` | the three "Growing" pods (`/music`, `/art`, `/games`) |
| `dramaton-studio/` | a **built** copy of Dramaton Studio; source lives in [dramaton-studio-62](https://github.com/DougDroogSharp/dramaton-studio-62) |
| `dramaton-2-salvage.md` | salvage notes from Dramaton Editor 2.0 |
| `archive/` | earlier versions of pages worth keeping |

## One Pad, three URLs

`index.html` and `catalog.json` used to exist three times and twice over:
`index.html`, `library.html` and `pad/index.html` were byte-identical, and
`catalog.json` sat at both the root and `pad/`. Editing the Pad meant editing
it in three places, and the copies had already begun to drift.

Now there is one of each, at the repo root, and `_redirects` rewrites the other
two URLs onto it:

```
/library    /    200
/pad/       /    200
/pad        /    200
```

Two things make this safe, and both are easy to undo by accident:

1. **The front door is a real file.** `/` is served by `index.html` directly,
   never by a rewrite. If `_redirects` goes missing, `/library` and `/pad/`
   break — the site does not.
2. **`index.html` fetches `/catalog.json`, absolutely.** A `200` rewrite keeps
   the browser's URL, so a relative `catalog.json` would resolve to three
   different paths depending on which URL you arrived at. Do not make it
   relative again.

The rules are exact paths, never `/pad/*` — a wildcard would shadow
`/pad/media/`. Netlify only applies redirect rules when no static file matches,
so the media would survive a wildcard anyway, but don't rely on that.

## The one rule

**Deploy the whole folder, every time.** Netlify upload-deploys replace the
entire site. On 2026-08-18 a deploy went up without `pad/media/` and every
album, comic and book on the Pad went 404 — the code was fine, the files were
gone. Deploy from a checkout of this repo and that cannot happen.

## How the Pad works

`index.html` reads `catalog.json` and renders each work's `media[]` with a
renderer chosen by `media[].type`:

- `audio` — track list, plays straight through, speed 0.8×–1.5×
- `image` — thumbnails → lightbox, ←/→ to flip (comics, galleries)
- `pdf` — inline viewer + open full-size
- `text` — opens the Reader (markdown, jump-to-section, A−/A+, serif/sans, paper/dark)
- `video`, `embed`, `link`

Add a work to `catalog.json`, drop its files in `pad/media/<id>/`, and the Pad
grows. No code change needed. Vault works (`state: "vault"`) are catalogued but
not yet loaded; their "Fetch this from the archive" button queues a request.

## Provenance

Assembled 2026-08-18 from two Netlify deploys:
- pages + catalog from deploy `6a853dd3ef111eeb7abc2016` (v0.8 "density pass", 2026-08-18 22:23 PDT)
- `pad/media/` from deploy `6a84143cf3fea90c800a692b` (2026-08-18 01:13 PDT), the last one that shipped the media

That known gap is closed: the three files `catalog.json` referenced but no deploy
ever carried — `pad/media/evening-star/evening-star-01.mp3`,
`evening-star-02-multi-line.mp3` and
`pad/media/flawberry-straw-song/flawberry-straw-song.mp3` — are now in the repo.
Every one of the 81 media paths in `catalog.json` resolves to a file here.

Reconciled 2026-08-28 against the live site: `music.html`, `art.html`,
`games.html`, `quotes.json` and the root `catalog.json` existed only on Netlify
and have been pulled back in. The repo is now a superset of what is live —
every page and asset live serves, plus all of `pad/media/`, which the current
live deploy is missing.

## Known drift from live

The live site is currently serving a deploy with **no `pad/media/`** — every
album, comic, PDF and book text on the Pad 404s there right now. This repo has
them. Deploying this repo restores them.
