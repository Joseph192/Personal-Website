# Architecture Guide

## System Summary

[Describe the app in 5-10 sentences.]

## Major Components

### Frontend

- Location: `[path]`
- Responsibilities:
  - [Responsibility]
  - [Responsibility]

### Backend

- Location: `[path]`
- Responsibilities:
  - [Responsibility]
  - [Responsibility]

### Data Layer

- Location: `[path]`
- Database/storage: `[system]`
- Important patterns:
  - [Pattern]

### External Integrations

- `[Integration name]`: [purpose, location, caveats]

## Request Flow

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Important Invariants

- [Invariant that must not be broken]
- [Security or data rule]
- [Compatibility rule]

## Common Extension Points

- To add a new page: [where to go]
- To add a new API endpoint: [where to go]
- To add a new background job: [where to go]
- To add a new integration: [where to go]

## Known Sharp Edges

- [Thing Codex often gets wrong]
- [Legacy area to avoid refactoring casually]
- [Test/environment issue]
