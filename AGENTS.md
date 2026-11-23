# Project instructions

These instructions apply to the entire repository and to all coding assistants,
including ChatGPT, Codex, and Claude. Keep this file as the single source of
project instructions. `CLAUDE.md` directs Claude to this file; preserve that entry
point when updating these instructions.

## Project context

- This repository contains Gustavo Barretto's personal website.
- The site uses Astro, TypeScript, Tailwind CSS, and static content collections.
- Work entries live in `src/content/work/` as YAML files and support professional
  experience and personal projects, with period and organization metadata.
- Devlogs live in `src/content/devlogs/` as Markdown or MDX files, with optional
  categories and a draft flag. Do not publish sample posts or invented categories.
- The public sections are Devlogs, Work, and Backstory. Devlogs is the landing
  page, and legacy URLs redirect to their replacements. Keep the paper palette
  and responsive layout.
- The Work introduction is configured in `PROFILE.intro` in `src/config.ts`.
  Use only biographical details and work history supplied by the user.
- Keep website copy in English unless the user requests another language.
- Communicate with the user in the language they use.

## Working practices

- Inspect the working tree before editing and preserve unrelated existing work.
- Follow existing code and content conventions and keep changes focused on the
  requested task.
- Check for more specific `AGENTS.md` instructions before editing a subdirectory.
- Verify current product information against its official website when updating
  project descriptions.
- Do not add generated files, build output, caches, credentials, or dependency
  directories to commits unless the user explicitly requests those changes.
  Some generated files and dependencies are already tracked; avoid including
  incidental changes to them.

## Validation

- Run `npm run build` for changes that affect the website.
- Check the generated pages and, when relevant, RSS and sitemap output for
  changed or removed content.
- Run `git diff --check` and review the staged diff before committing.
- The repository currently includes dependency files that may be out of sync
  with `package.json`. If this prevents validation, distinguish the dependency
  issue from the requested change and report the validation environment used.
- Do not claim validation passed if it failed or was not performed.

## Commits

- Local Git commits are permitted without asking for additional approval.
- Commit in logical stages as each coherent, reviewable part of the task is
  completed. Keep unrelated changes in separate commits.
- Write every commit subject and body in English.
- Use concise commit messages that describe the actual change.
- Stage files or hunks explicitly and inspect the staged diff. Avoid blanket
  staging that could include unrelated work.
- Do not commit another person's pre-existing changes without authorization.
- Do not amend existing commits or rewrite history unless the user explicitly
  requests it.

## Push authorization

- Every push requires explicit user authorization for the intended remote and
  branch before it is executed.
- Permission to edit, validate, create branches, or make local commits does not
  authorize a push.
- Prepare and validate the changes locally before requesting push authorization,
  so the user can review the concrete result.
- This requirement covers all forms of `git push`, including tags, force pushes,
  and equivalent publication of local commits through APIs or automation.
- If push authorization has not been given, keep the work local and report the
  completed changes, validation, and local commits to the user.
