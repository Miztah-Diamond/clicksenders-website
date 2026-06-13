# Lessons Learned

High-signal, cross-project lessons that shaped how this repo enforces its operating rules.
Append new entries; don't rewrite old ones.

## 2026-06-13 — Enforce operating rules mechanically, not as prose

**Problem.** Standing rules (RED TEAM, blast-radius, devil's-advocate, skills-first) lived only as
prose in `CLAUDE.md`. Sessions did not reliably follow them, which caused production incidents in a
sibling repo. Hooks existed but were in `.git/hooks/` — local-only and lost on clone. A pre-push
`test:unit` step silently no-op'd because the script didn't exist. There was no CI.

**Fix.** Committed `.githooks/` activated via a `prepare` script (`core.hooksPath`); a `commit-msg`
attestation footer that blocks placeholders; a light pre-push (block main + `tsc` + `lint`); CI on
PRs; skills-first and standing devil's-advocate written into `CLAUDE.md`/`AGENTS.md`. See
`docs/adr/0001-enforce-operating-rules-via-hooks-and-ci.md`.

### Cross-project lessons applied here

- **LaundriPOS — keep pre-push light.** A heavy, DB-backed test suite in the push path is slow and
  environment-dependent. It trains people to reach for `HOOKS_SKIP=1`, which defeats the gate
  entirely. Heavy suites belong in CI on the PR. Here: pre-push runs only `tsc` + `lint`.

- **DawaHQ — never require a check that can't go green.** Making a CI check *required* on `main`
  before confirming it (a) can run (Actions billing/minutes) and (b) actually passes will block
  every merge. Gate the "required" switch on a confirmed green run. Here: the repo is public
  (Actions free), but the required-check switch is still held until a green run on the PR is observed.

- **Silent no-ops lie.** A `grep`-guarded `test:unit` that quietly skips when absent reads as
  "tests passed." Skips must be loud (CI emits a `::notice::`) or the step must not exist.

- **Local-only enforcement isn't enforcement.** Anything in `.git/hooks/` dies on clone. Track it
  (`.githooks/` + `core.hooksPath`) so a fresh checkout + `npm install` gets the guardrails.
