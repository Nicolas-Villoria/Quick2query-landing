# Schedulink Landing Page 🏥

A modern, responsive landing page for Schedulink - the next-generation medical scheduling platform designed specifically for healthcare providers.

## ✨ Features

- **Modern Design**: Clean, professional medical-themed interface
- **Responsive**: Fully responsive design optimized for all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Interactive Components**: React components for enhanced user experience
- **Medical Focus**: Tailored specifically for healthcare scheduling needs

## 🏗️ Tech Stack

- **Framework**: Astro 5.12.7 with static site generation
- **Styling**: Tailwind CSS 3.4.17 for responsive design
- **Components**: React 19.1.1 for interactive elements
- **Deployment**: Optimized for Cloudflare Pages, Netlify, and Vercel

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── assets/
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
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
│       └── faq.css
└── package.json
```

## 🏥 Pages Overview

- **Homepage** (`/`): Hero section with main value proposition and feature highlights
- **Features** (`/features`): Comprehensive overview of medical scheduling capabilities
- **Pricing** (`/pricing`): Transparent pricing plans for healthcare providers
- **Story** (`/story`): The journey and mission behind Schedulink
- **Contact** (`/contact`): Get in touch and request demos
- **Sign In** (`/signin`): User authentication portal

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`     |
| `pnpm build`              | Build your production site to `./dist/`         |
| `pnpm preview`            | Preview your build locally, before deploying    |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check`|
| `pnpm astro -- --help`    | Get help using the Astro CLI                    |

## 🚀 Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/Nicolas-Villoria/schedulink-landing.git
   cd schedulink-landing
   ```

2. **Install dependencies**
   ```sh
   pnpm install
   ```

3. **Start development server**
   ```sh
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the site

## 🌐 Deployment

This project is configured for deployment on multiple platforms:

### Cloudflare Pages
- Automatic deployments from GitHub
- Build command: `pnpm install --no-frozen-lockfile && pnpm build`
- Output directory: `dist`

### Netlify
- Build command: `pnpm build`
- Publish directory: `dist`

### Vercel
- Framework preset: Astro
- Build command: `pnpm build`
- Output directory: `dist`

## 🎨 Key Components

### HeroSection.jsx (React)
Reusable React component for hero sections across pages with:
- Gradient backgrounds
- Animated text elements
- Responsive grid patterns
- Customizable titles and content

### Medical-Themed Features
- **Smart Bookings**: AI-powered scheduling optimization
- **Patient Management**: Comprehensive patient records
- **Automated Reminders**: Reduce no-shows with smart notifications
- **Multi-Location Support**: Manage multiple facilities
- **Insurance Verification**: Real-time insurance checking
- **Analytics Dashboard**: Insights and reporting tools

## 🔧 Configuration

- **Astro Config**: `astro.config.mjs` - Includes Tailwind and React integrations
- **Tailwind Config**: `tailwind.config.mjs` - Custom content paths and configurations
- **TypeScript**: `tsconfig.json` - Type checking configuration

## 📱 Responsive Design

The site is fully responsive with breakpoints optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 SEO & Performance

- Static site generation for optimal performance
- Semantic HTML structure
- Optimized images and assets
- Fast loading times with Astro's zero-JS by default

## 🔧 Cloudflare Deployment Fix

If you encounter lockfile issues during Cloudflare deployment, the project includes:
- Updated `pnpm-lock.yaml` compatible with all dependencies
- Proper build configuration for static site generation
- Optimized for Cloudflare Pages automatic deployments

## 📄 License

This project is part of the Schedulink medical scheduling platform.

## 🤝 Contributing

For contributions and feature requests, please contact the development team.

---

Built with ❤️ for healthcare providers who deserve better scheduling solutions.
