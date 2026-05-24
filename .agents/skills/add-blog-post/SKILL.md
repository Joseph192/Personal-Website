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
   - If a `.docx` is provided with the post, keep it next to the `.md` file
     using the same basename.
   - Treat the `.docx` as the styling reference/original document. Preserve
     visible styling in the Markdown-rendered post with Markdown or inline HTML
     where needed.
4. Include frontmatter:
   - `title`
   - `date`
   - `description`
   - `published`
5. Keep the post readable and organized with headings.
6. Keep the rendered post consistent with the current writing detail format:
   - icon-only back arrow above the title, linking to `/writing`
   - title and bold off-white formatted date on the black background
   - date displayed as `Month Day, Year`, while frontmatter remains `YYYY-MM-DD`
   - equal title-to-date and date-to-body spacing
   - body content in a white rounded panel with dark text
7. Do not change writing rendering code unless the task requires it.
8. Check that links and image paths are correct.
9. Run the relevant build/check command if available.

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
