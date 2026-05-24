# Design System

## Visual Style
Inspiration:
- Retro anime title-card design language.

The site should feel:
- Clean.
- Personal.
- Unique.
- Easy to read.

## Layout

- Use a centered max-width container for text-heavy pages.
- Use cards for writing previews and project previews.
- Use consistent spacing between sections.
- Keep navigation simple.

## Typography

- Use readable font sizes.
- Use clear heading hierarchy:
  - One main `h1` per page.
  - `h2` for major sections.
  - `h3` for smaller subsections.

## Color

- Use a small color palette.
- Keep text contrast readable.
- Use the accent color consistently for links, buttons, and highlights.

## Accessibility

- Use semantic HTML where possible.
- Images should have meaningful alt text.
- Links should clearly describe where they go.
- Do not rely only on color to communicate meaning.

## Mobile

The site must work well on mobile screens.

Before finishing layout changes, consider:
- Does the nav fit?
- Are cards readable?
- Is text too wide or too small?
- Are buttons easy to tap?

## Homepage intro sequence

The homepage begins with a scroll-controlled title-card sequence.

### Initial frame

- Full-screen black background.
- Thin yellow geometric lines create asymmetrical rectangular panels.
- Name enters from the bottom-left and rests above the lower yellow line.
- Summary enters from the top-right and rests below the upper yellow line.
- Text must be readable.

### Scroll transition

As the user scrolls:

- Yellow lines slide and resize like mechanical title-card panels.
- Name exits toward the lower-left.
- Summary exits toward the upper-right.
- A blue text-texture panel rises from the bottom.
- The first scene gives way to the next homepage section.

### Revealed activity section

The next section contains:

- Top half: black empty area reserved for future customization.
- Bottom half: three panels side by side:
  - Now
  - Recently
  - Recently Read

The panels should use hard rectangular shapes, yellow borders, uppercase headings, and optional blue texture accents.

### Rules

- Do not copy exact screenshots, text, logos, or character art.
- Use the design language only.
- Keep motion sharp and graphic.
- Respect `prefers-reduced-motion`.
- Keep text customizable from `src/data/home.js`.
