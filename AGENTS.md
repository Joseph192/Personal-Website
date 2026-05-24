# AGENTS.md

## Project Type

This is a personal website with:
- An introduction/homepage.
- A writing section.
- A project portfolio.

This should stay mostly static and frontend-only unless the task explicitly requires server-side behavior.

## Main Goals

- Keep the site simple, readable, fast, and easy to maintain.
- Prefer static content files over hard-coded content inside components.
- Do not add a backend unless the task clearly requires server-side behavior.
- Do not add login, databases, comments, or admin panels unless explicitly requested.

## Project Structure

- `src/pages/` contains main pages.
- `src/components/` contains reusable UI components.
- `src/content/writing/` contains writing posts.
- `src/content/projects/` contains project writeups.
- `src/data/site.js` contains site-wide personal information and links.
- `src/styles/` contains global styles and design variables.
- `src/lib/` contains helper functions for reading, sorting, or formatting content.
- `public/` contains static assets such as images, resume PDFs, and icons.
- `docs/agent/` contains extra guidance for Codex.
- `.agents/skills/` contains reusable workflows.

## Coding Rules

- Reuse existing components before creating new ones.
- Keep components small and focused.
- Keep content separate from layout when possible.
- Do not duplicate the same personal information in many files; use `src/data/site.js`.
- Do not store secrets, API keys, passwords, or private data in frontend code.
- Do not add new dependencies unless necessary.
- Prefer clear code over clever code.

## Writing Rules

- Writing posts should go in `src/content/writing/`.
- Each writing post should have `title`, `date`, `description`, and content.
- Keep writing post filenames lowercase and hyphenated, like `my-first-post.md`.
- Do not change old writing post URLs unless explicitly asked.
- Keep all writing posts visually consistent with the current writing detail page:
  black page background, top-right writing navigation, an icon-only back arrow
  above the title, title and bold off-white formatted date on the black
  background, and the post body inside a white rounded content panel.
- Display writing dates as `Month Day, Year` with abbreviated month names when
  applicable, such as `May 21, 2026`; keep source frontmatter dates as
  `YYYY-MM-DD`.

## Project Portfolio Rules

- Project writeups should go in `src/content/projects/`.
- Each project should include `title`, `description`, `tags`, `date`, links, and image if available.
- Prefer project cards that summarize the project and link to a longer writeup.

## Design Rules

- Keep the design clean and readable.
- Prioritize mobile-friendly layout.
- Use consistent spacing, typography, and colors.
- Make links and buttons obvious.
- Keep accessibility in mind: semantic HTML, readable contrast, clear labels.

## Testing And Verification

After meaningful changes:
- Run the relevant build command if available.
- Run lint or typecheck if configured.
- Do not claim tests or builds passed unless they actually ran.

## Done Means

A task is done when:
- The requested change is implemented.
- The site structure remains clean.
- Content is placed in the correct folder.
- Relevant checks were run or clearly explained.
- The final response summarizes what changed and any risks.
