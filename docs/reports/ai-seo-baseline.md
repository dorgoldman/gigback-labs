---
task: T8 — AI-citation baseline check (Phase 5.4)
date: 2026-08-08
source: research/_raw/agy-gigback-org-2026-08-06.md (agency repo), generated 2026-08-06 by Dor via ops/run-agy-visibility.ps1
status: PARTIAL — first-ever run, not a clean baseline. See limitations below before using any row as a fact.
---

# gigback.org — AI-visibility baseline (lever 2, Phase 5.4), 2026-08-08

## Method note (read before trusting the table)

- **Only the Google AI Overview leg was checked.** Per `shared/ai-visibility.md`'s 2026-08-04 scoping (Dor's call), ChatGPT and Perplexity have no headless-safe check today — their real UI needs interactive Browser-pane tools, forbidden in scheduled/headless sessions. Same scope as Maxit's 2026-08-02 baseline (`agency/research/maxit/2026-08-02-ai-visibility.md`).
- **Google leg run via GeminiScout, not by this agent directly** — no agent can invoke `agy` headlessly (settled, `shared/ai-visibility.md`). Dor ran the sweep manually 2026-08-06; this report reads that raw output, per the "Dor performs, agents consume" contract (`agency/research/_raw/README.md`).
- **5 of 14 queries errored (permission-denied), not "no AI Overview."** Marked **NOT CHECKED** below — never read as a negative result. That's over a third of the sweep, so per the contract this is a **partial reading, not a clean baseline**.
- **🔴 The "gigback.org cited?" column (question 3) is not usable from this file.** The sweep script had a bug — fixed in commit `ee73931` at **2026-08-06 11:36 IDT**, but this raw file was generated at **10:14 IDT the same day**, before the fix. Every sweep run before the fix hardcoded the citation check against `mg.gigback.org`, not `gigback.org` (confirmed: this file's front-matter has no `site_checked` field, which only the post-fix script version writes). So question 3's answers in the source file are checking the wrong site entirely — not included in the table below. **A re-sweep is needed for real self-citation data; see recommendation #1.**
- What *is* usable: question 1 (does an AI Overview even show for this query) and question 2 (which domains it cites) are unaffected by the site-mapping bug.

## Per-query results

| # | Query | On-site coverage (verified via repo) | AI Overview shown | Domains cited (GeminiScout, unverified) | gigback.org cited |
|---|---|---|---|---|---|
| 1 | מערכת CRM לעמותות | **Live** — `ngo-crm-comparison.html` | Yes | vtiger.com, tazman.co.il, tfr.co.il, pro-file.co.il, bmt-business.co.il, israeltoremet.org, israelgives.org, fireberry.com, frontask.co.il, israelcrm.co.il, crmleader.co.il, amuta360.org.il | Not checkable (site-mapping bug, see method note) |
| 2 | בינה מלאכותית לגיוס משאבים | **Live** — `ai-fundraising-grant-writing.html` | Yes | tzedek.me, peach.co.il, shiftshatil.org.il, eyalmarcus.com, bringup.io, israeltoremet.org, avidai.com, goodunited.io, iiai.co.il, givebutter.com, kindsight.io, fundraiseup.com, oracle.com, orrgroup.com, export.gov.il | Not checkable |
| 3 | כתיבת בקשת תמיכה לעמותה | **Partial** — `government-grants-for-ngos.html` + `ai-fundraising-grant-writing.html` touch this, no dedicated "how to write a תמיכה request" guide | Yes | ferber-law.co.il, shiftshatil.org.il, goprospero.com, mof.gov.il, migzar3.org.il, mashabim.org, amuta.info, effectivemoneyraising.com, malkar.co.il, gov.il, shatil.org.il | Not checkable |
| 4 | לוח שנה רגולטורי לעמותות | **Live** — `annual-compliance-calendar.html` | **NOT CHECKED** (permission error) | — | — |
| 5 | אישור ניהול תקין | **Live** — `proper-management-checklist.html` | **NOT CHECKED** (permission error) | — | — |
| 6 | דיווח שנתי לרשם העמותות | **Partial** — `annual-compliance-calendar.html` covers deadlines; not a dedicated "annual report to the registrar" explainer | Yes | kadv.co.il, hashavia.co.il, bdo.co.il, migzar3.org.il, shaked-cpa.co.il, greeninvoice.co.il, justice.gov.il, gov.il, starkcpa.com | Not checkable |
| 7 | יחסים עם תורמים גדולים | **Live** — `regulator-major-donor-relationships.html`, directly on-topic | **No** — no AI Overview triggers for this query at all | none | n/a — no Overview exists to be cited in |
| 8 | כלים דיגיטליים לעמותות קטנות | **Live** — `ngo-tools-tasks-volunteers.html`, `excel-to-crm-migration.html` | **NOT CHECKED** (permission error) | — | — |
| 9 | ניהול מתנדבים בעמותה | **Live** — `ngo-tools-tasks-volunteers.html` | Yes | ivolunteer.org.il, shiftshatil.org.il, sfi.org.il, mdais.org, tazman.co.il, bringup.io, fireberry.com, weme-info.com, ubiz.co.il, amutotcenter.co.il, shatil.org.il, sheatufim.org.il, ruachtova.org.il | Not checkable |
| 10 | תוכנה לניהול תרומות | **Partial** — `ngo-crm-comparison.html`, `digital-donation-reporting-2026.html` touch this | **NOT CHECKED** (permission error) | — | — |
| 11 | סעיף 46 לעמותות | **Live** — `donor-due-diligence-checklist.html`, `digital-donation-reporting-2026.html` | Yes | none returned (inconclusive — tool limitation, not zero competition) | Not checkable |
| 12 | גיוס המונים לעמותה בישראל | **Zero** — no crowdfunding guide exists, not on `docs/content-map.md` | **NOT CHECKED** (permission error) | — | — |
| 13 | מדידת אימפקט בעמותה | **Zero** — no impact-measurement guide exists, not on `docs/content-map.md` | Yes | manofhome.org, menomadinfoundation.com, esade.edu, sureimpact.com, value-dbl.co.il, youtube.com, hackaveret.org, the4thwheel.com, midot.org.il, bridgespan.org, questionpro.com, maximpact.org.il, sopact.com, sfi.org.il | Not checkable |
| 14 | ממשל תאגידי בעמותה | **Live** — `board-meetings-protocol.html`, `proper-management-checklist.html` | Yes | gov.il | Not checkable |

## Ranked findings (by KPI impact)

1. **The self-citation question — the actual point of this baseline — is unanswerable from this sweep.** The raw source file predates the same-day site-mapping fix (script fixed 2026-08-06 11:36 IDT; this file generated 10:14 IDT), so its citation check ran against `mg.gigback.org` instead of `gigback.org` for all 9 answered queries. **Concrete next action: re-run `powershell -ExecutionPolicy Bypass -File ops/run-agy-visibility.ps1 -Domain gigback-org` (Dor, in his own terminal) to get a valid citation reading** — cheap, since 9 of 14 queries already have good answers cached and only need question 3 re-asked; the 5 errored queries retry automatically too.

2. **Two real content gaps confirmed, not previously on `docs/content-map.md`:** crowdfunding for Israeli NGOs (#12, query itself errored but the topic has zero on-site coverage) and impact measurement (#13, AI Overview is live and citing 14 competing domains — nonprofit-sector consultancies and measurement platforms, none of them GigBack). #13 is the stronger signal since it's a confirmed, populated AI Overview with real competition and zero site coverage today. Flagging both to `## Proposed` — content-map additions are Dor's call, not this agent's, per the locked-order rule.

3. **יחסים עם תורמים גדולים (#7) — the query this site has a dedicated, on-topic guide for — doesn't trigger an AI Overview at all.** Not a citation failure, a different problem: there's currently no AI Overview surface to be cited in for this exact phrasing. Not actionable on its own; worth re-checking on the next sweep to see if it's query-specific or a stable pattern, before concluding anything.

4. **5 of 14 queries (36%) never got checked** (#4 לוח שנה רגולטורי, #5 אישור ניהול תקין, #8 כלים דיגיטליים, #10 תוכנה לניהול תרומות, #12 גיוס המונים) — all permission-classifier denials, the known intermittent GeminiScout failure mode, not a site issue. All 4 of the checked-but-errored topics *other than #12* already have live on-site guides, so there's real signal waiting once a clean sweep runs.

## What this does NOT establish

- No ChatGPT or Perplexity citation data (headless scoping, see method note).
- No answer to "is gigback.org actually cited anywhere" — the one question T8 exists to answer — pending a post-fix re-sweep.
- Not a trend — first run, no month-over-month comparison possible yet.
- "None returned" (query #11) is a tool limitation, not evidence of zero competition.
