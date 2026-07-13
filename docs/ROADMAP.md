# GigBack Labs — Content Platform Roadmap (Q3 2026)

> **North star:** gigback.org becomes the place where Israeli NGO people — directors, ops managers, board members, volunteers, philanthropists — read the best Hebrew content about running an NGO: challenges, tools, governance, fundraising. The content builds authority and trust; the tools (CRM, Tasks, Org, Agents) convert that trust into users.
>
> Window: **mid-July → mid-October 2026.** Owner: Dor. Review this file monthly; log deviations at the bottom.

---

## Decisions already made (don't relitigate)

| Decision | Choice | Date |
|---|---|---|
| Content language | **Hebrew only.** English later only for diaspora-donor pages if data supports it. | 2026-07-13 |
| Publishing gate | **Dor approves every page** before it goes live. Loosen only after ~20 approved pages prove the rules. | 2026-07-13 |
| Scout agent runtime | **The Agency** (agency.mgh-ltd.com) as a worker; findings filed as md reports into this repo. | 2026-07-13 |
| Stack | Static HTML/CSS on CF Pages, no build step. Content pages follow the same pattern. | 2026-07-13 |
| Contact | hello@gigback.org (CF Email Routing). Web3Forms key live. | 2026-07-13 |

## Standing rules (apply to every phase)

1. **ASCII-only URL paths.** Hebrew stays in titles/meta/body; slugs are English (`/guides/choosing-ngo-crm/`). CF Pages cannot serve non-ASCII paths — and the failure is invisible (HTTP 200 with an error page). Verify body content after every deploy, not just status.
2. **Every new page gets manual Request Indexing in GSC.** Sitemap alone won't get a young site crawled.
3. **/stop-slop on all Hebrew prose** before Dor sees a draft. The GigBack-specific rules live in `docs/hebrew-writing-rules.md`.
4. **Record, don't repeat.** Anything we decide or learn goes into `CLAUDE.md` (project rules), this file (roadmap/decisions), or `docs/` (research, reports). If a session ends and the insight lives only in chat, it's lost.
5. **E-E-A-T from day one.** Named author (Dor Goldman) on every guide, author page, cited sources, dates. This is the Maxit AdSense lesson: "low value content" verdicts come from anonymity, not word count.
6. **Model economy:** cheapest model that meets the quality bar. Haiku for mechanical work, Sonnet for production work, Opus/Fable only where judgment or top-tier Hebrew craft is the deliverable. Never ship compromised quality to save tokens — split the task instead (cheap model drafts structure, strong model writes prose).

---

## Phase 0 — Foundation & Recording (Week 1: Jul 13–20)

Goal: never re-explain context again; site ready to receive content.

| # | Task | Output | Model / Tool |
|---|---|---|---|
| 0.1 | Project `CLAUDE.md` — stack, rules, links, session protocol | `CLAUDE.md` at repo root | Sonnet 5 |
| 0.2 | Hebrew writing rules for GigBack (adapt stop-slop + Maxit rules to NGO domain) | `docs/hebrew-writing-rules.md` | Fable/Opus once (this file trains every future cheap model — worth it) |
| 0.3 | GSC: add gigback.org property, submit sitemap, request indexing for `/` | GSC verified | Manual (Dor) + Sonnet guidance |
| 0.4 | Analytics: Cloudflare Web Analytics snippet (free, no cookies, no consent banner needed) | 1 script tag | Haiku 4.5 |
| 0.5 | `sitemap.xml` + `robots.txt` | files in repo | Haiku 4.5 |
| 0.6 | Bing Webmaster Tools (free, feeds ChatGPT/Copilot answers — cheap AI-SEO win) | property verified | Manual (Dor), 10 min |

**Exit criteria:** a brand-new Claude session can read `CLAUDE.md` + `ROADMAP.md` and start producing correct work with zero verbal briefing.

## Phase 1 — Research & Validation (Weeks 1–2: Jul 13–27)

Goal: know what Israeli NGO people actually search, ask, and struggle with — before writing a word. This research doubles as the **baseline dataset the scout agent will later diff against**.

