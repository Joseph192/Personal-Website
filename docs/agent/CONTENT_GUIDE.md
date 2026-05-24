# Content Guide

## Writing Posts

Writing posts belong in:

`src/content/writing/`

Use lowercase hyphenated filenames:

```text
good: my-first-post.md
bad: My First Post.md
```

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
