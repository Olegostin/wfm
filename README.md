# WFM landing page

Адаптивный продуктовый лендинг WFM на Next.js 16. Готов к запуску на Vercel без дополнительных настроек. Для локальной разработки нужен Node.js 22+.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FOlegostin%2Fwfm)

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Перед публикацией

- Бренд, дескриптор и контакты меняются централизованно в `lib/site.ts`, цвета — в начале `app/globals.css`.
- Подключите форму заявки в `app/page.tsx` к вашей CRM, почте или API.
- Замените временные контакты и ссылки на юридические документы.
- Добавьте домен в настройках проекта Vercel.

## Проверка production-сборки

```bash
npm run lint
npm run build
```
