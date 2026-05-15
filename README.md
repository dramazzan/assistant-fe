# Assistant Vue

Vue 3 + Vite клиент.

## Запуск

```bash
npm install
npm run dev
```

## Docker

Backend адрес хранится в `.env`:

```env
VITE_API_URL=https://assistant-be-qzoj.onrender.com
```

```bash
docker compose up --build
```

Открыть:

```text
http://localhost:8080
```

Остановить:

```bash
docker compose down
```

## Переменные

В `docker-compose.yml`:

```env
BACKEND_URL=https://assistant-be-qzoj.onrender.com
```

Для сервера на другом хосте поменять `BACKEND_URL`.
