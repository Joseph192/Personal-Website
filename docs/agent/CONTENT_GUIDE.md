# Content Guide

## Writing Posts

Writing posts belong in:

`src/content/writing/`

Use lowercase hyphenated filenames:

```text
good: my-first-post.md
bad: My First Post.md
```

When a Word document is provided for the same post, keep it alongside the
Markdown file using the same basename:

```text
my-first-post.md
my-first-post.docx
```

Use the Word document as the formatting reference. Preserve visible styling in
the Markdown-rendered post by using Markdown plus inline HTML where needed
(for example bold, italics, underlines, lists, links, spacing, or other
intentional formatting). The Markdown file remains the source rendered by Astro;
the `.docx` is the reference/original document.

Each writing post should include frontmatter:

```md
---
title: "My First Writing Post"
date: "2026-05-21"
description: "A short summary of the post."
published: true
---

Write the writing post here.
```

### Current Writing Post Format

All writing posts should keep the same presentation used by the current code:

- The writing detail page uses a black background with the existing top-right
  writing navigation.
- A small icon-only back arrow sits above the post title and links to
  `/writing`.
- The title and date stay on the black background, above the body panel.
- The date is bold, fully off-white, and displayed as `Month Day, Year`, such as
  `May 21, 2026`; frontmatter should still store dates as `YYYY-MM-DD`.
- The spacing between title and date should match the spacing between date and
  the white body panel.
- The post body renders in a white rounded rectangle with dark readable text and
  normal accent-colored links.
- Do not duplicate the title inside the Markdown body unless the content
  intentionally needs a second heading.

## Project Writeups

Project writeups belong in:

`src/content/projects/`

Each project should include frontmatter:

```md
---
title: "Personal Website"
date: "2026-05-21"
description: "A personal website with a writing section and project portfolio."
tags: ["Astro", "JavaScript", "CSS"]
github: "https://github.com/username/project"
demo: "https://example.com"
image: "/images/projects/personal-website.svg"
featured: true
---

Write a longer explanation of the project here.
```

## Content Style

- Write in first person when appropriate.
- Keep descriptions clear and specific.
- Prefer concrete details over vague claims.

For project posts, explain:
- What the project does.
- Why you built it.
- What technologies you used.
- What you learned.
- What you would improve later.
