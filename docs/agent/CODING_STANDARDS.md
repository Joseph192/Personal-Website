# Coding Standards

## General

- Match nearby code style.
- Prefer boring, readable code.
- Avoid speculative abstractions.
- Keep public interfaces stable unless asked to change them.
- Delete dead code only when clearly safe.

## Naming

- Use descriptive names.
- Avoid single-letter names except for conventional loop variables.
- Name booleans as predicates, such as `isEnabled`, `hasAccess`, or `shouldRetry`.

## Error Handling

- Handle expected errors explicitly.
- Preserve useful debugging context.
- Do not swallow exceptions silently.
- Do not expose sensitive internals in user-facing errors.

## Dependency Policy

- Prefer standard library or existing dependencies.
- Ask before adding production dependencies.
- If adding a dependency is approved, explain why it is necessary.

## Documentation

Update documentation when changing:
- Setup commands.
- Public APIs.
- Environment variables.
- User-visible behavior.
- Operational procedures.
