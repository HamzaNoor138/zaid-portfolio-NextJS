# Hamza Noor — Portfolio

A personal portfolio site for Hamza Noor, a full-stack developer. Built as a single-page experience that introduces who he is, what he builds, and how to get in touch — with a dark, indigo-accented aesthetic, an interactive 3D globe, and smooth scroll-triggered animations throughout.

**Live site:** _add your deployed URL here_

## Sections

- **Hero** — introduction, availability status, and an interactive 3D globe (`react-globe.gl` + `three`)
- **About** — bio, focus areas, and a featured profile card
- **Skills** — tech stack laid out as a connected architecture diagram (frontend → API → database → DevOps → AI)
- **Projects** — case studies with live links and browser-frame previews
- **Experience** — career timeline
- **Pull quote** — a personal statement on trust
- **Contact** — call to action with email and social links

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) + [three.js](https://threejs.org) for the 3D globe
- [lucide-react](https://lucide.dev) for icons

## Getting started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Available scripts

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `pnpm dev`    | Start the local dev server           |
| `pnpm build`  | Create an optimized production build |
| `pnpm start`  | Serve the production build           |
| `pnpm lint`   | Run ESLint                           |

## Deployment

This site is fully static (prerendered at build time), so it can be deployed to any static-friendly host. The simplest path is [Vercel](https://vercel.com/new), the creators of Next.js — push to a Git repo, import the project, and it deploys automatically on every push.

Set the `NEXT_PUBLIC_SITE_URL` environment variable to your production URL so social share previews (Open Graph / Twitter cards) resolve correctly.
