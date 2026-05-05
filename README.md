# B&B Building and Design — Static Site

A polished, design-led website for B&B Building and Design Pty Ltd (previously B Yang Construction Pty Ltd) — a Sydney design & build studio based in Concord NSW.

## Files
- `index.html` — homepage
- `about.html`, `services.html`, `portfolio.html`, `blog.html`, `contact.html` — main pages
- `portfolio-*.html` — 7 project detail pages
- `blog-*.html` — 3 journal articles
- `styles.css` — styling (warm palette, Cormorant Garamond + Inter)
- `script.js` — shared header & footer, mobile nav, scroll reveal, contact form
- `img/` — all project, hero and blog images, plus `favicon.svg` (local assets only)

## Preview locally
Just open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Publish online (free options)

### Option 1 — Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the entire site folder onto the page
3. Done — you'll get a live URL instantly

### Option 2 — Vercel
```bash
npm i -g vercel
vercel
```

### Option 3 — GitHub Pages
1. Create a new repo and push these files
2. Repo Settings → Pages → Deploy from `main` branch (root)

## Customising
- Brand colours live as CSS variables at the top of `styles.css` (`--accent`, `--ink`, etc.)
- Header & footer markup is rendered from `script.js` (`renderHeader` / `renderFooter`)
- Replace project photos in `img/` to update portfolio tiles
- Update copy directly in the relevant `*.html` file
