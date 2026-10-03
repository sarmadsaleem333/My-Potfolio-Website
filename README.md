# Muhammad Sarmad Saleem — Portfolio

Personal portfolio built with **Next.js (static export) + Tailwind CSS**, deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

In dev mode, missing images show the file path to add.

## Edit content

Everything is in **[`data/portfolio.ts`](data/portfolio.ts)**: profile, about, experience, projects, publications, skills, education and hobbies.

- **Project links:** fill in `github`, `live` and `paper` for each project. Empty code/website links point to your GitHub profile; empty paper links point to your ResearchGate profile.
- **LinkedIn / Scholar:** fill in `profile.socials`.

## Images

| File | Used for |
|---|---|
| `public/images/profile.png` | Hero photo |
| `public/images/about.jpeg` | About section photo |
| `public/images/logos/*` | Experience and education logos |
| `public/images/projects/<name>.jpg` | Project cards (see each project's `image` in `data/portfolio.ts`) |

Missing images show a placeholder. In dev mode it also shows the file path to add.

## Deploy to GitHub Pages

1. Push to `main`.
2. In the repo, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** (one-time).
3. The workflow in `.github/workflows/deploy.yml` builds the site and publishes `out/`.

The site is served at `https://sarmadsaleem333.github.io/My-Potfolio-Website/`. The base path is set automatically. If you rename the repo to `sarmadsaleem333.github.io`, the site moves to the root URL with no code changes.
