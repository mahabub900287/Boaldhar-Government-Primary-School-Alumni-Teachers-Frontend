# Boaldhar Government Primary School Alumni Association — Frontend

Bilingual (Bengali / English) website for the **Boaldhar Government Primary School Alumni Association** and **Reunion 2027**.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

> **Status: static UI.** This frontend is not connected to any API yet. Forms are visual only and
> nothing is submitted. The Laravel API integration comes later.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /bn)
npm run build      # production build
npm run lint
```

If the build runs out of memory on a low-RAM machine: `NODE_OPTIONS=--max-old-space-size=2048 npm run build`.

## Structure

```
app/[locale]/            bn | en routes (root layout, home, inner pages, member portal, admin)
  [...slug]/views.tsx    About, Teachers, Directory, Committee, Gallery, News, Contact, Help, Legal …
  reunion-2027/          overview + 6-step registration form
components/              Header (dropdown menus), Footer, Select (custom dropdown), Reveal, Gallery …
lib/                     content + i18n helpers
  alumni.ts              REAL alumni list (40 people, 9 groups)
  committee.ts           REAL proposed convening committee
  people.ts, demo.ts     DEMO content (teachers, batches, news, schedule, fees …)
  credits.json           photo credits
public/photos            demo photographs (see /credits page)
proxy.ts                 redirects "/" to the default locale
```

## Content status

| Content | Status |
|---|---|
| Alumni list, convening committee | Real, supplied by the association |
| Teachers, batches, news, schedule, fees, school facts/history | **Demo** — replace before launch |
| Photographs | Demo photos from Wikimedia Commons (open licences, credited on `/credits`) — not photos of this school |
| Event date, fees, payment numbers | Not announced — shown as "to be announced" / demo |

## Design tokens

Palette (navy / emerald / gold on warm cream) is defined once in `app/globals.css`
(`:root`). Fonts: Noto Sans Bengali, Inter, Source Serif 4.
