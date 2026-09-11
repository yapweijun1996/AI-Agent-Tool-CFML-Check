# Agent CFML Check

`agent-cfml-check` is a deterministic, read-only checker for a deliberately bounded CFML structural subset. It is the independent implementation repository for the `agent-cfml-check` entry in the AI-Agent-Tools Hub.

## Current status

The `0.1.0` worktree contains the first feasibility slice. It checks paired CFML tags, `cfelse`/`cfelseif` ownership, bodyless tags, CFML comments and quoted attributes, embedded `cfscript` delimiter balance, and recognized pure-script `.cfc` files. It is not yet a published package, a full CFML parser, or Lucee/Adobe compatibility evidence.

## Usage

```sh
npm install
npm test
npm run build
node dist/cli/index.js capabilities --json
node dist/cli/index.js check --root . fixtures/valid.cfm --json
```

The checker requires one explicit root and one `.cfm` or `.cfc` file. JSON mode emits one envelope on stdout; diagnostics stay on stderr. Exit `0` means a complete check, including a completed result whose `verdict` is `violations`. Exit `3` means unsupported syntax, insufficient evidence, or a resource limit. Exit `4` means a root/access-policy rejection.

The checker never executes CFML, follows includes, reads directories, uses the network, installs packages, or modifies the source tree.

## Scope and limitations

The supported profile is `cfml-structure-v1`. Unknown/custom/imported tags, optional-body semantics outside the catalog, CFML tag islands inside `cfscript`, full expression semantics, SQL/HTML validity, and engine behavior fail closed or remain explicitly unverified. Source locations use one-based line/column coordinates and zero-based UTF-8 byte ranges.

See [SPEC.md](SPEC.md) for the frozen feasibility contract. The ecosystem Hub owns the broader design handoff and registry status.
