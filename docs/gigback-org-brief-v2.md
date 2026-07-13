# GigBack Labs — gigback.org — Brief v2 (Expanded)

> Supersedes `gigback-org-brief.md` (v1, in Downloads). This version 10x's the concept: sharper positioning, a fuller page architecture, net-new sections (Problem, Principles, FAQ, Waitlist), SEO/AI-SEO plan, and the concrete build/deploy spec that was actually implemented.

---

## 1. Concept (sharpened)

**GigBack Labs is a product studio for the Israeli third sector.**

The one-line thesis: *Israeli NGOs run on Excel, WhatsApp and goodwill. The tools that could fix that are in English, LTR, and priced for American enterprises. GigBack Labs builds the missing layer — Hebrew-first, RTL-native, free or fairly priced.*

### Why "Labs" and not "products page"

The framing matters. A "Labs" is allowed to ship betas, retire experiments, and grow a suite. It sets the expectation of *ongoing output* — which supports the waitlist mechanic (people subscribe to a lab, not to a single tool) and gives cover for "Coming soon" being most of the page today.

### Positioning ladder

| Level | Statement |
|---|---|
| Category | NGO tech lab (not an app store, not a marketplace, not an agency) |
| Audience | Israeli NGO directors, ops managers, board members |
| Enemy | Enterprise SaaS pricing + English-only/LTR tools + the Excel/WhatsApp status quo |
| Proof | GigBack CRM live demo; "Powered by Espresso" engineering backbone; gigback.io's 4-year track record with the sector |
| Promise | Tools that work in Hebrew, on day one, at a price a small amuta can say yes to |

### Product suite (v2 descriptions)

1. **GigBack CRM** — *Beta, live now.* Hebrew-first AI donor CRM. Flagship. Demo at crm.gigback.io. Each NGO gets its own instance at `[aguda].gigback.io`.
2. **GigBack Tasks** — *Coming soon.* RTL task management powered by Espresso. The gap: Monday.com is the sector default and it's expensive, English-centric, and over-featured.
3. **GigBack Org** — *Coming soon.* Organizational health & governance: gap mapping, board reports, annual filing tracking (ניהול תקין). Powered by Espresso.
4. **GigBack Agents** — *Coming soon.* Plug-in AI agents with plain-Hebrew guides: donor follow-up reminders, report generation, growing into full workflows.

### Ecosystem map

- **gigback.io** — micro-volunteering platform (people). Sibling, not parent.
- **gigback.org** — GigBack Labs (tools). This site.
- **Espresso** (espresso.mgh-ltd.com) — engineering backbone; appears only as a "Powered by" badge.

---

## 2. What v2 adds over v1 (the "10x")

