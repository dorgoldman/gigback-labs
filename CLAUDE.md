# GigBack Labs — gigback.org

Bilingual (HE default/EN) static landing page + Hebrew content platform for Israeli NGOs. Part of the GigBack ecosystem (sibling of gigback.io); tools themselves (CRM, Espresso) are standalone apps in other repos.

**Read `docs/ROADMAP.md` every session** — it is the north star and holds all standing decisions. Log new decisions in its decision log, not in chat only.

## Stack & deploy
- Plain HTML/CSS/JS, **no build step**. Repo root = deploy root.
- Hosting: Cloudflare Pages, auto-deploys on push to `main`. Live at **gigback.org** (+ gigback-labs.pages.dev).
- Local preview: launch config `gigback-labs` (npx serve, port 8097).
- Post-deploy verify: `curl -s https://gigback.org | grep -q "GigBack Labs" && echo OK` — check body, not status code.

## Hard rules
- **ASCII-only file/URL paths** (CF Pages can't serve Hebrew paths; failure is invisible — 200 with error page). Hebrew lives in titles/meta/content only.
- **Every new page → manual Request Indexing in GSC** after deploy.
- **All Hebrew prose passes /stop-slop** + `docs/hebrew-writing-rules.md` before Dor reviews.
- Content publishes **only after Dor approves** the draft.
- Every guide has author byline **Dor Goldman** linking to the author page (E-E-A-T).
- Contact email: **hello@gigback.org** (CF Email Routing; receive-only — no outbound SMTP configured).
- Do NOT reuse legal text or concepts from the old Base44 "app hub" site — different product, contradictory data-ownership terms.

## Bilingual mechanism (landing page)
Every text node exists twice: `<span data-lang="he">` / `<span data-lang="en">`; CSS on `html[lang]` shows one, JS toggle flips `lang`+`dir`, choice persists in localStorage. Content guides are Hebrew-only (decision 2026-07-13) and don't need the toggle.

## Design system (Labs-specific — NOT the GigBack teal system)
- Accent: iris `#6366F1` / dark `#3730A3` / light `#EEF2FF`; surface `#FAF7F2`; border `#E7E2DA`
- Fonts: Plus Jakarta Sans (Latin) + Heebo (Hebrew), loaded together
- Cards 12px radius / buttons 8px; max width 1100px; restrained motion (fade-up reveals)

## Key files
- `index.html`, `style.css`, `script.js` — landing page
- `privacy.html`, `terms.html` — Hebrew legal pages (final text, written 2026-07-13)
- `docs/ROADMAP.md` — roadmap + decision log
- `docs/hebrew-writing-rules.md` — writing rules for all content
- `docs/research/`, `docs/scout-reports/`, `docs/reports/` — research, scout agent output, audits
- Web3Forms key lives in `script.js` (public by design; submissions email to the Web3Forms account: finance@mgh-ltd.com)

## Session start
Read this file + `docs/ROADMAP.md`, then confirm: "Read CLAUDE.md. Ready." Load skills/docs only when the task needs them.
