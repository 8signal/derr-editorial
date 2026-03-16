# The Edit Derr — Next.js Website

A premium editorial website for **Amber Derr / The Edit Derr**, built with Next.js 15, TypeScript, and the App Router. Currently a single-page site, architected for easy expansion into a multi-page site.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Create production build         |
| `npm run start` | Serve production build locally  |
| `npm run lint`  | Run ESLint                      |

## Project Structure

```
├── app/
│   ├── globals.css        # Full branded stylesheet
│   ├── layout.tsx         # Root layout with metadata & fonts
│   └── page.tsx           # Home page (composes all sections)
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll effect & mobile menu
│   ├── Hero.tsx            # Hero with parallax orbs
│   ├── ProblemSection.tsx  # Three pain-point cards
│   ├── SloganBand.tsx      # Terracotta banner quote
│   ├── DifferentiatorSection.tsx  # Four differentiators
│   ├── ServicesSection.tsx # Three service offerings
│   ├── TransformSection.tsx# Before/After comparison
│   ├── TestimonialCarousel.tsx # Auto-rotating testimonials
│   ├── AboutSection.tsx    # Bio + trait tags
│   ├── CTASection.tsx      # Final call-to-action
│   ├── Footer.tsx          # Site footer
│   ├── ScrollReveal.tsx    # Reusable scroll animation wrapper
│   ├── ScrollProgress.tsx  # Terracotta progress bar
│   └── MicroInteractions.tsx # Magnetic buttons & card tilt
├── public/                 # Static assets (add images here)
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Adding Amber's Photo

1. Place the headshot in `public/amber.jpg` (or `.webp`)
2. In `components/AboutSection.tsx`, replace the placeholder `<div>` with:
   ```tsx
   import Image from "next/image";
   // ...
   <Image
     src="/amber.jpg"
     alt="Amber Derr"
     fill
     className="about-image"
     style={{ objectFit: "cover", borderRadius: 4 }}
   />
   ```

## Expanding to Multi-Page

The App Router makes this straightforward:

```
app/
├── page.tsx              # Home (current)
├── about/page.tsx        # /about
├── services/page.tsx     # /services
├── blog/
│   ├── page.tsx          # /blog (listing)
│   └── [slug]/page.tsx   # /blog/my-post (dynamic)
├── contact/page.tsx      # /contact
└── layout.tsx            # Shared layout (nav + footer)
```

When ready, move the `<Navbar>` and `<Footer>` into `layout.tsx` so they persist across all pages.

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Other platforms
Any platform that supports Next.js: Netlify, Railway, AWS Amplify, Docker, etc. Just run `npm run build` and serve the `.next` output.

## Upgrading to `next/font` (Optional)

The current build uses a `<link>` tag for Google Fonts. When deploying to a platform with internet access at build time, you can switch to `next/font/google` for better performance:

```tsx
// app/layout.tsx
import { Cormorant_Garamond, Nunito } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

// Add className={`${cormorant.variable} ${nunito.variable}`} to <html>
```

This will self-host the fonts and eliminate the external request.

## Brand Tokens

| Token              | Value                        |
| ------------------ | ---------------------------- |
| Deep Espresso      | `#3E2723`                    |
| Warm Sand          | `#EFEBE9`                    |
| Terracotta Spark   | `#D84315`                    |
| Heading Font       | Cormorant Garamond           |
| Body Font          | Nunito                       |
