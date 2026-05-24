# Site Structure

## Purpose

This project is a personal website with three main content areas:

1. Introduction
2. Writing
3. Project portfolio

The site should stay frontend-only unless a task explicitly requires backend behavior.

## Important Folders

### `src/pages/`

Contains top-level pages.

- `index.astro` - homepage and introduction
- `writing.astro` - writing index page
- `projects.astro` - project portfolio page

### `src/components/`

Contains reusable UI pieces.

Important components:
- `Layout.astro` - shared page layout
- `Header.astro` - navigation
- `Footer.astro` - footer links
- `IntroSection.astro` - homepage intro
- `WritingCard.astro` - writing preview card
- `ProjectCard.astro` - project preview card
- `SEO.astro` - page metadata

### `src/content/writing/`

Contains markdown writing posts.

### `src/content/projects/`

Contains markdown project writeups.

### `src/data/`

Contains structured site data such as name, social links, homepage copy, and navigation links.

### `src/styles/`

Contains global CSS and design variables.

### `src/lib/`

Contains helper functions for content loading, sorting, filtering, and formatting.

## Rule For Codex

Before creating a new folder, check whether the file belongs in one of the existing folders.
