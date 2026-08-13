# who1snick — Hybrid Music Video Production

A mobile-first one-page website for Nick Rubin. The current structure contains a full-screen responsive showreel, three services, swipeable media carousels, six selected-work slots, an Instagram contact section and a minimal footer.

The site is local-only. It has not been published or connected to external analytics or form services.

## Run locally

Requirements: Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Production preview:

```bash
pnpm build
pnpm start
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

`pnpm check:launch` intentionally fails while unresolved production requirements remain in `src/content/launch-blockers.json`. Robots metadata remains `noindex` until that list is empty.

## Edit content

- `src/content/services.ts` — service titles, descriptions, prices, notes and carousel media paths.
- `src/content/cases.ts` — six artists, tracks and work media.
- `src/content/settings.ts` — site metadata, Instagram handle and URL.
- `src/app/page.tsx` — section headings and section-level text.

## Replace media

See `public/assets/README.md` for the complete filename map.

In normal use, replace an existing WebP with the same filename. To use video, add the matching MP4. The WebP acts as a lightweight blurred preview until the matching video is ready. A video element is only mounted once its block is near the viewport, so nothing offscreen touches the network; playback pauses when it leaves. Reduced-motion visitors and anyone on Data Saver or a 3G-or-worse connection get the poster and no video at all. At most three clips load at once, so a screenful of tiles cannot starve each other.

Every MP4 shipped here is a delivery encode: capped at 1280px wide, CRF 28, no audio track, moov atom first. After dropping in a new source video, re-run the shared optimiser from the site root:

```bash
node ../media-tools/optimize-video.mjs            # optimise public/**/*.mp4
node ../media-tools/optimize-video.mjs --dry-run  # list what it would touch
node ../media-tools/optimize-video.mjs --restore  # put the originals back
```

The untouched sources are archived in `media-tools/originals/<site-name>/` outside the repo, so the site only carries delivery copies and re-running never compounds compression. That folder is not in version control — keep your own backup of anything you cannot re-export.

The hero uses the same desktop showreel on mobile and crops it with `object-fit: cover`, so no second video is required. Its responsive WebP poster appears blurred while the showreel loads. Before/after carousels use two 16:9 slots side-by-side on desktop and stacked on mobile; both videos wait for each other, reset to zero and start together. Campaign grids use only 16:9, 9:16 and 1:1 cells. Selected work is a 3-column desktop / 2-column mobile grid and opens in a centered viewer over a blurred page.

Service and Campaign carousels advance automatically, support swipe and manual controls, and pause while hovered or keyboard-focused. Motion is minimized when the visitor enables reduced motion.

## Current page structure

1. Sticky header: `who1snick`, Services, Start a project.
2. Hero: “Hybrid Production for Your Music Videos”, CTA over a responsive showreel.
3. Three services: AI VFX Enhance, Performance Snippet, Campaign.
4. Selected work: six dense, clickable 16:9 video slots without caption bars.
5. Instagram contact CTA.
6. Minimal footer.

The previous Approach, detailed scope tables, Remote AI Visual, Music Video, Process, Designed-not-random, About, FAQ and enquiry form sections have been removed from the rendered page.
