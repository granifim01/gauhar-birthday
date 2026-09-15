# Для Гаухар · С днём рождения

Интерактивный сайт-подарок для **Гаухар Далабаевой** (Гаухар Бакытжановна, ранее Кенесбекова).

Сайт: https://granifim01.github.io/gauhar-birthday/  
Репо: https://github.com/granifim01/gauhar-birthday

## Быстрый деплой / починить 404

В обычном Terminal:

```bash
cd ~/projects/gauhar-birthday
git add -A
git commit -m "Update birthday site with chat memories and more photos"
git push
gh auth refresh -h github.com   # если нужно
# Включи Pages:
# https://github.com/granifim01/gauhar-birthday/settings/pages
# Source: Deploy from a branch → main → / (root) → Save
```

Или одной командой: `./scripts/deploy.sh`

После Save подожди 1–2 минуты и обнови страницу.

## Локально

```bash
cd ~/projects/gauhar-birthday
python3 -m http.server 8765
```

Открой http://127.0.0.1:8765

## Что внутри

- Hero, письмо, timeline (кольцо → роспись 3.10.2025 → ДР 2 октября)
- Галерея из ваших фото
- Карточки, scratch, викторина
- Вопрос про развод с убегающей кнопкой «Да»
