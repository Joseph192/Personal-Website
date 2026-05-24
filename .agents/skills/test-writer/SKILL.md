---
name: test-writer
description: Use when adding, improving, or repairing tests for existing behavior, new features, bug fixes, or refactors.
---

# Test Writer Workflow

## Steps

1. Identify the behavior under test.
2. Inspect nearby tests for style and utilities.
3. Choose the smallest appropriate test type: unit, integration, component, or end-to-end.
4. Write deterministic tests.
5. Prefer behavior assertions over implementation details.
6. Run the relevant test command.
7. If tests fail, determine whether the test or implementation is wrong.

## Good Tests

- Are readable.
- Cover meaningful behavior.
- Avoid excessive mocking.
- Include edge cases when they are important.
- Fail for the right reason.

## Final Response

Include:
- Tests added or changed.
- Behavior covered.
- Command run.
- Any gaps that remain.
