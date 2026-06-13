# Ayoub El Mousati — Portfolio

Conversion-focused portfolio for AI engineering, agentic systems, workflow
automation, and full-stack product work.

**Live site:** [elmousatimohamedayoub.me](https://elmousatimohamedayoub.me)

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide icons

## Local Development

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:8080`.

## Verification

```sh
npm run build
npx eslint src/App.tsx src/pages/Index.tsx
```

The repository-wide lint command also scans retained legacy components that are
not imported by the current portfolio.

## Deployment

```sh
npm run deploy
```

The production build is published from `dist` and uses the custom domain stored
in `CNAME`.
