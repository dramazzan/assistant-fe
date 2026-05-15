# Assistant Vue

Vue 3 + Vite клиент.

## Запуск

```bash
npm install
npm run dev
```

## Docker

Backend должен быть доступен на `http://localhost:4000`.

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
BACKEND_URL=http://host.docker.internal:4000
```

Для сервера на другом хосте поменять `BACKEND_URL`.
