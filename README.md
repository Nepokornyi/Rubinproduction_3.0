# Rubinproduction 3.0

A container repo for Rubin Production's websites. Not a monorepo in any real
sense — just a few independent projects living next to each other, each with its
own dependencies, package manager and deploy.

## What's in here

### `codex-master-brief-v1-md-nick`

**Rubin Production** — a one-page site for a music video production house, live
at www.rubinproduction.eu. Full-screen showreel, four services with draggable
work strips and a campaign gallery, a Mystery Box offer, and a contact form that
sends the brief by email (Resend) and then offers an optional Google Calendar
booking.

Next.js 16 · React 19 · Tailwind 4 · framer-motion · pnpm

Mostly video. The tiles play small silent previews. A full video, with audio,
loads only when a visitor opens it.

### `nextjs_rubinprod`

**Video Atelier** — the larger platform. A public landing page plus a
subscription-based community area with free and premium content.

Next.js 15 · TypeScript · Tailwind · Supabase auth · Stripe · i18next /
next-intl · GSAP · yarn

### A third site

Coming later. It'll sit alongside these two.

## Shared tooling

Both sites are video-heavy, so the compression tool is shared rather than copied
into each project: `media-tools/optimize-video.mjs` re-encodes a site's videos
for web delivery and keeps the untouched originals in a local archive.

That folder is deliberately **not in version control** — it holds the original
footage, and shipping ~145 MB of source video in git to serve compressed copies
would be a bad trade. A fresh clone gets the sites but not the tool or the
archive.

## Running things

Each project is standalone. Pick one, read its README, and note the package
manager isn't the same across them:

```bash
cd codex-master-brief-v1-md-nick && pnpm install && pnpm dev
cd nextjs_rubinprod            && yarn install && yarn dev
```

Both default to `localhost:3000`, so run one at a time or change the port.
