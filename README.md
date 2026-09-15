# Для Гаухар · С днём рождения

Интерактивный сайт-подарок для **Гаухар Далабаевой** (ранее Кенесбекова).

Локальный превью: `http://127.0.0.1:8765/` (если сервер запущен).

## Что внутри

- Экран «Открыть» (удобно для iPhone Safari)
- Hero на полный экран с её фото среди бугенвиллий
- Письмо с эффектом печатной машинки
- Галерея из трёх портретов
- Карточки «Почему я тебя люблю»
- Стираемая «scratch»-открытка пальцем
- Мини-викторина
- Вопрос «Хочешь ли ты со мной развестись?» — кнопка **Да** убегает бесконечно, остаётся только **Нет**
- Финал с конфетти

## Запуск локально

```bash
cd ~/projects/gauhar-birthday
python3 -m http.server 8765
```

Открой на iPhone в той же Wi‑Fi сети: `http://<IP-твоего-Mac>:8765`

Или просто открой `index.html` в Safari.

## GitHub Pages + подключение GitHub к Cursor

В обычном Terminal (не в песочнице Cursor):

```bash
# 1) GitHub CLI (если ещё нет)
brew install gh

# 2) Войти в GitHub (откроется браузер)
gh auth login

# 3) Закоммитить и задеплоить
cd ~/projects/gauhar-birthday
git add .
git commit -m "Create birthday site for Gauhar"
./scripts/deploy.sh
```

Потом в репозитории: **Settings → Pages → Branch: `main` / folder: `/ (root)` → Save**.

Сайт будет вида: `https://<твой-логин>.github.io/gauhar-birthday/`

### Cursor ↔ GitHub на будущие проекты

1. `gh auth login` (один раз на этом Mac)
2. В Cursor: **Settings → Account / Git** — войти тем же GitHub
3. Для нового проекта: `gh repo create` или кнопка Publish в Source Control

## Фото

Сейчас в сайте три фото, которые ты прислал. Библиотека Photos на Mac закрыта для Cursor (нужен Full Disk Access).

Чтобы добавить ещё:

1. Положи файлы в `assets/photos/`
2. Пропиши их в `index.html` в секции gallery
3. Скажи мне — я встрою

## Имя в письме

В письме подписано **Даниял** (из git `user.name`). Если нужно другое написание — скажи.
