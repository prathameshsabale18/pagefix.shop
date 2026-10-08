# PageFix — Growth Partner Website

Astro + GSAP implementation of the PageFix website direction.

## Included

- Dark-only PageFix visual system: charcoal, PageFix red, blue, off-white.
- Homepage with a pinned, scroll-driven stacked project transition inspired by the supplied reference video.
- Project stack for Autobon, CanvasBILL and Gajsai Ventures.
- Work index and individual case-study routes.
- How It's Done page.
- Start a Project enquiry form.
- Astro server endpoint for Supabase + optional Resend notifications.
- Persistent PageFix AI consultant UI with front-end service recommendations.
- Responsive mobile layout and reduced-motion handling.
- Supplied project screenshots wired into the project cards.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Astro URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Enquiry backend

Copy `.env.example` to `.env` and configure:

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY` (or the legacy `SUPABASE_SERVICE_ROLE_KEY`)
- `RESEND_API_KEY` (optional)
- `PAGEFIX_ENQUIRY_TO` (defaults to pagefixed@gmail.com)
- `PAGEFIX_FROM_EMAIL`

Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL Editor to create the `enquiries` table. The website submits through the server endpoint using `SUPABASE_SECRET_KEY` (or the legacy `SUPABASE_SERVICE_ROLE_KEY`); keep this elevated key server-side and never expose it in browser code. A `sb_publishable_...` key cannot write through this server endpoint. In production, add the environment variables in Vercel project settings and redeploy. Email notifications require a verified sender domain in Resend and the `RESEND_API_KEY`, `PAGEFIX_ENQUIRY_TO`, and `PAGEFIX_FROM_EMAIL` values. Without those optional Resend values, enquiries are still saved in Supabase.

## Main files

- `src/pages/index.astro` — homepage
- `src/components/HomeProjectStack.astro` — scroll transition
- `src/components/AIConsultant.astro` — consultant panel
- `src/data/projects.ts` — project data
- `src/styles/global.css` — complete visual system
- `src/pages/work.astro` — work index
- `src/pages/work/[slug].astro` — case studies
- `src/pages/start-a-project.astro` — enquiry flow
- `src/pages/api/enquiry.ts` — enquiry endpoint
