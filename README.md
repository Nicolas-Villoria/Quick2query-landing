# Quick2query Landing Page 🚀

A modern, responsive landing page for Quick2query - the cutting-edge Natural Language to SQL API platform that transforms plain English into optimized database queries.

## ✨ Features

- **Modern Tech Interface**: Clean, professional tech-focused design with code syntax highlighting
- **Interactive Demo**: Live API playground with real-time query transformation
- **Responsive Design**: Optimized viewing experience across all devices
- **Fast Performance**: Built with Astro for lightning-fast page loads
- **Video Showcase**: Interactive video demonstrations with expandable view

## 🏗️ Tech Stack

- **Framework**: Astro with static site generation
- **Styling**: TailwindCSS for modern, responsive design
- **Components**: React for interactive elements and API playground
- **Video Player**: Custom video player with expandable view
- **Animations**: GSAP for smooth transitions and interactions
- **Deployment**: Optimized for Cloudflare Pages with proper asset handling

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

## � Pages Overview

- **Homepage** (`/`): Hero section showcasing natural language to SQL transformation
- **Features** (`/features`): Comprehensive overview of AI query capabilities and database support
- **Pricing** (`/pricing`): Flexible API pricing plans for different usage levels
- **Story** (`/story`): Our journey in revolutionizing database interactions
- **Contact** (`/contact`): Get in touch for enterprise solutions
- **Documentation** (`/docs`): Detailed API documentation and guides
- **Sign In** (`/signin`): API dashboard access

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
   git clone https://github.com/Nicolas-Villoria/quick2query-landing.git
   cd quick2query-landing
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

## 🎨 Brand Identity

- **Primary Color**: `#00B3A4` - Modern tech teal
- **Accent Color**: `#00E0E0` - Electric blue
- **Tech Color**: `#6C63FF` - Dynamic purple
- **Background**: `#AEEBFF` - Soft sky blue
- **Typography**:
  - Headers: Roboto (Clean, modern)
  - Body: Inter (Highly readable)

## 💻 Development Notes

### Video Integration
The site features an interactive video demo. Make sure the video file (`prototype_v2.mp4`) is placed in the `public` directory. The video player includes:
- Expandable full-screen view
- Custom playback controls
- Synchronized playback between views
- Optimized loading for better performance

### Asset Handling
When deploying to Cloudflare Pages, ensure:
1. All assets are in the `public` directory
2. Use absolute paths for assets (e.g., `/images/logo.png`)
3. Proper cache headers are set for static assets
4. Images are optimized for web delivery

### API Documentation
The documentation section uses:
- Syntax highlighting for code examples
- Interactive API playground
- Real-time query transformation demos
- Response visualization tools

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