| # | Task | Output | Model / Tool |
|---|---|---|---|
| 1.1 | **Perplexity Deep Research** (Dor runs, Claude writes the prompts): Israeli NGO sector pain points, tool landscape, funding trends, regulation (ניהול תקין, חוק העמותות) | `docs/research/perplexity-baseline.md` | Perplexity (Dor's account); Sonnet 5 writes prompts + synthesizes results |
| 1.2 | **Claude in Chrome field research**: browse Guidestar Israel, מידות, civic-tech groups, NGO Facebook/LinkedIn groups, מנהיגות אזרחית — collect real questions people ask | `docs/research/field-notes.md` | Sonnet 5 driving Chrome |
| 1.3 | Keyword & question mining: Google autocomplete/People-Also-Ask in Hebrew, competitor content scan (who ranks for עמותה queries today) | `docs/research/keywords-he.md` — ranked list with intent + difficulty | Haiku 4.5 for collection, Sonnet 5 for ranking |
| 1.4 | Customer research synthesis → 3 personas (NGO director / ops-volunteer / donor-philanthropist) with their top-10 questions each | `docs/research/personas.md` | Sonnet 5 (+ /customer-research skill) |
| 1.5 | **Validation memo**: is the space real? volume, gaps, angle. Go/adjust decision for Phase 2 topics | `docs/research/validation-memo.md` | Fable/Opus — this is the judgment call the next 3 months rest on |
| 1.6 | Content map: 3 pillars → ~24-topic backlog, prioritized (search volume × tool relevance × effort) | `docs/content-map.md` | Sonnet 5, Dor approves |

Suggested pillars (validate in 1.5 before committing):
- **ניהול עמותה** — governance, ניהול תקין, board, annual filings → feeds GigBack Org
- **גיוס משאבים ותורמים** — donor relations, retention, CRM practices → feeds GigBack CRM
- **כלים וטכנולוגיה לעמותות** — tool comparisons, AI for NGOs, workflows → feeds Tasks/Agents

**Exit criteria:** validation memo approved by Dor; top-6 topics chosen for Phase 3.

## Phase 2 — Landing Page Fresh-Eyes Upgrade (Week 3: Jul 27–Aug 3)

Goal: before adding sub-pages, make the home base as strong as it can be — informed by Phase 1 research (we'll know the audience's language by then, so copy can sharpen too).

| # | Task | Output | Model / Tool |
|---|---|---|---|
| 2.1 | **/ui-ux-pro-max review** of the live site: desktop + mobile, HE + EN, hierarchy, spacing, motion, accessibility | scored findings report → `docs/reports/uiux-review-1.md` | Sonnet 5 + /ui-ux-pro-max skill |
| 2.2 | Implement approved fixes (Dor picks from the report) | commits | Sonnet 5 |
| 2.3 | Navigation prep for content: add "מדריכים" to header nav + footer; design the guide-page template (same design system, article layout, author box, TOC, related-guides block) | `guides/_template.html` | Sonnet 5 |
| 2.4 | OG image for social sharing (currently none) | `og.png` | /image skill or manual Canva |
| 2.5 | Real favicon/logo pass if warranted (current: "GL" SVG) | asset | Dor decides; optional |

**Exit criteria:** Dor signs off the upgraded landing page; guide template approved.

## Phase 3 — Cornerstone Content (Weeks 3–6: Jul 27–Aug 24)

Goal: **6 exceptional Hebrew guides** — quality that makes an NGO director bookmark the site. Depth over volume; these pages carry the site's authority for a year.

| # | Task | Output | Model / Tool |
|---|---|---|---|
| 3.1 | About page (אודות) — the Labs story, the GigBack ecosystem, why free/fair tools | `about.html` | Fable/Opus for the Hebrew (brand voice page, written once) |
| 3.2 | Author page — **Dor Goldman**: founder of GigBack, 4 years in the third sector; photo, bio, links (LinkedIn, gigback.io). Every guide byline links here | `author/dor-goldman.html` | Sonnet 5, Dor supplies bio facts + photo |
| 3.3 | Guides 1–6 from the approved content map. Pipeline per guide: **(a)** Haiku: outline + source collection → **(b)** Sonnet 5: full Hebrew draft per writing rules → **(c)** /stop-slop pass → **(d)** Fable/Opus: final polish ONLY on cornerstone pages → **(e)** Dor approves → **(f)** publish + GSC Request Indexing | 6 live guide pages | Pipeline as listed |
| 3.4 | Each guide: FAQPage/Article JSON-LD, meta, OG, internal links to relevant product section | in-page | Haiku 4.5 (mechanical) |
| 3.5 | `/write-checklist` scoring before each publish (score against hebrew-writing-rules) | pass/fail per guide | Haiku 4.5 |

Cadence: ~2 guides/week. Each guide = 1,500–2,500 words, cited Israeli sources, one inline mention of the relevant GigBack tool (natural, not pushy — one per article max).

**Exit criteria:** 6 guides live, indexed, each with author byline and schema.

## Phase 4 — Scout Agent in The Agency (Weeks 6–8: Aug 24–Sep 7)

Goal: the research loop from Phase 1 becomes autonomous. The scout **feeds the backlog; it never publishes.**

| # | Task | Output | Model / Tool |
|---|---|---|---|
| 4.1 | Scout spec: inputs (Hebrew NGO news, GSC query data, sector sites, PAA scraping), outputs (weekly md report: new questions, trends, content gaps, suggested topics scored vs. content-map) | `docs/agents/scout-spec.md` | Sonnet 5, Dor approves |
| 4.2 | Build scout as Agency worker; weekly schedule; reports land in `docs/scout-reports/YYYY-MM-DD.md` via PR (so Dor sees each one) | running worker | Sonnet 5 to build; **scout runs on Haiku 4.5** (high-frequency scanning = cheap model), Sonnet 5 for the weekly synthesis step |
| 4.3 | Writer pipeline semi-automation: "approve topic → agent produces draft PR per the 3.3 pipeline" | repeatable workflow doc | Sonnet 5 |
| 4.4 | Two trial cycles supervised; tune the spec | 2 scout reports + 2 guides from scout topics | as above |

**Exit criteria:** scout has run twice unattended; at least one published guide originated from a scout report.

## Phase 5 — Steady State & Growth (Weeks 8–13: Sep 7–Oct 15)

Goal: rhythm, distribution, measurement.

| # | Task | Output | Model / Tool |
|---|---|---|---|
| 5.1 | Cadence: 1–2 guides/week through the pipeline (scout suggests → Dor picks → agent drafts → Dor approves) | ~8–10 more guides | pipeline models |
| 5.2 | Distribution: share each guide to relevant Hebrew NGO groups (Facebook, LinkedIn, מנהיגות אזרחית forums) — Dor posts, Claude drafts the share copy | share kit per guide | Haiku 4.5 |
| 5.3 | Directory/backlink layer: Israeli civic-tech directories, tool listings for the CRM | `docs/reports/backlinks.md` | Sonnet 5 + /directory-submissions |
| 5.4 | AI-SEO check: do ChatGPT/Perplexity/Claude cite gigback.org for עמותה questions? Baseline + monthly | `docs/reports/ai-seo-baseline.md` | Sonnet 5 + /ai-seo |
| 5.5 | Monthly GSC review: queries, impressions, CTR → retitle/refresh underperformers | monthly notes in this file | Haiku 4.5 pulls data, Sonnet 5 recommends |
| 5.6 | Month-3 strategy review: what ranked, what converted to CRM demo clicks, English-content decision, waitlist growth | updated ROADMAP | Fable/Opus + Dor (consider /ccr session) |

## Measurement (check monthly, log below)

| Metric | Source | 3-month target |
|---|---|---|
| Indexed pages | GSC | 15+ |
| Organic impressions/week | GSC | 1,000+ |
| Organic clicks/week | GSC | 50+ |
| Waitlist signups | Web3Forms inbox | 100 total |
| CRM demo clicks from guides | CF Analytics | measurable trend, no target yet |
| Scout reports produced | repo | 6+ |
| AI citation (any assistant cites gigback.org) | manual check | at least once |

**Not doing (scope control):** paid ads, newsletter beyond the waitlist, English content, video, a CMS, comments — revisit only at the month-3 review.

## Model cheat-sheet

| Work | Model | Why |
|---|---|---|
| Scraping, formatting, JSON-LD, checklists, GSC data pulls | **Haiku 4.5** | mechanical, high-volume |
| Drafting guides, research synthesis, code, UI review, share copy | **Sonnet 5** | the production workhorse |
| Writing-rules file, validation memo, About-page Hebrew, cornerstone polish, quarterly strategy | **Fable/Opus** | one-shot artifacts where judgment/craft compounds |
| Deep web research | **Perplexity Deep Research** (Dor's account) | purpose-built, already paid for |

---

## Decision & deviation log

| Date | What | Why |
|---|---|---|
| 2026-07-13 | Roadmap v1 approved structure | — |
| 2026-07-13 | Phase 1.1 complete: 6 Perplexity Deep Research passes done, synthesized to `research/perplexity-baseline.md` | Validation memo verdict: **adjust, don't abandon.** "Hebrew+RTL+affordable" is NOT a moat for GigBack CRM — free Hebrew competitors already exist (IsraelGives, JGive, Fireberry, APT, etc). Real confirmed gaps are GigBack Tasks (Monday genuinely lacks Hebrew/RTL UI, sourced) and GigBack Org (governance/gap-mapping is manual/consultant-only today). Content strategy strongly validated — thin competition on donor-tech, governance-ops, and tool-comparison content. See `research/validation-memo.md` for full reasoning. |
| 2026-07-13 | Content map reordered: governance + donor-retention guides now lead Phase 3, CRM-comparison demoted from flagship | Per validation memo — a CRM comparison piece would highlight our own CRM isn't the obvious price/feature winner yet; lead with validated, low-competition topics instead |
| 2026-07-13 | Flagged: homepage Problem section's "English-only tools" framing overstates the CRM gap specifically | Revisit during Phase 2 /ui-ux-pro-max pass, not urgent standalone fix. Consider rebalancing which product gets hero billing — Tasks has the strongest sourced differentiation story |
