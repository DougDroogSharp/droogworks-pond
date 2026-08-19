# droogworks-pond

The source of **https://droogworks.netlify.app** — the pond. This repo is the
truth; Netlify is only where it is shown.

## What is here

| path | what |
|---|---|
| `index.html` | **Droog's Pad** — the front door (identical to `pad/index.html`) |
| `pad/index.html` | the Pad: one-file app, data-driven from `pad/catalog.json` |
| `pad/catalog.json` | 141 works in 9 racks; each work's `media[]` says what can be played/read |
| `pad/media/<work-id>/` | the actual albums, comics, PDFs, book texts, covers (~135 MB) |
| `pond.html` | the pond hub page (`/pond`) |
| `quotes.html` | Voice Notes (`/quotes`) |
| `library.html` | the Library (`/library`) |
| `control.html`, `design.html`, `biro.html`, `dramaton.html` | the other pods |
| `dramaton-studio/` | a **built** copy of Dramaton Studio; source lives in [dramaton-studio-62](https://github.com/DougDroogSharp/dramaton-studio-62) |
| `dramaton-2-salvage.md` | salvage notes from Dramaton Editor 2.0 |
| `archive/` | earlier versions of pages worth keeping |

## The one rule

**Deploy the whole folder, every time.** Netlify upload-deploys replace the
entire site. On 2026-08-18 a deploy went up without `pad/media/` and every
album, comic and book on the Pad went 404 — the code was fine, the files were
gone. Deploy from a checkout of this repo and that cannot happen.

## How the Pad works

`pad/index.html` reads `catalog.json` and renders each work's `media[]` with a
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

Known gap: `catalog.json` references three files that were never uploaded
anywhere — `pad/media/evening-star/evening-star-01.mp3`,
`evening-star-02-multi-line.mp3`, `pad/media/flawberry-straw-song/flawberry-straw-song.mp3`.
