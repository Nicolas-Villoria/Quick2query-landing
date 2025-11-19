# Quick2query Landing Page

A professional, enterprise-focused landing page for Quick2query, the AI-powered Text-to-SQL API platform that empowers data teams to query databases using natural language.

## Overview

Quick2query is a B2B SaaS platform providing production-ready API infrastructure for transforming natural language into optimized SQL queries. Built for modern data teams, analysts, and developers who need fast, accurate database access without complex query writing.

## Key Features

- **Professional B2B Design**: Clean, minimal interface focused on enterprise credibility
- **Live Demo Animation**: GSAP-powered chat demonstration showing real query transformations
- **Performance-First**: Built with Astro for exceptional loading speeds
- **Enterprise Messaging**: Positioned for technical decision-makers and data teams
- **Conversion-Optimized**: Clear value propositions and strategic CTAs

## Tech Stack

- **Framework**: Astro with static site generation
- **Styling**: TailwindCSS for modern, responsive design
- **Components**: React for interactive elements and API playground
- **Video Player**: Custom video player with expandable view
- **Animations**: GSAP for smooth transitions and interactions
- **Deployment**: Optimized for Cloudflare Pages with proper asset handling

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── assets/
├── src/
│   ├── components/
│   │   ├── CTA.astro
│   │   ├── FAQ.astro
│   │   ├── Features.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── HeroSection.jsx (React)
│   │   ├── Pricing.astro
│   │   └── Testimonials.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── features.astro
│   │   ├── pricing.astro
│   │   ├── story.astro
│   │   ├── contact.astro
│   │   └── signin.astro
│   └── styles/
│       ├── global.css
│       ├── animations.css
│       ├── buttons.css
|       ├── typography.css
│       └── faq.css
└── package.json
```

## Pages Overview

- **Homepage** (`/`): Hero section showcasing natural language to SQL transformation
- **Features** (`/features`): Comprehensive overview of AI query capabilities and database support
- **Pricing** (`/pricing`): Flexible API pricing plans for different usage levels
- **Story** (`/story`): Our journey in revolutionizing database interactions
- **Contact** (`/contact`): Get in touch for enterprise solutions
- **Documentation** (`/docs`): Detailed API documentation and guides
- **Sign In** (`/signin`): API dashboard access

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`                | Starts local dev server at `localhost:4321`     |
| `pnpm build`              | Build your production site to `./dist/`         |
| `pnpm preview`            | Preview your build locally, before deploying    |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check`|
| `pnpm astro -- --help`    | Get help using the Astro CLI                    |


## Brand Identity

- **Primary Color**: `#00B3A4` - Modern tech teal
- **Accent Color**: `#00E0E0` - Electric blue
- **Tech Color**: `#6C63FF` - Dynamic purple
- **Background**: `#AEEBFF` - Soft sky blue
- **Typography**:
  - Headers: Roboto (Clean, modern)
  - Body: Inter (Highly readable)


##  Configuration

- **Astro Config**: `astro.config.mjs` - Includes Tailwind and React integrations
- **Tailwind Config**: `tailwind.config.mjs` - Custom content paths and configurations
- **TypeScript**: `tsconfig.json` - Type checking configuration

## Responsive Design

The site is fully responsive with breakpoints optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## SEO & Performance

- Static site generation for optimal performance
- Semantic HTML structure
- Optimized images and assets
- Fast loading times with Astro's zero-JS by default

## Cloudflare Deployment Fix

If you encounter lockfile issues during Cloudflare deployment, the project includes:
- Updated `pnpm-lock.yaml` compatible with all dependencies
- Proper build configuration for static site generation
- Optimized for Cloudflare Pages automatic deployments

## License

This project is part of the Quick2query platform and is licensed under the MIT License.

## Contributing

For contributions and feature requests, please contact the development team.

---


