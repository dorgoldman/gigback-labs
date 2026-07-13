# GigBack Labs — gigback.org

Bilingual (HE/EN) static landing page for GigBack Labs. No build step — plain HTML/CSS/JS.

## Files
- `index.html` — the landing page (Hebrew RTL default, EN toggle)
- `style.css`, `script.js`
- `privacy.html`, `terms.html` — placeholder legal pages (port final text from Base44 site)
- `docs/gigback-org-brief-v2.md` — the expanded brief this was built from

## Before launch
1. **Web3Forms key:** create a free key at https://web3forms.com (verify with hello@gigback.org), replace `YOUR_WEB3FORMS_ACCESS_KEY` in `script.js`.
2. Port real Privacy/Terms text.
3. Deploy to **Cloudflare Pages**: Dashboard → Pages → Create → connect repo (or direct upload). Build command: none. Output dir: `/`.
4. Point `gigback.org` DNS from Base44 → CF Pages (custom domain in Pages settings).
5. Verify: `curl -s https://gigback.org | grep -q "GigBack Labs" && echo OK`
6. GSC: add property + Request Indexing.
