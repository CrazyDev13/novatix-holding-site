# Novatix Holding Website

Corporate website for [Novatix Holding](https://novatrixholding.com) — web & blockchain development services.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- Express API + SendGrid (Contact form)

## Development

```bash
npm install
cp .env.example .env
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:3001

## Production

```bash
npm install
npm run build
npm start
```

Set `NODE_ENV=production` and configure SendGrid variables in `.env`.

## Environment Variables

See `.env.example`.
