# Media replacement map

The current WebP files are neutral content placeholders. Replace them in place and keep the same filename. Optional MP4 files can be added beside each poster; when present, they play muted and inline without overlay controls.

## Hero

- `showreel/hero-showreel-desktop.mp4` — desktop 16:9 autoplay video
- `showreel/hero-poster-desktop.webp` — lightweight desktop preview shown while video loads
- `showreel/hero-poster-mobile.webp` — lightweight mobile preview shown while the same video loads

The same video is used on desktop and mobile. On mobile it fills and crops automatically. The poster is slightly blurred until the video can play, then the video fades in.

## AI VFX Enhance carousel

Directory: `services/visual-upgrade/`

- `before-01.webp` / `before-01.mp4`
- `after-01.webp` / `after-01.mp4`
- Repeat through `06`.

## Performance Snippet carousel

Directory: `services/performance-snippet/`

- `before-01.webp` / `before-01.mp4`
- `after-01.webp` / `after-01.mp4`
- Repeat through `06`.

## Campaign grids

Directory: `services/campaign/`

Each of three slides has seven explicitly named positions. Use only the stated aspect ratio:

- `slide-01-landscape.webp` — 16:9, large horizontal center tile
- `slide-01-portrait-center.webp` — 9:16, center-right portrait tile
- `slide-01-portrait-right.webp` — 9:16, far-right portrait tile
- `slide-01-square-left-top.webp` — 1:1
- `slide-01-square-left-bottom.webp` — 1:1
- `slide-01-square-right-top.webp` — 1:1
- `slide-01-square-right-bottom.webp` — 1:1
- Repeat the same names for slides `02` and `03`.
- Optional matching videos use the same name with `.mp4`.

Example: `slide-02-portrait-center.mp4` replaces the center portrait cell on Campaign slide 2. The WebP with the same base name remains its loading preview.

## Selected work

Directories: `cases/case-01/` through `cases/case-06/`

- `poster.webp` — 16:9 poster
- `primary.mp4` — optional final video

The public grid intentionally has no artist or track caption bars. The six files open in a centered lightbox over a blurred page.
