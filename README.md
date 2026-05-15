# florinbighiu.dev

Personal portfolio built with Next.js 15, React 19, and Tailwind CSS. Showcases projects, skills, and a working contact form.

**Live:** [florinbighiu.dev](https://florinbighiu.dev)

## Features

- Animated hero, about, and skills sections with scroll-reveal
- 3D tilt effect on project cards
- Contact form powered by [Resend](https://resend.com)
- Fully responsive layout
- Dark theme with custom design tokens

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS
- **Email:** Resend
- **Language:** TypeScript
- **Deployment:** Vercel

## Project Structure

```
app/
  page.tsx          # Main page, composes all sections
  layout.tsx        # Root layout and metadata
  globals.css       # Global styles and design tokens
  api/contact/      # Contact form API route (Resend)
components/
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  Contact.tsx
  Nav.tsx
  Footer.tsx
hooks/
  useReveal.ts      # Intersection observer hook for scroll animations
```
