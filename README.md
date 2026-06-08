# Peptides

Peptides is a Next.js App Router storefront for research-grade peptide products.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- OpenNext for Cloudflare
- Cloudflare Workers with Wrangler

## Local Development

```bash
npm install
npm run cf-typegen   # generates cloudflare-env.d.ts (gitignored)
npm run dev
```

## Clean generated artifacts

```bash
npm run clean
```

Removes `.next/`, `.open-next/`, and `.wrangler/`.

## Cloudflare Build

```bash
npm run cf:build
```

This runs `opennextjs-cloudflare build` and creates the Cloudflare Worker output in `.open-next/`.

## Cloudflare Deploy

```bash
npm run deploy
```

For validation without publishing:

```bash
npm run deploy:dry-run
```

## Required Cloudflare Settings

- Project type: Workers
- Worker name: `peptides`
- Build command: `npm run cf:build`
- Deploy command: `npm run deploy`
- Wrangler config: `wrangler.jsonc`
- Required production variable: `NEXT_PUBLIC_SITE_URL`

Do not configure this repository with unrelated project repositories, deployments, or credentials.
