---
name: feature-implementation
description: Use when adding a new product feature, API capability, UI flow, CLI behavior, or user-visible functionality. Emphasizes planning, incremental implementation, and verification.
---

# Feature Implementation Workflow

## Steps

1. Understand the requested behavior.
2. Inspect existing patterns for similar features.
3. Identify the minimal set of files to change.
4. For multi-file or risky work, create an execution plan using `docs/agent/PLANS.md`.
5. Implement incrementally.
6. Add or update tests.
7. Update docs if commands, APIs, environment variables, or user behavior changed.
8. Run relevant checks.

## Implementation Rules

- Follow nearby patterns.
- Prefer small composable changes.
- Avoid introducing new dependencies unless approved.
- Keep user-visible copy consistent with existing style.
- Preserve existing APIs unless the task requires a change.

## Final Response

Include:
- Feature summary.
- Files/areas changed.
- Tests/checks run.
- Known limitations or follow-ups.
