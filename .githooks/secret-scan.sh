#!/usr/bin/env bash
# Lightweight secret guard for staged changes. Not a replacement for gitleaks/trufflehog —
# a fast last line of defense. Recommend also running gitleaks in CI.
set -euo pipefail

# Patterns for common secrets. Extend as needed.
PATTERNS='(AKIA[0-9A-Z]{16}|sk_live_[0-9a-zA-Z]{20,}|sk_test_[0-9a-zA-Z]{20,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|xox[baprs]-[0-9A-Za-z-]+|ghp_[0-9A-Za-z]{36}|eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}|(SUPABASE_SERVICE_ROLE_KEY|PAYSTACK_SECRET_KEY|TWILIO_AUTH_TOKEN|OPENAI_API_KEY|ANTHROPIC_API_KEY)\s*=\s*["'\'']?[A-Za-z0-9._-]{16,})'

# Only scan staged, added/changed lines (not whole files), skip lockfiles & envexamples.
staged=$(git diff --cached --name-only --diff-filter=ACM | grep -vE '(\.lock$|package-lock\.json$|\.env\.example$|/_backups/)' || true)
hit=0
for f in $staged; do
  [ -f "$f" ] || continue
  if git diff --cached -U0 -- "$f" | grep -E '^\+' | grep -Eq "$PATTERNS"; then
    echo "  ✗ possible secret in: $f"
    hit=1
  fi
done
if [ "$hit" = "1" ]; then
  echo ""
  echo "Secret-like content detected in staged changes. Move it to .env (referenced via config) and unstage."
  echo "If this is a false positive: HOOKS_SKIP=1 git commit ..."
  exit 1
fi
exit 0
