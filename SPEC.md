# Agent CFML Check Specification

## Feasibility slice

This worktree implements the first vertical slice of the Hub's `agent-cfml-check` design. The implementation deliberately uses a small lexer and stack instead of claiming a complete CFML grammar. The public profile is `cfml-structure-v1` and the package version is `0.1.0`.

## Operations

- `capabilities` reports the supported tags, profile, exclusions, and effective limits.
- `check --root <directory> <file>` reads exactly one `.cfm` or `.cfc` file and reports a completed structural verdict or a fail-closed incomplete/error envelope.

## Supported structures

Paired bodies are `cfif`, `cfloop`, `cfoutput`, `cfquery`, `cfsavecontent`, `cfsilent`, `cfcomponent`, `cffunction`, and `cfscript`. Branches are `cfelse` and `cfelseif`. Bodyless tags are `cfset`, `cfreturn`, `cfinclude`, `cfargument`, and `cfqueryparam`; both ordinary and self-closing spellings are accepted, while closing a bodyless tag is unsupported.

CFML comments are nested and ignored. Tag attributes respect quoted strings, doubled quote escapes, and comments inside the tag expression. HTML comments do not suppress server-side CFML detection. Embedded `cfscript` regions respect strings and line/block comments while checking `()`, `[]`, and `{}`. A recognized pure-script `.cfc` begins with `component` or `interface` and receives the same delimiter check.

## Result contract

The JSON envelope follows the Hub `1.0.0` target: `status` is `ok`, `incomplete`, or `error`; `complete` is false for the latter two; `data` is withheld for incomplete/error results. A completed structural violation is still `status: "ok"`, with `data.verdict: "violations"` and ordered findings.

Finding locations contain one-based line/column positions plus zero-based UTF-8 byte ranges `[start_byte, end_byte)`. Findings use stable codes such as `UNEXPECTED_CLOSE`, `MISMATCHED_CLOSE`, `UNCLOSED_TAG`, `INVALID_BRANCH`, `UNTERMINATED_STRING`, `UNTERMINATED_COMMENT`, and `UNBALANCED_DELIMITER`.

## Security and limits

The explicit root is checked lexically and after realpath resolution; symlink escapes are rejected. Input is one regular UTF-8 file, with an optional BOM. NUL-containing input, invalid UTF-8, unsupported extensions, changed source snapshots, and invalid limits are rejected. The default source, nesting, finding, output, and time limits are 2 MiB, 256, 100, 64 KiB, and 5 seconds; hard caps are 16 MiB, 1,024, 1,000, 1 MiB, and 30 seconds.

No result is silently clipped. Unsupported syntax and resource exhaustion return exit `3` with `data: null`. The checker does not retry, execute project code, follow includes, access the network, or write the inspected repository.

## Evidence boundary

The tests cover the first feasibility cases CF-01 through CF-13, with a pure-script CFC case. CF-14 engine comparison is not executed. The test suite demonstrates this implementation's behavior; it is not evidence of Lucee or Adobe CF compatibility.
