# Mathias Wendlinger — Portfolio

Source for [www.matwenger.design](https://www.matwenger.design): case studies, an about page, a lab of prototypes and a resume. It is a statically exported Next.js site published to GitHub Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:3001
npm run lint
npm run build    # type-checks and exports the site to out/
npm start        # serves out/ locally
```

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and deploys `out/` to GitHub Pages.

## Project structure

```
app/                  Routes (App Router), design tokens and global styles
components/
  design-system/      Shared page, gallery, media and navigation components
  home/ about/ lab/   Page-specific components
  projects/           Project cards and the case-study template
  ui/                 shadcn/ui primitives in use
content/projects/     One Markdown file per project
lib/                  Content loading, case-study schema and page data
public/               Static assets, served as-is
docs/                 Design system reference, resume source, asset notes
```

## Adding a project

Create `content/projects/<id>.md`. The file name becomes the URL, `/projects/<id>`.

```markdown
---
title: "Project Title"
description: "One or two sentences shown on cards and in search results"
cover: "/images/projects/<id>/main/cover.jpg"
tags: ["AI", "Enterprise"]
year: "2026"
order: 1                     # Optional: position among projects of the same year
role: "Principal Design Manager"
company: "Microsoft"
videos:                      # Optional
  - src: "/images/projects/<id>/video/video_1.mp4"
    thumbnail: "/images/projects/<id>/video/thumbnail_1.jpg"
    captions: "/images/projects/<id>/video/captions.en.vtt"   # Optional
    type: "local"
    title: "Overview"
  - type: "youtube"
    id: "dQw4w9WgXcQ"
gallery:                     # Optional
  - src: "/images/projects/<id>/gallery/img_1.jpg"
    alt: "Describe what the image shows"
    caption: "Optional context"
    ratio: "portrait"        # Optional: landscape, wide, square or portrait
caseStudy:                   # Optional, see below
  ...
---

## Overview

In a case study, the Markdown body appears under "Full project notes & responsibilities" at the end of the page.
```

Projects are listed newest first, then by `order`, then by file name.

### Case studies

A `caseStudy` block turns the page into the editorial case-study layout: headline, introduction, lead media, overview, a walkthrough of the experience, key decisions and outcomes. Its media fields are 1-based positions in `gallery` and `videos`. The schema lives in `lib/project-case-study.ts`, and a full example is in section 12 of [docs/design-system.md](docs/design-system.md). Without `caseStudy`, the project uses a simpler page.

The build fails, naming the file, if a project's frontmatter is invalid or a case study points at media that does not exist.

### Media

```
public/images/projects/<id>/
├── main/       cover image
├── gallery/    screenshots and photos
└── video/      videos, posters and captions
```

- Images are not optimized at build time. Compress them before committing, and export at the size they are displayed (960, 1600 or 2400 px wide depending on use).
- Use JPEG or WebP for photos and covers, and PNG or lossless WebP for detailed interface screenshots.
- Keep covers at 16:9, and give every image descriptive alt text.
- Provide captions or a transcript for videos with speech.

## Technologies

Next.js 16 (App Router, static export), React 18, TypeScript, Tailwind CSS, CSS modules, Framer Motion, Radix UI via shadcn/ui, gray-matter, marked and zod.

## Charte graphique

La référence actuelle est [docs/design-system.md](docs/design-system.md). Les tokens sont centralisés dans `app/design-tokens.css`, les composants dans `components/design-system/` et la page interactive est disponible à [localhost:3001/design-system](http://127.0.0.1:3001/design-system).
