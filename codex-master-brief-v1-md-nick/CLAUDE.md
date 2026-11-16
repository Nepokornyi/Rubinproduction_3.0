# Rubin Production site

A one-page site for the production house of Nick Rubin, live at
https://www.rubinproduction.eu. The folder name comes from the first version.
Keep it: the Vercel project `rubinprod` uses this folder as its root directory.

Package manager is **pnpm 11.0.8**. Commands, env variables and deploy steps are
in `README.md`.

## Client drops

The developer of the client works on a separate copy and sends a full new
version. Each drop replaces `src/` and `public/`, and it does not include our
changes. After each drop, do these steps again:

1. `package.json`: keep `"packageManager": "pnpm@11.0.8"`. Keep `vercel.json`.
2. `next.config.ts`: keep the `images` block and the `Cache-Control` header for
   `/assets/:path*`.
3. Keep `scripts/check-launch.mjs` and `.gitignore`.
4. Delete `src/app/mystery-options/` and `PixelText.tsx`. It is a design
   comparison page, not for the public.
5. Delete README files in `public/`. All files in `public/` are public.
6. Keep `src/lib/reducedMotion.ts` and its use in `CleanMedia` and
   `Typewriter`. Read the comment in that file for the reason.
7. `Contact.tsx`: no redirect to Google booking after a send, the button says
   "Send enquiry", and there is no "Continue to Google Calendar" link.
   `OptionalBooking`: "Book a 30-minute call" is a link to Google booking (new
   tab), with no iframe and no `GOOGLE_BOOKING_EMBED_URL`. The call is 30
   minutes, not 20. `route.ts`: keep `visitorConfirmation`, which holds the
   approved copy of the visitor email (HTML and text). Keep
   `enquiry-email.test.ts`. See "Form" below.
8. Fix lint and type errors. The drops did not pass `pnpm lint` and
   `pnpm typecheck`.
9. Run lint, typecheck, test and build.

## Media rules

- Tiles play only the small silent `-preview.mp4`. The full MP4 with audio
  loads only in `VideoPlayer`. Keep this split; it keeps a full scroll light.
- `CleanMedia` adds the `<source>` children only while the tile is in view, so
  nothing off screen downloads video. Do not put `src` on the `<video>` itself.
- Do not run `media-tools/optimize-video.mjs` here, not even `--restore`. It
  removes audio, and its archive holds the originals of the old site.

## Form

`Contact.tsx` → `POST /api/enquiry` → one Resend batch: the brief to Nick and a
confirmation to the visitor. The form shows success only after Resend accepts
the batch. Then `OptionalBooking` lets the visitor choose a call or email. The
client's version redirected to Google booking at once. We removed the redirect
on 2026-11-16, because the copy promises an optional call. A test in
`interactions.test.tsx` fails if the redirect comes back. `lib/booking.ts`
accepts only Google booking URLs, so a new booking provider needs a code change.
The rate limit in `route.ts` is in memory, so on Vercel each instance counts on
its own.
