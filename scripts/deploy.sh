#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

export PATH="$PWD/.tools:$HOME/bin:$PATH"

if ! command -v gh >/dev/null 2>&1; then
  echo "Установи GitHub CLI: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "→ Вход в GitHub…"
  gh auth login -h github.com -p https -w
fi

if ! git rev-parse HEAD >/dev/null 2>&1; then
  git add .
  git commit -m "Create birthday site for Gauhar"
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create gauhar-birthday --public --source=. --remote=origin --push
else
  git push -u origin HEAD
fi

OWNER_REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
echo "Репозиторий: https://github.com/$OWNER_REPO"
echo "Pages: https://github.com/$OWNER_REPO/settings/pages"
echo "Сайт (после включения Pages): https://$(echo "$OWNER_REPO" | cut -d/ -f1).github.io/gauhar-birthday/"
