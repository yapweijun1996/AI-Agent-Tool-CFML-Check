# Changelog

## Unreleased

- Added package `main`, `types`, and `exports` metadata with a package self-reference regression test.
- Added a repository-local Agent Skill at `skills/agent-cfml-check/SKILL.md`.
- Added GitHub Actions CI for Node 18, 20, and 22 with tests, typecheck, package dry-run, and CLI smoke checks.
- Verified CLI and library imports from a temporary packed install.
- The published `0.1.0` artifact predates these changes; a new authorized version is required to distribute them through npm.

## 0.1.0 — feasibility slice

- Added deterministic, read-only CFML structural checking for a bounded tag profile.
- Added paired-tag nesting, branch ownership/order, bodyless-tag, nested-comment, quoted-attribute, and CFScript delimiter checks.
- Added recognized pure-script `.cfc` checking for `component` and `interface` entry modes.
- Added explicit-root containment, realpath/symlink escape protection, UTF-8 validation, source snapshot checks, SHA-256 source metadata, and bounded resource limits.
- Added JSON/text CLI operations, typed exports, result JSON Schema, fixtures, tests, generated `dist/`, and package metadata.
- Local verification: 17 tests passed, typecheck passed, and package dry-run passed.
- Published `agent-cfml-check@0.1.0` to npm; registry version, tarball, and integrity readback verified. The immutable registry README/SPEC may predate later repository documentation synchronization. Lucee/Adobe compatibility, canonical Hub handoff, library-package exports, and cross-platform verification remain pending.
