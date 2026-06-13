# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); this project uses [semantic versioning](https://semver.org/).

## [Unreleased]

### Added
- **Committed git hooks** under `.githooks/`, activated on `npm install` via a dependency-free
  `prepare` script that sets `core.hooksPath` (no Husky dependency). Hooks now survive a fresh clone.
- **`commit-msg` attestation gate** — every commit must carry a filled-in footer
  (`Red-Team` / `Blast-Radius` / `Skill` / `Tests` / `Verified-vs-Assumed`). Placeholders are
  rejected; merge/revert/fixup/squash are exempt; `HOOKS_SKIP=1` bypasses. `.gitmessage` template added.
- **CI workflow** `.github/workflows/ci.yml` — `tsc --noEmit` + `next lint` on every PR, plus tests
  when a `test` script exists (loud `::notice::` skip instead of a silent no-op).
- **`.gitattributes`** forcing LF on hook scripts so Windows `autocrlf` cannot break bash (`bad interpreter`).
- **Skills-first** and a **standing devil's-advocate** rule written into `CLAUDE.md` and `AGENTS.md`.
- Docs: ADR `docs/adr/0001-enforce-operating-rules-via-hooks-and-ci.md`, `docs/LESSONS-LEARNED.md`,
  and a Git Hooks & CI section in `CONTRIBUTING.md`.

### Changed
- **pre-push** kept light: blocks direct push to `main`/`master`, then runs `tsc` + `lint` only —
  the heavy test path moved to CI (prevents the "skip the hook" habit).
- **pre-commit** (secret scan + ESLint on staged files) is now tracked instead of living only in
  local `.git/hooks/`.

### Fixed
- Pre-push no longer **silently skips** `test:unit` when the script is absent; test execution is now
  an explicit, logged CI concern.

### Notes
- Required-status-check on `main` is **not yet enabled** — see ADR 0001. It is verified safe to turn
  on (public repo → free Actions; CI confirmed green); the switch is left to the repo owner.
