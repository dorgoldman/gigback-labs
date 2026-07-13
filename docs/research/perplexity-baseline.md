# Perplexity Deep Research — Baseline Synthesis

> Synthesized from `raw/01-06`. Read `validation-memo.md` first for the verdict — this file is the supporting detail.

## Sector scale

- ~75,000 registered עמותות (cumulative registry, includes dormant/dissolved), but only **~20,000–25,000 actively operating** (filed activity in the last 3 years). This is the real addressable universe, not 75k.
- Long tail: most NGOs are small (0–5 paid staff + volunteers); a thin top layer of large welfare/health/education/religious orgs dominates total spending. No public post-2018 breakdown exists at finer granularity — Guidestar's 2018 yearbook is the last systematic size study.
- Since Oct 7 2023: donation volume surged sharply (JGive: 102M ₪ in Oct 2023 alone, 10x Oct 2022), donor base got younger (66% of post-Oct-7 donors are 18–29, vs. 88% over-50 pre-war) and more foreign (71% of JGive Oct-2023 volume from abroad). Cause priorities shifted toward welfare/security/evacuees; cancer/disability NGOs saw relative declines. This is likely a temporary spike, not a new baseline — treat war-era numbers as a spike, not the steady state.

## Tooling landscape — more crowded than assumed

This is the single most important correction to our starting assumptions. Israel already has a **cluster of Hebrew-first, NGO-specific CRM/donation tools**: IsraelGives (free CRM), JGive (CRM + fundraising infra, used by thousands of NGOs during the war), Powerlink/Fireberry (free NGO tier), APT, נדרים פלוס, קשר/קהילות, Kala CRM, Frontask, Unitech, Tazman, ToAssociate. Several are explicitly "בעברית מלאה," free or near-free, and already integrate סעיף 46 receipts and bank הוראת קבע.

Where the real, confirmed gap is:
- **Task/project management**: Monday.com dominates (with a strong nonprofit discount — 10 free seats, 70% off beyond), but a 2024 Hebrew source states plainly: "אין עדיין מערכת מאנדיי בעברית מלאה" — the UI stays LTR even with Hebrew labels. This is a real, confirmed, sourced RTL gap. **Validates GigBack Tasks specifically.**
- **Governance/organizational health**: mostly manual — consultants, Midot's effectiveness seal (weeks-long process, only for orgs scoring 75+), no self-serve digital gap-mapping tool for ordinary small NGOs. **Validates GigBack Org.**
- **AI agents**: adoption is real but narrow — grant-writing, thank-you letters, report summarization (mostly via ChatGPT ad hoc, or Monday AI's credit-metered add-on). No standalone "AI agent for NGOs" product yet. **Validates GigBack Agents as genuinely early.**

## Governance & compliance — concrete, well-documented pain

- Hard deadline: annual reports due **June 30** the year after the report year. December 2024: registrar revoked ניהול תקין status for **~200 עמותות** for late/missing filings — a real, citable "this actually happens to people" hook.
- Four required documents: דוח כספי, דוח מילולי, פרוטוקול אסיפה כללית, המלצות ועדת ביקורת. Eligibility requires 2+ years of continuous activity and no significant irregularities.
- Common failure modes: late submission, incomplete package, contradictions between narrative and financial reports, missing audit committee documentation.
- Real trigger moments for seeking help: imminent loss of ניהול תקין, funder/government audit, being placed in a "תכנית לתיקון ליקויים," or a donor/funder demanding a Midot-style health check.
- Actual Hebrew phrasing people search: "מהו אישור ניהול תקין", "איך ממלאים דוח מילולי לרשם העמותות בלי שיחזירו אותו עם הערות", "מה צריך להגיש לרשם העמותות".

## Donor relations

- Donor churn is high and largely unmanaged below a certain org size: one Hebrew source states "יותר מ-50% מהתורמים עוזבים אתכם." Retention content (thank-you flows, newsletters, segmentation) is abundant in *advice* form but not operationalized in tools small NGOs actually use.
- Existing Hebrew content on this topic is **didactic, not tool-driven** — good articles telling NGOs what to do, nothing showing them how to do it inside a simple system. This is a genuine content + product gap.
- AI in this space today = writing assistant (grant drafts, thank-you copy, report summaries), not predictive/workflow AI. Room to differentiate here specifically for GigBack CRM/Agents.

## Content landscape — verdict: real gap, but uneven by topic

| Topic cluster | Competition | Notes |
|---|---|---|
| NGO registration ("רישום עמותה") | **High** | Saturated — gov.il + many law firm/CPA guides. Skip. |
| ניהול תקין / annual reporting legal basics | **Moderate** | Solid legal explainers exist (GreenInvoice, Tamir Sharabi), but written by lawyers for lawyers — thin on day-to-day operator workflow. |
| CRM/donor-tech education | **Low** (for neutral, non-sales content) | SERP is dominated by vendor product pages, not education. Real opening for neutral comparison/how-to content. |
| Governance operations (board meetings, gap mapping) | **Low** | Almost nothing practical exists beyond generic "ניהול עמותה מורכב" pieces. |
| Donor retention playbooks | **Low-moderate** | A few strong single articles (Amuta Info, Zecharia Landau) but no integrated resource hub. |
| Tool comparisons (CRM vs CRM, PM tool for NGOs) | **Very low** | Essentially doesn't exist as neutral content — only vendor pages and one shallow comparison post. |

Missing content **formats** across the board: templates (board protocols, narrative report skeletons), checklists ("are you ready for June 30"), donor-retention scorecards, neutral CRM/PM comparison guides, Excel→CRM migration guides.

No single Hebrew site functions as "the place third-sector staff go to learn how to run and digitize an NGO." That space is open.

## Perplexity's top opportunity topics (as given, lightly reordered)

1. מדריך שנתי לעמותה קטנה — calendar walkthrough of the whole compliance year
2. איך לעבור מאקסל ווואטסאפ ל-CRM פשוט בעברית
3. ניהול תקין לעמותות קטנות — צ'ק ליסט + תבניות
4. שימור תורמים ותורמים חוזרים בעמותה קטנה
5. השוואה מעשית: CRM לעמותות (neutral comparison — genuinely rare content)
6. טכנולוגיה לניהול מתנדבים ופרויקטים בעמותות (Monday/ClickUp/Workspace for NGOs)
7. בינה מלאכותית לגיוס משאבים וכתיבת בקשות תמיכה
8. ניהול ישיבות ועד ודיווח למוסדות העמותה
9. מדריך למשפחות וקרנות ישראליות לתמיכה אפקטיבית בעמותות (donor-side, secondary priority)
10. מערכת יחסים עם רגולטורים ותורמים גדולים
