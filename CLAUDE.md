# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version (catches compilation and type errors)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js marketing website for Crossplane using TypeScript, Material-UI, and Emotion for styling.

### Key Architecture Patterns

- **Pages**: Next.js file-based routing in `/pages/` directory
- **Components**: Reusable UI components in `/src/components/`
- **Elements**: Basic UI building blocks in `/src/elements/`
- **Theme System**: Centralized design system in `/src/theme.ts` with custom MUI theme
- **Layout Pattern**: `PageProvider` component wraps all pages with header, footer, and SEO
- **Styling**: Emotion CSS-in-JS with MUI components and custom theme

### Important Files

- `/src/theme.ts` - Contains colors, fonts, typography variants, and global styles
- `/src/components/PageProvider.tsx` - Main layout wrapper for all pages
- `/src/routes.ts` - URL constants for internal and external links
- `/pages/_app.tsx` - App-level configuration with theme provider and GTM
- `/netlify.toml` - Deployment configuration for Netlify

### Design System

- Uses custom Avenir fonts (Avenir-Roman, Avenir-Black)
- Custom color palette with branded colors (nileBlue, aquaMarine, etc.)
- Custom typography variants: h1-h6, body_big, body_normal, body_small, body_xs
- Responsive breakpoints defined in theme
- Global styles handle scrollbar hiding and cookie banner styling

### Component Patterns

- Components use MUI's `sx` prop for styling
- Follow PageProvider pattern for page-level components
- Import theme colors and fonts from `/src/theme.ts`
- Use custom Link component from `/src/elements/Link.tsx`

### External Integrations

- Google Tag Manager for analytics
- Netlify for hosting with Next.js plugin
- Next.js sitemap generation via `next-sitemap`
- Redirects configured in `next.config.js` (docs → docs.crossplane.io)