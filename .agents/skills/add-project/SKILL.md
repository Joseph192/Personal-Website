---
name: add-project
description: Use when adding, editing, organizing, or improving a project entry in the portfolio.
---

# Add Project Skill

## Goal

Add project portfolio entries in a consistent format.

## Workflow

1. Add new project writeups to `src/content/projects/`.
2. Use lowercase hyphenated filenames.
3. Include frontmatter:
   - `title`
   - `date`
   - `description`
   - `tags`
   - `github`
   - `demo`
   - `image`
   - `featured`
4. Explain what the project does, why it was built, and what was learned.
5. Do not redesign the project page unless requested.
6. Check that links and image paths are correct.
7. Run the relevant build/check command if available.

## Project Template

```md
---
title: "Project Name"
date: "YYYY-MM-DD"
description: "One-sentence project summary."
tags: ["JavaScript", "CSS"]
github: ""
demo: ""
image: "/images/projects/project-name.png"
featured: false
---

# Project Name

## Overview

What the project does.

## Why I Built It

Why this project matters.

## Technologies Used

- Technology one
- Technology two

## What I Learned

What this project taught me.

## Future Improvements

What I would improve later.
```

## Final Response

Include:
- Project added or changed.
- File path.
- Checks run.
