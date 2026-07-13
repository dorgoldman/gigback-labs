# Perplexity Deep Research — Prompt Set (Phase 1.1)

Run each prompt as a separate Deep Research session (don't chain them — each needs its own full research pass). Save every raw output as its own file in `docs/research/raw/` (e.g. `raw/01-sector-landscape.md`), then tell Claude to synthesize all of them into `docs/research/perplexity-baseline.md` per the roadmap.

Order matters: 1–2 give the map, 3–5 give the content angles, 6 validates the business case.

---

## 1. Sector landscape & scale

```
I'm researching Israel's third sector (nonprofits/NGOs/עמותות) for a
content and product strategy. Give me a deep, sourced picture of:

1. How many registered nonprofits (עמותות) exist in Israel today, and
   how many are actively operating vs. dormant? Cite רשם העמותות /
   Guidestar Israel / משרד המשפטים data with dates.
2. Size distribution: what share are small (1-5 staff), mid-size, and
   large NGOs? Where does the median NGO fall on budget and headcount?
3. Total sector revenue/spend, and how it breaks down by cause area
   (welfare, education, health, religion, environment, etc.)
4. Recent (2024-2026) structural trends: funding pressure, government
   support changes, war-related shifts in donation patterns, staffing
   shortages, digital transformation adoption.
5. Who are the key intermediary/support organizations for the sector
   (e.g. ג'וינט ישראל, מכון מידות, מנהיגות אזרחית, JGive, שקוף) and
   what gaps do THEY say exist in tooling/support for small-to-mid NGOs?

Prioritize Hebrew-language and Israeli sources (gov.il, Guidestar
Israel, מידות, JFN, academic papers on the Israeli third sector) over
generic global nonprofit-sector content. Give me direct citations and
publication dates for every stat.
```

## 2. Tooling & technology landscape

```
I'm mapping what software/technology tools Israeli nonprofits (עמותות)
currently use to run donor management, task/project management, and
organizational governance — and where the gaps are. Research:

1. What CRM/donor-management tools do Israeli NGOs actually use today?
   Include both dedicated tools (Salesforce Nonprofit Cloud, Bloomerang,
   Kindful, local Israeli products) AND informal tools (Excel, Google
   Sheets, WhatsApp groups, Gmail). Which is most common at small NGOs
   specifically (under 10 staff)?
2. Are there Hebrew-language or RTL-native project/task management
   tools built for nonprofits? How does Monday.com's pricing and
   language support work for a small Israeli NGO specifically — cost
   in ILS, whether Hebrew UI exists, common complaints from Hebrew-
   speaking users.
3. What AI tools or "AI agents" are Israeli NGOs starting to adopt in
   2025-2026, for what tasks (grant writing, donor follow-up, reporting)?
4. Search Hebrew NGO Facebook groups, forums, and LinkedIn discussions
   (e.g. groups for מנהלי עמותות, ניהול עמותות) for real complaints
   about existing tools — quote or closely paraphrase what people
   actually say is broken, expensive, or missing.
5. Any existing Hebrew-first NGO tech products I should know about as
   direct or adjacent competitors — for CRM, task management, or
   governance/compliance tools?

I need direct sourcing and, where possible, actual quotes from Hebrew-
language community discussions, not generic "nonprofits struggle with
technology" claims.
```

## 3. Governance, compliance & board pain points

```
Research what Israeli nonprofits (עמותות) find hardest about
governance and regulatory compliance (ניהול תקין), specifically:

1. What are the actual annual filing/reporting requirements from
   רשם העמותות and רשות המסים for an עמותה to maintain ניהול תקין
   status? What's the real-world failure rate or common mistakes that
   cause NGOs to lose this status?
2. What do board meetings and board reporting typically look like at
   small-to-mid Israeli NGOs? What's cited as painful — frequency,
   documentation, lack of tools, volunteer board members' time
   constraints?
3. What does "gap mapping" or organizational health assessment
   currently look like for Israeli NGOs — do consultants do this
   manually, are there existing frameworks (e.g. from ג'וינט, מכון
   מידות) that NGOs use?
4. Search for actual Hebrew-language questions people ask online
   (Facebook groups, forums, Google "people also ask" style queries)
   about ניהול תקין, עמותה annual reports, board governance — give me
   the specific phrasing people use, not paraphrases.
5. What triggers an NGO director to seek outside help for governance —
   a specific incident (almost lost status, board conflict, funder
   audit) or gradual awareness?

Prioritize direct Hebrew source quotes and gov.il primary sources over
general nonprofit-governance content from US/UK sources.
```

## 4. Donor relations & fundraising behavior

```
Research how small-to-mid Israeli nonprofits (עמותות) manage donor
relationships and fundraising, specifically:

1. What does the donor base of a typical small Israeli NGO look like —
   mix of individual donors, family foundations (קרנות משפחתיות),
   corporate/CSR giving, and government/מפעל הפיס funding? How has this
   mix shifted since October 2023?
2. What's the state of donor retention practice — do small NGOs
   actually track donor history, send personalized follow-ups, segment
   donors? Or is this mostly absent below a certain org size?
3. What Hebrew-language content already exists (guides, courses,
   webinars) teaching Israeli NGOs about donor management and
   fundraising? Who publishes it (ג'וינט, JFN, private consultants)
   and what does it cover that's missing?
4. Search Hebrew NGO community discussions for real questions/pain
   points about "לשמור על קשר עם תורמים," "לגייס תרומות," "תורם חוזר" —
   give me actual phrasing.
5. What role does AI currently play (or get discussed) in Israeli
   fundraising — donor insight generation, personalized outreach,
   report writing for funders?

I need this to inform content and product decisions for a Hebrew-first
donor CRM product, so prioritize concrete, sourced, Israel-specific
findings over generic fundraising best-practice content.
```

## 5. Search & content gap analysis

```
I'm evaluating whether there's a real content gap for a Hebrew-language
website that publishes long-form guides for Israeli nonprofit staff,
volunteers, and philanthropists on topics like NGO governance, donor
management, and nonprofit technology. Research:

1. Who currently ranks in Google.co.il for Hebrew searches like:
   "איך לנהל עמותה," "ניהול תקין עמותה," "CRM לעמותות," "גיוס תרומות
   לעמותה," "דוח שנתי עמותה," "רישום עמותה בישראל." List the actual
   ranking sites/pages you can identify and assess their quality —
   government sites, consultants, blogs, or is the field mostly thin?
2. What related "people also ask" or autocomplete-style questions
   cluster around these topics in Hebrew?
3. Are there any existing high-quality Hebrew blogs/resource hubs
   specifically for the Israeli third sector? (e.g. do ג'וינط, מכון
   מידות, JFN, or others run a real content/blog operation, and how
   active/recent is it?)
4. Estimate, as best you can from available signals, whether these are
   low-competition/underserved queries or whether strong incumbents
   already own them.
5. What content FORMATS seem to be missing — e.g. practical templates,
   calculators, comparison guides, checklists — versus what already
   exists in abundance?

Give me a clear verdict: is this an underserved content space in
Hebrew, and which 5-10 topics look like the strongest opportunities
based on apparent demand vs. existing supply?
```

## 6. Business & product validation

```
I'm building GigBack Labs — a Hebrew-first, RTL-native suite of
affordable software tools for Israeli nonprofits (donor CRM, task
management, organizational governance tools, AI agents), paired with a
Hebrew content site. Sanity-check the business thesis:

1. Is "existing tools are English/LTR and priced for enterprise, so
   small Israeli NGOs use Excel/WhatsApp instead" an accurate framing
   of the current market, or is it outdated / already being solved by
   someone?
2. Are there recent (2024-2026) examples of Israeli or Hebrew-market
   B2B SaaS succeeding specifically by being "the Hebrew/local
   alternative" to an English incumbent — in any vertical, not just
   nonprofit? What made that work?
3. What's the realistic willingness-to-pay for a small Israeli NGO
   (under 10 staff) for donor CRM or task management software — in
   ILS, monthly or annual? Any public pricing benchmarks from
   comparable Israeli SMB SaaS?
4. Who else, if anyone, is explicitly building "tech for Israeli
   NGOs" as a company or initiative right now (not a single product,
   the positioning itself)? Assess how crowded or empty that specific
   positioning is.
5. What's the biggest risk to this thesis that a founder in this space
   should take seriously — funding cycles, NGO risk-aversion to new
   tools, government/Base44-style competitors, something else?

I want a direct, skeptical assessment, not encouragement — tell me if
parts of this thesis look weak based on what you find.
```

---

## After running all 6

Tell Claude: *"Perplexity research is done, synthesize it"* — I'll read every file in `docs/research/raw/`, write `docs/research/perplexity-baseline.md` (per roadmap 1.1), and flag anything that should change the content-pillar assumptions in `docs/ROADMAP.md` before we move to Claude-Chrome field research (1.2).
