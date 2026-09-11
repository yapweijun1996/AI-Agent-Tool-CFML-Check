# Agent CFML Check Progress

**Reviewed against:** release-hardening source; final publication commit pending
**Version:** `0.1.1`
**Working-tree state:** release-hardening documentation correction pending commit
**Published artifact:** `agent-cfml-check@0.1.1` pending final registry readback
**Publication note:** the prior immutable `0.1.0` artifact predates the release-hardening changes

## Executive status

The deterministic feasibility slice and release hardening are locally verified. Targeted Lucee and Ubuntu WSL evidence now pass. The project is not yet fully release-ready because full engine compatibility, Adobe ColdFusion, canonical ownership/admission, and registry-parity gates remain open.

## Completed implementation

- bounded `cfml-structure-v1` tag scanner;
- paired-tag nesting and branch ownership/order checks;
- bodyless tags, nested CFML comments, and quoted attributes;
- CFScript delimiter checks and recognized pure-script `.cfc` entry modes;
- UTF-8 positions/byte ranges and source SHA-256 metadata;
- explicit-root, realpath, file, encoding, NUL, snapshot, and resource-limit protections;
- deterministic CLI capabilities/check operations, JSON/text rendering, help/version, and exit codes;
- TypeScript source exports, JSON Schema, fixtures, tests, generated `dist`, package metadata, and `.gitignore`;
- synchronized design, specification, epic, roadmap, task, goal, progress, and goal-prompt documents.

## Verified evidence

- `npm test`: 22/22 passed after schema coverage;
- `npm run typecheck`: passed;
- `npm pack --dry-run --json`: passed;
- capabilities, valid fixture, and misnested fixture CLI probes: passed on Windows;
- package metadata self-reference test: passed;
- temporary packed-install CLI and library import smoke checks: passed;
- JSON Schema validation: passed for capabilities, completed, incomplete/error, and a negative envelope;
- targeted Lucee 6.2.2.91 execution probe: passed;
- Ubuntu WSL Node 18.19.1 npm ci, 22/22 tests, and typecheck: passed;
- repository-local Agent Skill is present;
- GitHub CI for commit c76b8be: completed successfully; 0.1.1 release-hardening CI is pending the new push;
- working tree excludes `node_modules` and temporary `.test-dist/` output;
- `npm whoami` verifies the authenticated npm identity; 0.1.1 registry readback is pending publication;

## Open work

1. Push the release-hardening commit and let its GitHub CI complete.
2. Publish 0.1.1 and complete registry readback/documentation parity review.
3. Confirm canonical Hub/repository identity and admission.
4. Run the full authorized Lucee/Adobe compatibility matrix when Adobe ColdFusion is available.

## Blockers

No local implementation failure is known. Remaining blockers are Adobe ColdFusion access, full engine-matrix evidence, canonical ownership/admission, and registry parity.

## Progress accounting

- Feasibility implementation: **100% complete**.
- Release gate path: **6/8 gates passed** (implementation regression, package assembly, executable schema, package surface/packed-install, publication, and GitHub CI), or **75%** by gate count. Full engine compatibility, Adobe compatibility, canonical ownership/admission, and registry parity remain open. This is a planning indicator, not a quality score.

## Next action

Complete registry parity review, then pursue external compatibility and canonical admission.
