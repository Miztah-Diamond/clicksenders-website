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

- **DawaHQ — a hook on Windows needs BOTH a shebang and the exec bit, in LF.** DawaHQ's pre-commit
  failed with "Exec format error" because it was missing `#!/usr/bin/env bash`. Three things must all
  hold or a hook silently fails to run on Windows Git:
  1. First line is exactly `#!/usr/bin/env bash` (so git knows how to exec it).
  2. Committed with the executable bit (`git update-index --chmod=+x` → mode `100755`; Windows won't
     set it for you).
  3. **LF line endings** — a `\r` after the shebang (`...bash\r`) becomes `bad interpreter`. Enforce
     with `.gitattributes` (`.githooks/** text eol=lf`).
  Verify by *executing through git itself* (`git hook run <name>`, a real commit, a `git push
  --dry-run`), not just `bash file` — only the git path surfaces exec-format/shebang failures the way
  a real hook invocation does. All four hooks here were verified this way on Windows Git 2.53.
