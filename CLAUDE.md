# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build + sitemap generation
npm run lint     # ESLint
npm start        # Serve production build
```

## Architecture

This is a **statically exported** Next.js portfolio site (`output: 'export'` in next.config.js) deployed to matwenger.at. No server-side runtime — all pages are pre-rendered at build time.

### Content System
Projects are markdown files in `content/projects/`. Each file uses gray-matter frontmatter (title, description, tags, year, role, company, videos, gallery) with markdown body content. `lib/get-project-content.ts` reads these files, parses frontmatter, and converts markdown to HTML via `marked`. Project images go in `public/images/projects/<project-name>/main/` and `gallery/`.

### Routing
- `/` — Home page with hero, stats, profile, random featured projects, testimonials
- `/projects` — Project listing grid
- `/projects/[id]` — Individual project pages (dynamic routes from markdown filenames)
- `/about` — About page
- `/lab` — Lab/experiments page (client component for framer-motion)

### UI Stack
- **shadcn/ui** components in `components/ui/` (Radix primitives + Tailwind + CVA)
- **Tailwind CSS** with HSL CSS variable theming (light/dark via `next-themes`)
- **Framer Motion** for animations
- **Three.js** used in lab experiments
- Fonts: Inter (sans), Lora (serif), Outfit (display) via `next/font`

### Key Conventions
- Path aliases: `@/components`, `@/lib`, `@/hooks`, `@/types`
- Page-specific components live in `components/<section>/` (e.g., `components/home/`, `components/projects/`)
- Shared layout components in `components/layout/`
- TypeScript and ESLint are configured but errors are ignored during builds (`ignoreBuildErrors`, `ignoreDuringBuilds`)
- Sitemap is generated post-build via `scripts/generate-sitemap.js`
