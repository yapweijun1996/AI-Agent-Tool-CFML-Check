# Agent CFML Check

`agent-cfml-check` is a deterministic, read-only checker for a deliberately bounded CFML structural subset. It is the independent implementation repository for the `agent-cfml-check` entry in the AI-Agent-Tools Hub.

## Current status

Version `0.1.0` contains the first feasibility slice. The current implementation is locally verified for:

- paired CFML tag nesting;
- `cfelse` and `cfelseif` ownership and ordering;
- bodyless tags and self-closing bodyless spellings;
- nested CFML comments;
- quoted tag attributes, doubled-quote escapes, and comments inside tag expressions;
- embedded `cfscript` delimiter balance while respecting strings and comments;
- recognized pure-script `.cfc` files beginning with `component` or `interface`;
- UTF-8 source metadata, one-based source positions, and zero-based UTF-8 byte ranges;
- explicit-root path safety, source stability checks, input validation, output limits, nesting limits, finding limits, and time limits;
- deterministic JSON and text CLI output.

Verification at repository commit `1d5c768`:

- `npm test`: 17/17 passed;
- `npm run typecheck`: passed;
- `npm pack --dry-run --json`: passed;
- capabilities, valid-fixture, and misnested-fixture CLI checks: passed.

This is not yet a published package, a complete CFML parser, or evidence of Lucee/Adobe ColdFusion compatibility. Hub lifecycle and publication status remain outside this repository's locally verified implementation evidence.

## Install and use

```sh
npm install
npm test
npm run typecheck
npm run build
node dist/cli/index.js capabilities --json
node dist/cli/index.js check --root . fixtures/valid.cfm --json
node dist/cli/index.js check --root . fixtures/misnested.cfm --json
```

The package requires Node.js `>=18.18.0`. It has no runtime npm dependencies; TypeScript and Node.js type definitions are development dependencies.

The CLI supports:

```text
agent-cfml-check capabilities [--json] [--pretty]
agent-cfml-check check --root <directory> <file> [--json] [--pretty]
```

Check limits can be overridden with `--max-source-bytes`, `--max-nesting`, `--max-findings`, `--max-output-bytes`, and `--time-limit-ms`, subject to the hard caps reported by `capabilities`.

The checker requires one explicit root and one `.cfm` or `.cfc` file. JSON mode emits one envelope on stdout; diagnostics stay on stderr. A completed check with structural violations still exits `0` and reports `data.verdict: "violations"`. Exit `3` means unsupported syntax, insufficient evidence, or a resource limit. Exit `4` means an explicit-root or access-policy rejection. See [SPEC.md](SPEC.md) for the complete contract.

## Safety and boundaries

The checker never executes CFML or JavaScript from the inspected source, follows includes, reads directories as input, uses the network, installs packages, or modifies the inspected source tree. It reads exactly one regular UTF-8 source file under the explicit root, rejects symlink escapes, and fails closed when the bounded profile cannot establish a result.

The supported profile is `cfml-structure-v1`. Unknown/custom/imported tags, optional-body semantics outside the catalog, full expression and runtime semantics, SQL/HTML validity, CFML tag islands inside `cfscript`, and engine behavior are outside the profile or explicitly unverified.

## Repository map

- `src/`: TypeScript implementation;
- `src/core/source-reader.ts`: root, path, file, encoding, and snapshot checks;
- `src/core/lexer.ts`: bounded CFML tag and CFScript scanning;
- `src/core/source-index.ts`: source positions and UTF-8 byte ranges;
- `src/core/checker.ts`: capabilities, checking, envelopes, and output fitting;
- `src/cli/index.ts`: CLI argument parsing and rendering;
- `schema/`: JSON Schema for result envelopes;
- `fixtures/`: valid and misnested examples;
- `test/`: implementation and CLI tests;
- `dist/`: generated package output;
- `DESIGN.md`, `EPIC.md`, `ROADMAP.md`, `TASK.md`, `GOAL.md`, `PROGRESS.md`, `GOAL_PROMPT.md`, `CHANGELOG.md`: repository design, planning, status, and maintenance documents.

`package.json` currently publishes `dist`, `README.md`, `SPEC.md`, `schema`, and `fixtures`; the design, planning, progress, goal, prompt, and changelog documents remain repository-maintainer documentation. Although `src/index.ts` contains TypeScript exports, installed-package library imports are not documented as supported until `main`/`exports` are added and tested.
