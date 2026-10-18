# Vikram Sai Battar — Portfolio

My personal tech portfolio, live at [vikram-battar.github.io](https://vikram-battar.github.io).

An Apple/Tesla-inspired single-page site: light, airy, huge typography, full-screen
product-style sections. No template, no framework — hand-written HTML, CSS, and
vanilla JS.

## What's on it

- **Hero** — animated gradient blobs, open-to-work eyebrow, parallax on scroll
- **Stats** — animated counters (years, projects, migrations, accounts)
- **Flagship** — dark showcase section for agentic-incident-responder with a terminal mock
- **Projects** — Tesla-style feature rows, each with a CSS-art visual, tech tags, and GitHub link
- **Experience** — timeline with META and JP Morgan Chase roles, education, certification
- **Skills** — grouped pills
- **About & Contact** — email, LinkedIn, location (no phone, by design)

## Interactions

All in `js/main.js`: IntersectionObserver scroll reveals, eased stat counters,
nav border on scroll, and subtle hero parallax. No libraries.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to the `main` branch of the `vikram-battar.github.io` repo — GitHub Pages serves it automatically.

## Customize

- Profile photo: replace `assets/img/profile.jpg`
- Accent color: `--accent` in `css/style.css` (currently Apple blue `#0071e3`)

## License

MIT — see [LICENSE](LICENSE).
