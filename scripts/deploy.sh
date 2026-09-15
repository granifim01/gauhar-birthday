#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

export PATH="/opt/homebrew/bin:$PWD/.tools:$HOME/bin:$PATH"

if ! command -v gh >/dev/null 2>&1; then
  echo "Установи GitHub CLI: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "→ Вход в GitHub…"
  gh auth login -h github.com -p https -w
fi

git add -A
if ! git diff --cached --quiet || ! git diff --quiet; then
  git add -A
fi

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "Update birthday site with chat memories and more photos"
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create gauhar-birthday --public --source=. --remote=origin --push
else
  git push -u origin HEAD
fi

OWNER_REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)

# Enable GitHub Pages (main / root)
gh api -X POST "repos/$OWNER_REPO/pages" \
  -H "Accept: application/vnd.github+json" \
  -f build_type=legacy \
  -F source[branch]=main \
  -F source[path]=/ >/dev/null 2>&1 \
|| gh api -X PUT "repos/$OWNER_REPO/pages" \
  -H "Accept: application/vnd.github+json" \
  -F source[branch]=main \
  -F source[path]=/ >/dev/null 2>&1 \
|| true

echo ""
echo "Репозиторий: https://github.com/$OWNER_REPO"
echo "Pages settings: https://github.com/$OWNER_REPO/settings/pages"
echo "Сайт: https://$(echo "$OWNER_REPO" | cut -d/ -f1).github.io/gauhar-birthday/"
echo ""
echo "Если 404 — в Pages settings выбери Branch: main, Folder: / (root), Save."
echo "Подожди 1–2 минуты и обнови страницу."
