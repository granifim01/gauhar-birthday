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

- Hero, письмо, счётчик «мы вместе» и дни до годовщины свадьбы (3.10)
- Начало истории, словарь, видео
- Галерея из ваших фото (превью в `assets/photos/thumb/`, полное фото по тапу, листание свайпом)
- Игра «Найди пары», конверты, купоны (отметки хранятся в браузере), звёзды, сердце, шарики, scratch
- Вопрос «Выйдешь за меня снова?» с убегающей кнопкой «Нет»
- Музыка: плейлист M'Dee через YouTube (список в `TRACKS` в `js/main.js`), если YouTube недоступен — `assets/audio/bg.mp3`

Новые фото: положи jpg в `assets/photos/hq/`, добавь в `PHOTOS` и пересобери превью:

```bash
ffmpeg -i assets/photos/hq/hq-XXX.jpg -vf "scale='min(480,iw)':-2" -q:v 6 assets/photos/thumb/hq/hq-XXX.jpg
```

Если фото не 3:4 — добавь его размеры в `SIZES`, иначе в галерее будет неверная пропорция.
