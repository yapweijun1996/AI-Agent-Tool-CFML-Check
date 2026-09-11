# Agent CFML Check Roadmap

**Implementation baseline:** `0.1.0` at commit `1d5c768`
**Overall state:** local feasibility complete; CLI package published; release hardening pending

## Phase 0 — Feasibility implementation (Complete)

- Define `cfml-structure-v1` and result envelope `1.0.0`.
- Implement the bounded paired/branch/bodyless tag catalogue.
- Handle nested CFML comments, quoted attributes, CFScript delimiters, and pure-script `.cfc` entry modes.
- Enforce explicit-root, realpath, UTF-8, source-stability, size, output, nesting, findings, and time boundaries.
- Provide deterministic CLI capabilities/check operations, text/JSON output, typed source exports, schema, fixtures, tests, and generated `dist/`.
- Synchronize maintainer documentation.

Evidence: 19/19 tests, typecheck, package dry-run, and Windows CLI probes pass.

## Phase 1 — Contract hardening and release readiness (Pending)

### 1.1 Package surface

- Package metadata now declares `main`, `types`, and `exports`; local self-reference tests pass.
- Temporary packed-install CLI and library import smoke checks pass.
- Publish a new authorized version because npm `0.1.0` predates the export metadata.
- Keep `dist/` aligned with source.

### 1.2 Contract validation

- Add executable JSON Schema validation for capabilities, pass, violations, and incomplete/error envelopes.
- Add negative tests for all documented input, limit, path, and exit-code boundaries.
- Verify `--help`, `--version`, pretty JSON, tiny output limits, BOM, line endings, and deterministic repeated runs.

### 1.3 Canonical ownership

- Confirm the canonical source repository, Hub entry, roadmap position, admission state, and version mapping.
- Record external evidence without overriding repository behavior.

### 1.4 Engine and platform evidence

- Define and run an authorized supported-profile matrix against Lucee and Adobe ColdFusion.
- Run clean-checkout install/build/test/CLI probes on an independent non-Windows platform.
- Record compatibility differences as profile changes, exclusions, or a new version.

### 1.5 Publication

**Status: Complete for the `0.1.0` CLI artifact; broader release gates remain open.**

- npm authentication and registry readback verify `agent-cfml-check@0.1.0`.
- The published tarball and integrity metadata are available from the npm registry.
- Publication does not close the remaining contract, compatibility, canonical, platform, or library-package gates.
- Compare the immutable registry README/SPEC/exports with the current repository docs; use a new authorized version if registry documentation or metadata must be corrected.
- For future releases, confirm registry, provenance, package metadata, release authorization, and release checks before publishing.

## Phase 2 — Contract evolution (Unscheduled)

- Expand the tag catalogue only with compatibility and regression evidence.
- Consider broader grammar, include-aware analysis, or directory/project analysis only with new privacy, resource, and failure contracts.
- Version changes to supported syntax, findings, limits, result semantics, or package surface.

## Release gates

1. implementation regression — passed;
2. package assembly — passed by dry-run;
3. contract/schema validation — pending;
4. package surface metadata and packed-install smoke — passed locally; registry parity remains pending;
5. engine compatibility — pending;
6. canonical Hub/repository — pending;
7. cross-platform — pending;
8. publication/operations — CLI publication passed; registry documentation parity and broader release operations remain pending.

No publication date or compatibility promise is implied.
