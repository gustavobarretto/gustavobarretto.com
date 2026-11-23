# gustavobarretto.com

Gustavo Barretto's personal website: Work, Devlogs, and Backstory. Built with
Astro 5, TypeScript, Tailwind CSS, and content collections. The design uses a
paper palette, teal accents, and a responsive header.

## Development

| Command | Action |
| --- | --- |
| `npm ci` | Install dependencies from the synchronized lockfile |
| `npm run dev` | Start the local server at `http://localhost:4321` |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build |

Builds clear Astro's content cache so that deleted posts cannot remain in the
generated site, including when the last devlog is removed.

The lockfile matches the Astro 5 manifest. The repository still tracks older
dependency directories and generated Astro files. Run `npm ci` before development
to replace the bundled dependencies, or use an isolated clean environment for
validation. Avoid committing incidental changes to bundled dependencies or caches.

## Introduction and Backstory

- Edit `PROFILE.intro` in `src/config.ts` to change the short introduction on Work.
- Navigation and social links are configured in the same file.
- Edit `src/pages/backstory.astro` for the longer biography; the photo is
  `public/avatar.jpg`.
- The introduction currently reuses the existing biography's opening sentence while
  the owner prepares the final introduction. Do not invent work history.

## Work

Add YAML files in `src/content/work/`. Both employment and personal projects use
the same layout: period and organization on the left, contribution on the right.
The following is a format example only; it is not published content:

```yaml
title: Example contribution
organization: Example company
period: "2022–2025"
kind: experience # experience or project
role: Software Engineer
date: 2025-12-01 # sorting date; newest entries appear first
description: Describe the contribution and its outcome.
details:
  - An optional additional paragraph.
link: https://example.com
```

Required fields: `title`, `organization`, `period`, `date`, and `description`.
Optional fields: `kind` (defaults to `project`), `role`, `details`, `link`,
`logo`, `linkSecondary`, and `linkSecondaryLabel`. The `role` field is the
right-hand heading; when absent, `title` is used. `period` is a display label
and may contain a year, range, or "Present". `date` only controls ordering.

## Devlogs

Add Markdown or MDX files in `src/content/devlogs/`. There are intentionally no
posts or predefined categories yet. The following is a format example only:

```markdown
---
title: A devlog title
description: A short summary.
pubDate: 2026-11-23
draft: true
categories:
  - Engineering
  - Side projects
---

Write the devlog here.
```

Restart the development server after adding the first post to an empty collection.

`categories` defaults to an empty array. Categories are collected automatically
from published posts; drafts are excluded from the list, filters, routes, RSS,
and sitemap. Set `draft: false` when a post is ready to publish. Keep temporary
test posts outside the actual content directory.

The category filter supports shareable `?category=` URLs, browser back/forward,
and a no-results state. Without JavaScript, all published posts remain readable.
Each post is available at `/devlogs/<id>`, including nested content paths.

## Routes and deployment

- `/` opens `/work`.
- `/projects` redirects to `/work`.
- `/blog` and `/blog/<id>` redirect to their `/devlogs` replacements.
- `/about` redirects to `/backstory`.
- `/rss.xml` contains published devlogs and their categories.

Astro supplies static redirects, and `vercel.json` supplies permanent HTTP
redirects for Vercel. Other static hosts should configure equivalent HTTP
redirects. The generated sitemap lists current sections and published devlogs.

Local commits are allowed in logical stages with English messages. A push
requires explicit user authorization; see `AGENTS.md` and `CLAUDE.md`.
