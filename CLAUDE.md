# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 (App Router) + React 19 + TypeScript** company website for Orfys Technologies.

### Routing

File-based routing under `app/`. Dynamic routes use slug-based lookup:
- `/services/[slug]` — service detail pages
- `/portfolio/case-studies/[slug]` — case study pages
- `/portfolio/products/[slug]` — product pages

Dynamic routes validate slugs against metadata maps and call `notFound()` for invalid slugs.

### Content / Data Layer

**All content is hardcoded in TypeScript — no CMS or API.**

- `lib/constants.ts` — navigation menus, company info (email, phone, logos)
- `app/services/services-metadata.ts` — service slugs and metadata
- `app/portfolio/portfolios-metadata.ts` — `caseStudiesMetadataMap` and `productsMetadataMap`
- `lib/portfolioConstants.ts` — extended portfolio data
- `utilities/types.ts` — shared TypeScript interfaces (`MenuItem`, `Service`, `Product`, etc.)

To add a new service, case study, or product: add an entry to the relevant metadata map and add any static assets under `public/`.

### Component Patterns

- **Template components** (`ServiceTemplate`, `CaseStudiesTemplate`) accept slug-specific data and render the full page layout — dynamic pages simply pass the resolved metadata into these.
- Client components require `"use client"` at the top; server components are the default.
- Path alias `@/*` maps to the repo root.

### Styling

- **Tailwind CSS 4** for utility classes
- **CSS variables** for theming (light/dark) defined in `app/globals.css`
- **Inline styles** used for dynamic theme values from context
- Theme state lives in `contexts/ThemeContext.tsx` and is persisted to `localStorage`

### Animations

Two animation libraries are used together:
- **GSAP** (`hooks/useGSAPAnimation.ts`, `useGSAPStagger.ts`) — complex timeline animations (header dropdowns, hero sequences). Use `useRef` to target DOM elements.
- **Framer Motion** — declarative, component-level animations
- **CSS scroll classes** (`.scroll-fade-in`, `.scroll-slide-left`, etc.) — handled by `hooks/useScrollAnimation.ts` via IntersectionObserver

### SEO

Root layout (`app/layout.tsx`) contains JSON-LD schema, Open Graph tags, and base metadata. Per-page metadata is exported from each route file using Next.js `generateMetadata`.
