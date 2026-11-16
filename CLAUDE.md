# Rubinproduction 3.0

This repo holds a couple of separate websites side by side rather than one app.
There is no workspace or shared build — each folder is its own project with its
own dependencies, and you `cd` into the one you are working on.

```
Rubinprod_3.0/
├── codex-master-brief-v1-md-nick/   Rubin Production — one-page music video site
├── nextjs_rubinprod/                Video Atelier — landing + community area
└── media-tools/                     shared video tooling (not in git)
```

## The projects

**`codex-master-brief-v1-md-nick`** — a single-page marketing site for a music
video producer. Next 16, React 19, Tailwind 4, **pnpm** (pinned to 11.0.8). It
has its own `CLAUDE.md` with the details; read that before touching it. Heavy on
video, which is most of what makes it interesting.

**`nextjs_rubinprod`** — the bigger one. Next 15, a public landing page plus a
subscription community area, with Supabase auth, Stripe payments, i18n and
Mailchimp. Uses **yarn**, not pnpm. Watch out for that when running commands.

A third site is coming and will land here too. When it does, it gets its own
folder and its own `CLAUDE.md`, same as these.

`Rubin_Production_IT_Final_2026-11-15/` is not a project. It is the client's
November 2026 drop: a full redesign that replaced `src/` and `public/` of
`codex-master-brief-v1-md-nick` on 2026-11-16. Its `.txt` files are the
client's handoff notes (form, booking, QA list). Treat it as a reference only,
do not deploy it, and delete it after the new site is live.

## media-tools

`media-tools/optimize-video.mjs` re-encodes a site's videos for web delivery:
capped resolution, constant-quality H.264, audio stripped (every player on these
sites is muted), and a leading moov atom so playback starts before the download
finishes. It is shared deliberately — the third site should use it too.

```bash
# from inside a site
node ../media-tools/optimize-video.mjs
node ../media-tools/optimize-video.mjs --dry-run

# or from here, naming the site
node media-tools/optimize-video.mjs nextjs_rubinprod
```

It defaults to scanning `public/` recursively, so a site keeping clips in
`public/video` works as well as one using `public/assets`. Per-site quality
lives in an `optimize-video.json` in that site's root — a full-screen hero and a
200px thumbnail should not get the same CRF. Full docs in
`media-tools/README.md`.

**The whole `media-tools/` folder is gitignored**, tooling and all. That is
deliberate: it also stores every original pre-compression video, currently
around 155 MB, and the repo should not grow by the weight of footage nothing is
served from. Two consequences worth knowing:

- A fresh clone will not have the script or the originals. They live on this
  machine only, so keep your own backup of anything you cannot re-export.
- The sites carry delivery encodes only. The tool always re-encodes *from the
  archive*, never from what is already shipped, so re-running with a different
  CRF never compounds compression — and `--restore` always has a clean source.

Do not run it on `codex-master-brief-v1-md-nick`, not even `--restore`. Since
the November 2026 drop, the client supplies encoded media, the full videos keep
their audio, and the archive holds only the originals of the old site.
`nextjs_rubinprod` still has 19 untouched videos, about 90 MB, if you ever want
to run it through.

## Working here

- Check which package manager a project uses before running anything.
- Check scripts differ per project — codex has `lint`/`typecheck`/`test`/
  `check:launch`, nextjs_rubinprod has `lint`/`check:type`/`check:code`/
  `check:dead-code`/`check:security` and no test runner. Run them from inside
  the project.
- `git` operates on the whole repo from the root, so a commit can span projects.
  Usually you do not want that — keep changes to one site per commit.
