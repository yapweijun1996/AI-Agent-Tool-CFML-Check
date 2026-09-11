# Changelog

## 0.1.0 — feasibility slice

- Added deterministic, read-only CFML structural checking for a bounded tag profile.
- Added paired-tag nesting, branch ownership/order, bodyless-tag, nested-comment, quoted-attribute, and CFScript delimiter checks.
- Added recognized pure-script `.cfc` checking for `component` and `interface` entry modes.
- Added explicit-root containment, realpath/symlink escape protection, UTF-8 validation, source snapshot checks, SHA-256 source metadata, and bounded resource limits.
- Added JSON/text CLI operations, typed exports, result JSON Schema, fixtures, tests, generated `dist/`, and package metadata.
- Local verification: 17 tests passed, typecheck passed, and package dry-run passed.
- Lucee/Adobe compatibility, canonical Hub handoff, publication, and cross-platform verification remain pending.
