# Anil Timilsena — Portfolio

A modern, responsive developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Radix UI components. It includes sections for Hero, About, Experience, Education, Projects, Skills, and Contact.

## Tech Stack
- React + Vite (TypeScript)
- Tailwind CSS (+ `tailwindcss-animate`)
- Radix UI + `lucide-react`
- React Router
- Vitest + Testing Library

## Getting Started
Prerequisites: Node.js (18+ recommended) and npm.

```powershell
# Clone or open the project
Push-Location "C:\Users\iamdi\OneDrive\Desktop\Anil Timilsena portfolio\my-portfolio-polished-dfa14664-main"

# Install dependencies
npm install

# Start the dev server (hot reload)
npm run dev
```
The app runs on `http://localhost:8081` if `8080` is in use.

## Scripts
- `npm run dev`: Start development server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the production build locally
- `npm run test`: Run tests once
- `npm run test:watch`: Watch mode for tests
- `npm run lint`: Lint the project

## Editing Content
Update the text and labels in these files:
- Hero: `src/components/Portfolio/HeroSection.tsx`
- About: `src/components/Portfolio/AboutSection.tsx`
- Experience: `src/components/Portfolio/ExperienceSection.tsx`
- Education: `src/components/Portfolio/EducationSection.tsx`
- Projects: `src/components/Portfolio/ProjectsSection.tsx`
- Skills: `src/components/Portfolio/SkillsSection.tsx`
- Contact: `src/components/Portfolio/ContactSection.tsx`
- Navigation/Footer: `src/components/Portfolio/Navigation.tsx`, `src/components/Portfolio/Footer.tsx`

## Styling & Theme
- Global styles and CSS variables (colors, radii, etc.): `src/index.css`
- Tailwind configuration and theme tokens: `tailwind.config.ts`

## Vite Config
Dev server options and path aliases: `vite.config.ts`.
- Port `8080` is configured; Vite auto-switches if busy.

## Folder Structure
```
src/
	components/Portfolio/   # Portfolio sections
	components/ui/          # Reusable UI components
	pages/                  # Routes/pages
	hooks/, lib/            # Utilities & hooks
```

## Build & Deploy
Create a production build and deploy the `dist/` folder to any static host.
```powershell
npm run build
npm run preview
```

## Notes
- All scaffold-specific placeholder tags and metadata have been removed.
- If you prefer a fixed dev port, set it in `vite.config.ts`.