| # | Upgrade | Why |
|---|---|---|
| 1 | **Problem section** ("Today it looks like this") | v1 jumped from hero to product. Naming the Excel/WhatsApp/English-SaaS pain makes the products feel inevitable, not arbitrary. |
| 2 | **Principles section** ("How we build") | Four commitments — Hebrew-first, fair pricing, built with NGOs, ship fast. This is the trust layer a no-logo, pre-revenue lab needs. |
| 3 | **FAQ section** with accordion + FAQPage JSON-LD | Answers the real objections (Is it free? Is my donor data safe? What's Espresso? Are you an amuta?) and doubles as SEO/AI-SEO surface. |
| 4 | **Real waitlist section** (Web3Forms) | v1 said "a basic form"; v2 specifies a working email capture with a product-interest selector, posting to Web3Forms → hello@gigback.org. One shared waitlist section instead of three per-card forms. |
| 5 | **CSS-drawn CRM product mockup** in the flagship section | "Feel like a real product showcase" needs a visual. A hand-drawn RTL browser-frame mock avoids stale screenshots and looks sharp at any size. |
| 6 | **Full bilingual SEO** | Both languages present in the DOM (visibility toggled by CSS on `html[lang]`), so Google indexes Hebrew AND English copy. Meta description, OG tags, JSON-LD `Organization` + `FAQPage`. ASCII-only paths (CF Pages rule). |
| 7 | **Language persistence** | Toggle stores choice in `localStorage`; returning visitors keep their language. |
| 8 | **Accessibility & motion hygiene** | `prefers-reduced-motion` respected, semantic landmarks, focus states, WCAG-checked contrast on iris-on-white. |
| 9 | **Legal pages scaffolded** (privacy.html, terms.html) | Placeholder Hebrew legal pages referencing the Israeli Privacy Protection Law; final text ported from the Base44 site before launch. |
| 10 | **Deploy spec** | Static, zero-build, Cloudflare Pages, verification curl per the CF non-ASCII lesson. |

Deliberately **not** added (scope control): blog, pricing page, testimonials (none exist yet — faking them would undermine the trust layer), dark mode, analytics (add Cloudflare Web Analytics post-launch, one script tag).

---

## 3. Page architecture (as built)

1. **Header** — sticky, blur backdrop. Wordmark ("GigBack **Labs**"), nav (Products / About / FAQ / GigBack.io↗), HE|EN toggle, CTA "נסו את ה-CRM".
2. **Hero** — thesis headline, subhead, dual CTA (primary → CRM demo, ghost → #products), small "מבית GigBack" ecosystem line.
3. **Problem strip** — dark iris section. "ככה זה נראה היום": three pain tiles (Excel/WhatsApp chaos · English enterprise SaaS · price walls).
4. **Flagship: GigBack CRM** — split layout. Left: eyebrow, Beta badge, description, 4 feature rows with icons, CTA to demo. Right: CSS browser-frame mockup of an RTL donor dashboard.
5. **Coming soon** — 3 cards (Tasks / Org / Agents), each: icon, status chip, description, "Powered by Espresso" badge where relevant, "עדכנו אותי" → scrolls to waitlist with product preselected.
6. **Principles** — 4 tiles: עברית קודם · מחיר הוגן · נבנה עם עמותות · משוגרים מהר.
7. **About / mission** — the "why", ecosystem tie to gigback.io.
8. **FAQ** — 5 accordion items, bilingual, mirrored in FAQPage JSON-LD.
9. **Waitlist** — name (optional), email, product-interest select, Web3Forms POST, inline success/error states, honeypot spam field.
10. **Footer** — Privacy · Terms · Contact (hello@gigback.org) · gigback.io link · "GigBack Labs · חלק מהאקוסיסטם של GigBack".

## 4. Design system (unchanged from v1, plus)

Tokens exactly per v1 (iris #6366F1 / #3730A3 / #EEF2FF, surface #FAF7F2, border #E7E2DA, text #1C1917/#78716C/#A8A29E). Radius 12px cards / 8px buttons. Max width 1100px.

**Fonts:** Plus Jakarta Sans (Latin) + **Heebo** (Hebrew glyphs) loaded together from Google Fonts; stack `'Plus Jakarta Sans','Heebo',system-ui,sans-serif` so each script renders in its intended face.

**Bilingual mechanism:** every text node exists twice in the markup with `data-lang="he"` / `data-lang="en"`; CSS on `html[lang]` shows one. `dir` flips with language. No routing, no reload, SEO sees both.

**Motion:** IntersectionObserver fade-up (300ms ease-out, 12px rise), hero fade-in on load, button hover scale 1.02 → iris-dark. All disabled under `prefers-reduced-motion`.

## 5. Tech & deploy

- **Stack:** plain HTML/CSS/JS. Files: `index.html`, `style.css`, `script.js`, `privacy.html`, `terms.html`. No build step.
- **Hosting:** Cloudflare Pages (direct upload or Git). Output dir = repo root. All paths ASCII.
- **Waitlist:** Web3Forms — replace `YOUR_WEB3FORMS_ACCESS_KEY` in `script.js` with the key from web3forms.com (free, verifies hello@gigback.org). Submissions arrive by email.
- **Domain:** gigback.org — re-point from Base44 in Cloudflare DNS after verification.
- **Post-deploy check:** `curl -s https://gigback.org | grep -q "GigBack Labs" && echo OK`
- **Post-launch (optional):** Cloudflare Web Analytics snippet; GSC property + Request Indexing for the root URL.

## 6. Open items before launch

- [ ] Create Web3Forms access key and paste into `script.js`
- [ ] Port real Privacy/Terms text from the current Base44 site
- [ ] Confirm CRM demo URL (crm.gigback.io) is the right link target
- [ ] Repoint gigback.org DNS from Base44 → CF Pages
- [ ] GSC: Request Indexing
