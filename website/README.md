# Portfolio Website

Recruiter-facing portfolio website for Ecenur Keskin, built with the Next.js App Router.

## Routes

- `/` - hero, selected work, about, skills, and analytical principles
- `/projects/cedarvale-freight-partners` - flagship logistics case study
- `/projects/lumatrail-market` - e-commerce and merchandising case study
- `/projects/pinebridge-dental-arts` - dental practice operations case study
- `/projects/ember-oak-kitchen` - restaurant operations case study
- `/projects/frostline-home-comfort` - field-service operations case study

## Local commands

```text
pnpm install
pnpm dev
pnpm build
```

Use the versions pinned in `package.json` and `pnpm-lock.yaml`. Do not commit `node_modules`, build caches, or environment files.

## Content ownership

- Project copy is centralized in `app/data.ts`.
- Shared styling is in `app/globals.css`.
- Approved screenshots are under `public/assets/screenshots/`.
- Portfolio-level disclosure appears on the home page and in the footer.

The package is local-only until the owner explicitly chooses to publish it.
