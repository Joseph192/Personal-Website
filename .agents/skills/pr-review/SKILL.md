---
name: pr-review
description: Use when reviewing a pull request, branch diff, staged changes, or recent code changes for correctness, security, maintainability, tests, and risk.
---

# PR Review Workflow

## Review Priorities

1. Correctness bugs.
2. Security or privacy risks.
3. Breaking API or data behavior.
4. Missing tests.
5. Maintainability issues.
6. Style issues only if they matter.

## Steps

1. Inspect the diff before reading unrelated files.
2. Understand the intent of the change.
3. Check risky areas: auth, data access, billing, migrations, infra, concurrency.
4. Check whether tests cover the changed behavior.
5. Produce actionable findings.

## Output Format

Group findings by severity:

```md
## High Severity

- [Finding]
  - Why it matters:
  - Suggested fix:

## Medium Severity

- [Finding]
  - Why it matters:
  - Suggested fix:

## Low Severity

- [Finding]
  - Why it matters:
  - Suggested fix:

## Positive Notes

- [What looks good]
```

## Constraints

- Do not rewrite the PR unless asked.
- Do not nitpick formatting that automated tools handle.
- Prefer concrete file/line references when available.
