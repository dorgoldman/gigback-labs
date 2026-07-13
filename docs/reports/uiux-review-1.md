# UI/UX Review 1 — Phase 2.1

Date: 2026-07-13. Pages reviewed: landing (`index.html`), guides hub (`guides/index.html`), a guide article (`guides/proper-management-checklist.html`), author page (`author/dor-goldman.html`). Desktop (1440×900) and mobile (375×812).

Three bugs were already fixed earlier this session and are **not** re-flagged here: mobile nav fully hidden below 860px, guide-grid not centering (CSS margin cascade), em-dashes in copy.

## Findings, ranked by priority

### 1. Color contrast — `--text-subtle` fails WCAG AA (CRITICAL)

`--text-subtle: #A8A29E` on the surface/card backgrounds measures **2.36:1** and **2.52:1** — both far under the 4.5:1 minimum for normal text. This color is used for real, load-bearing text, not decoration:

- `.breadcrumb` (every guide page)
- `.article-meta` — the byline itself: "דור גולדמן · 13 ביולי 2026 · 5 דקות קריאה"
- `footer` — all footer links and copy, site-wide
- `.lang-toggle button` (inactive state)
- `.form-note` on the waitlist form

**Fix:** darken `--text-subtle` to something like `#8A8580` (still visually "quieter" than `--text-muted` but passes 4.5:1), or switch these specific uses to `--text-muted` (`#78716C`, which itself is borderline at 4.49:1 — see next finding).

### 2. `--text-muted` is borderline (4.49:1, just under 4.5:1) (HIGH)

`--text-muted: #78716C` on `--surface` (`#FAF7F2`) measures 4.489:1 — technically fails AA by a hair. This is your workhorse body-copy color (`p` default, article prose secondary text). A one-shade darken (e.g. `#726C67` or `#6E6862`) would clear 4.5:1 with margin and be visually indistinguishable.

### 3. Inline links (iris on surface) also borderline (4.18:1) (HIGH)

`--iris: #6366F1` on `--surface`/white measures **4.18:1**. Guide-body links (`.article-body a`, weight 600, ~16px) don't qualify for the "large text" 3:1 exception — they need 4.5:1 and currently miss it. This affects every in-article product mention link across all 6 guides.

**Fix:** darken the link color specifically for body-text contexts, e.g. use `--iris-dark` (`#3730A3`, 8.9:1+) as the link color and reserve `--iris` for large UI elements (buttons, badges, headings) where contrast requirements are looser.

### 4. Touch targets under 44×44px (CRITICAL, mobile)

Measured at 375px viewport:

| Element | Size | Needs |
|---|---|---|
| `.nav-toggle` (hamburger) | 29.5 × 40px | 44 × 44px |
| `.lang-toggle button` (עב/EN) | ~40 × 28px | 44 × 44px |
| `.notify-link` ("עדכנו אותי...") | 265 × 23px | 44px height |

All three are tappable, real interactive elements — not decorative. The hamburger in particular is the primary mobile nav entry point.

**Fix:** increase padding on `.nav-toggle` (e.g. `padding:10px`), `.lang-toggle button` (`padding:10px 14px` instead of `5px 12px`), and `.notify-link` (wrap in more vertical padding or increase line-height).

### 5. No custom focus-visible state on links/cards (MEDIUM)

`.btn` and form inputs have explicit `:focus-visible` styling; `nav a`, `.guide-card`, `.notify-link`, `.related-guides a`, and `.card` links do not. They fall back to the browser default outline, which works but is visually inconsistent with the brand's iris focus ring used elsewhere. Low urgency (nothing is broken for keyboard users) but worth unifying — one rule (`a:focus-visible{outline:2px solid var(--iris);outline-offset:2px}`) would cover all of them.

### 6. Honeypot field not `aria-hidden` (LOW)

`<input type="checkbox" name="botcheck" class="hp" tabindex="-1">` is visually hidden (off-screen) and skipped in tab order, but screen readers can still announce it since it isn't `aria-hidden="true"`. Minor — add `aria-hidden="true"` for a cleaner screen-reader pass.

### 7. Phase 2.4/2.5 still outstanding — no OG image, placeholder favicon (MEDIUM, not new)

Confirmed still true: no `og:image` meta tag on any page (social shares will render with no preview image), and the favicon is still the placeholder "GL" SVG square. Both were already flagged in the roadmap as not-yet-started; re-confirming they're the right next pickups since content is now live and shareable.

## What's already working well

- No horizontal scroll at any tested width (375–1440px).
- Heading hierarchy is clean and correctly nested on every page tested (no skipped levels).
- All real form inputs (name/email/product) have proper `<label for>` associations.
- `prefers-reduced-motion` is respected site-wide.
- Headline text contrast (`--text` on `--surface`) is excellent at 16.4:1.
- `.pain p` (light iris-tinted text on the dark iris problem-strip) passes comfortably at 6.66:1.
- No images anywhere yet, so no missing-alt-text debt to carry.
- RTL layout is structurally sound — no mirroring bugs, no leftover LTR artifacts in the tested pages.

## Recommended fix order

1. Color contrast (#1–3) — accessibility-critical, same root cause (the neutral-gray palette is a touch too light), can likely be fixed together with 2–3 CSS variable edits.
2. Touch targets (#4) — quick padding fixes, mobile-critical.
3. Focus states (#5) and honeypot (#6) — cheap, do alongside #1–4.
4. OG image + favicon (#7) — separate task, needs an asset, not just CSS.
