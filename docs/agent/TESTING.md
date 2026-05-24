# Testing Guide

## Goal

Keep the personal site working after content, design, and component changes.

## Checks To Run

Use whatever commands exist in `package.json`.

Common commands may include:

```bash
npm run dev
npm run build
npm run lint
npm run test
```

## For Content Changes

Check that:
- The page still builds.
- Writing/project metadata is valid.
- Links are not broken.
- Images use correct paths.

## For Design Changes

Check that:
- The site works on mobile and desktop.
- Text is readable.
- Navigation still works.
- Components are not duplicated unnecessarily.

## For Code Changes

Check that:
- Existing components are reused where possible.
- No unnecessary dependency was added.
- The build passes if a build command exists.

## Final Response Rule

Codex should report:
- What changed.
- Which checks ran.
- Any checks skipped and why.
