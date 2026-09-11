# Epic: Agent CFML Check Feasibility and Release Readiness

**Epic ID:** `CFML-CHECK-001`
**Implementation baseline:** `0.1.0` at commit `1d5c768`
**Status:** feasibility complete; CLI package published; release hardening pending

## Goal

Deliver a deterministic, read-only `agent-cfml-check` tool that establishes bounded CFML structural facts without claiming full parsing or runtime validation.

## Acceptance matrix

| Criterion | Status | Evidence or gap |
|---|---|---|
| Tool/profile identity and `1.0.0` envelope | Done | Source types and JSON Schema |
| One `.cfm`/`.cfc` file under explicit root | Done | Source reader and CLI |
| Paired-tag nesting | Done | Lexer stack; CF-01/02/07 |
| Branch ownership/order | Done | CF-05 and lexer rules |
| Bodyless tags, nested comments, quoted attributes | Done | CF-03/04/06/07 |
| CFScript delimiter scanning | Done | CF-08/09 and scanner |
| Recognized pure-script `.cfc` handling | Done | Component/interface test |
| UTF-8 positions, byte ranges, hash, and limits | Done | SourceIndex, reader, checker |
| Deterministic JSON/text CLI behavior | Done | CLI tests and smoke checks |
| Local regression | Done | `npm test` 19/19 after package-surface coverage; typecheck pass |
| Package assembly dry-run | Done | `npm pack --dry-run --json` pass |
| Documentation synchronization | Done in working tree | DESIGN/SPEC/EPIC/ROADMAP/TASK/GOAL/PROGRESS/GOAL_PROMPT aligned to code |
| JSON Schema executable validation | Pending | Add validator-backed tests |
| Installed-package CLI/library smoke test | Done locally | Temporary packed install runs the CLI and resolves the exported library entry |
| Library package export contract | Done locally | `main`, `types`, and `exports` added; package self-reference and temporary packed-install import tests pass; published 0.1.0 predates the fix |
| Lucee compatibility | Pending | Authorized engine matrix required |
| Adobe ColdFusion compatibility | Pending | Authorized engine matrix required |
| Canonical Hub/repository handoff | Pending | External ownership/admission evidence required |
| Independent non-Windows verification | Pending | Clean-checkout evidence required |
| Public CLI package publication | Done | npm identity and registry readback verify `agent-cfml-check@0.1.0` and its tarball |
| Published artifact documentation/package parity | Pending | Compare registry README/SPEC/exports with current repository; use a new authorized version if correction is required |

## Completed work

- Implemented the bounded lexer/checker and source safety model.
- Added stable result envelopes, findings, limits, exit codes, CLI rendering, types, schema, fixtures, and tests.
- Added generated `dist/`, package metadata, `.gitignore`, and maintainer documentation.
- Confirmed local tests, typecheck, packaging dry-run, and CLI fixture probes.
- Synchronized the documentation set with the current implementation and explicitly separated facts from external evidence.

## Risks and blockers

No local implementation check is failing. Release readiness is blocked by missing external evidence or decisions:

- engine compatibility is unverified;
- canonical Hub/repository ownership and admission are unconfirmed;
- cross-platform evidence is absent;
- the published CLI artifact does not close the remaining compatibility, canonical, platform, schema, or registry-parity gates;
- the published `0.1.0` artifact predates the repository's package export metadata and packed-install evidence;
- schema validation is not part of the executable test suite.

The bounded catalogue and lexical semantics are intentional scope limits, not defects to silently remove.

## Dependencies

Runtime: Node.js `>=18.18.0`. Development: TypeScript `^5.7.0` and `@types/node ^22.10.0`. There are no runtime npm, CFML engine, network, or database dependencies for the feasibility slice.

## Next steps

1. Publish a new authorized version because the published 0.1.0 artifact predates the repository metadata and documentation fixes.
2. Add executable JSON Schema validation and negative contract tests.
3. Confirm canonical Hub/repository ownership and admission.
4. Run authorized Lucee/Adobe and non-Windows verification.
5. Perform a post-publication provenance and install smoke review; do not imply that publication closes the remaining gates.
6. Handle grammar expansion as a separately versioned epic.
