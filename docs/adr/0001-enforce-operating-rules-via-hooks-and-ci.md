# ADR 0001 — Enforce operating rules via committed hooks + CI, not prose alone

- **Status:** Accepted
- **Date:** 2026-06-13
- **Owner:** Stanley Jacob (codedcrystal@gmail.com)

## Context

The operating rules in `CLAUDE.md` / `AGENTS.md` (RED TEAM, blast-radius/360, devil's-advocate,
skills-first, verified-vs-assumed) were **prose only**. An audit found:

- Git hooks existed but lived in `.git/hooks/` — **local-only, untracked, lost on every fresh clone**
  (including CI runners and other machines). `.gitignore` also excludes `.claude/` and `memory/`.
- The pre-push hook ran `npm run test:unit` behind a `grep` guard that **silently no-ops** when the
  script is absent — it looked like tests ran when they did not.
- **No CI** (`.github/` absent), so nothing verified anything server-side.
- **skills-first was not written down anywhere** in the repo; it only arrived via an external
  session injection that may be absent on other surfaces.

Prose cannot fix a prose-compliance problem. Sibling repos hit production incidents from exactly
this gap.

## Decision

1. **Commit the hooks** under `.githooks/` (tracked) and activate them via a dependency-free
   `prepare` script (`git config core.hooksPath .githooks`). `npm install` now wires hooks on every
   clone. Chosen over Husky to avoid a new dependency — Husky's mechanism is the same `core.hooksPath`.
2. **`commit-msg` attestation hook**: every commit must carry a filled-in footer —
   `Red-Team`, `Blast-Radius`, `Skill`, `Tests`, `Verified-vs-Assumed`. Bare placeholders
   (`todo`, `none`, `n/a`, `-`, `...`) are rejected. Exempts merge/revert/fixup/squash and
   in-progress merges. `HOOKS_SKIP=1` bypasses for emergencies. A `.gitmessage` template prefills it.
3. **pre-push stays light**: block direct push to `main`/`master`, then `tsc --noEmit` + `lint` only.
   No heavy/DB-backed test suite in the push path (see LaundriPOS lesson) — that trains people to
   reach for `HOOKS_SKIP=1`.
4. **pre-commit**: secret scan + ESLint on staged files (ported from the old local hook).
5. **CI** (`.github/workflows/ci.yml`): `npm ci` → `tsc --noEmit` → `lint` → tests **only if a
   `test` script exists** (loud `::notice::` skip, never a silent no-op). Runs on PRs to `main`
   and on branch pushes.
6. **Required status check on `main`:** only after (a) Actions billing permits runs and (b) a real
   run is green. The repo is **public**, so Actions minutes are free — billing is not a blocker.
   If CI is red or blocked, do **not** require it (see DawaHQ lesson); report what blocks it instead.

## Consequences

- Hooks survive clone; the silent test no-op is gone; skills-first and standing devil's-advocate are
  written into `CLAUDE.md`/`AGENTS.md`.
- Every commit leaves an auditable trace that the loop ran — the forcing function the prose lacked.
- Cost: slightly more commit friction (the footer). Mitigated by the `.gitmessage` template and the
  `HOOKS_SKIP=1` escape hatch.
- `core.hooksPath` still requires `npm install` (or one manual `git config`) per clone — it is not
  literally automatic on `git clone` alone. Documented in CONTRIBUTING.
- The old `.git/hooks/*` copies are now dormant (superseded by `core.hooksPath`) and can be deleted.

## Alternatives considered

- **Husky** — rejected: adds a dependency for what `core.hooksPath` already does natively.
- **Heavy pre-push (tests/build)** — rejected: slow, environment-dependent, encourages bypass.
- **Prose-only (status quo)** — rejected: it is the problem being fixed.
- **Required check enabled blindly** — rejected: requiring a red/un-runnable check blocks all
  merges (DawaHQ lesson); gate it on a confirmed green run.
