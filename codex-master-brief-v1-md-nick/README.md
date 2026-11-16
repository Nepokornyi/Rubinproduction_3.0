# Rubin Production — music videos and release campaigns

A one-page site for the production house of Nick Rubin. It is live at
https://www.rubinproduction.eu (Vercel project `rubinprod`, root directory is
this folder).

Next.js 16 · React 19 · TypeScript · Tailwind 4 · framer-motion · pnpm 11.0.8

## Run locally

```bash
pnpm install
cp .env.example .env.local
pnpm dev            # http://localhost:3000
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm check:launch   # fails on purpose while launch-blockers.json is not empty
```

While `src/content/launch-blockers.json` has items, the site is `noindex`
(`layout.tsx` and `robots.ts`). A deploy does not change this.

## Page and content

One route: hero → "The offer" (Snippet, Music Video, Campaign, Mystery Box) →
contact form → footer.

- `src/content/services.ts` — copy, prices and media paths of the four services.
- `src/content/settings.ts` — metadata, Instagram link and hero media.
- `src/app/page.tsx` — the intro text of "The offer".

## Media

- Each work has a WebP poster, a small silent `-preview.mp4` for the tile, and a
  full MP4 with audio. The full MP4 loads only when a visitor opens the player.
- The client supplies the media already encoded. Do not run
  `media-tools/optimize-video.mjs` on this site. It removes audio, and its
  archive holds the originals of the old site.
- `next.config.ts` caches `/assets/*` for 30 days. If you replace a file and
  keep its name, visitors can see the old file for up to 30 days. Give a changed
  file a new name.

## Deploy

Vercel builds this folder on push. `vercel.json` pins pnpm 11.0.8.

Set these variables in Vercel → Project → Settings → Environment Variables
(Production):

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.rubinproduction.eu` |
| `NEXT_PUBLIC_BOOKING_URL` | `https://calendar.app.google/gXA7UNdPKJyUhJuK9` |
| `LEADS_ENABLED` | `true` only after email delivery works |
| `RESEND_API_KEY` | from the Resend dashboard |
| `LEADS_FROM_EMAIL` | an address on a domain that is verified in Resend |
| `LEADS_TO_EMAIL` | the inbox of Nick that gets the briefs (set in Vercel, not in this public repo) |

After you change a variable, redeploy. The home page is static, so the on/off
state of the form is fixed at build time.

`/api/enquiry` accepts requests only from the origin in `NEXT_PUBLIC_SITE_URL`.
The form does not work on Vercel preview URLs.

The DNS of `rubinproduction.eu` is at Websupport, not at Vercel. Add the DNS
records for Resend there. The domain also has mailboxes at Websupport, so do not
change its root MX or SPF records.
