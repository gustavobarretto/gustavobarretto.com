# gustavobarretto.com

Personal website — minimalist light design with blog and projects.

## Stack

- **Astro** — static site
- **Tailwind CSS** — styling (minimal light theme)
- **Content collections** — blog (Markdown/MDX) and projects (YAML)

## Commands

| Command       | Action                          |
| ------------- | ------------------------------- |
| `npm install` | Install dependencies            |
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run build` | Build to `./dist`             |
| `npm run preview` | Preview production build    |

## Content

- **About / your photo:** Put your picture in **`public/avatar.jpg`** (or `public/avatar.png` and set `avatarSrc` to `/avatar.png` in `src/pages/about.astro`). The About page uses it automatically.
- **Blog:** Add `.md` or `.mdx` in `src/content/blog/`. Frontmatter: `title`, `description`, `pubDate`, optional `draft`.
- **Projects:** Add `.yaml` (or `.json`) in `src/content/projects/`. Each file: `title`, `description`, optional `link`, optional `logo` (e.g. `/slicefair-logo.png`), optional `linkSecondary` + `linkSecondaryLabel`, optional `date`. For the Slicefair logo, put the image in **`public/slicefair-logo.png`** (or set `logo` in `slicefair.yaml` to your path).

## Socials (configured in `src/config.ts`)

- GitHub: [github.com/gustavobarretto](https://github.com/gustavobarretto)
- Twitter: [twitter.com/gustavobarretto](https://twitter.com/gustavobarretto)
- LinkedIn: [linkedin.com/in/gustavo-barretto1](https://www.linkedin.com/in/gustavo-barretto1/)
- Email: gustavobarretto@gmail.com

## Deploy

Build and deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
