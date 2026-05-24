---
name: add-blog-post
description: Use when adding, editing, organizing, or improving a writing post for the personal website.
---

# Add Writing Post Skill

## Goal

Add or edit writing content without unnecessarily changing site structure or components.

## Workflow

1. Identify whether the task is adding a new post or editing an existing one.
2. Put new posts in `src/content/writing/`.
3. Use lowercase hyphenated filenames.
4. Include frontmatter:
   - `title`
   - `date`
   - `description`
   - `published`
5. Keep the post readable and organized with headings.
6. Do not change writing rendering code unless the task requires it.
7. Check that links and image paths are correct.
8. Run the relevant build/check command if available.

## Writing Post Template

```md
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Short summary of the post."
published: true
---

# Post Title

Intro paragraph.

## Main Section

Content.

## What I Learned

Content.
```

## Final Response

Include:
- Writing post added or changed.
- File path.
- Checks run.
