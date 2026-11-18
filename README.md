# Logeshwaran N — Premium Personal Portfolio Website

A high-performance, responsive personal portfolio website engineered for **Logeshwaran N** (Full-Stack Developer & Enterprise Systems Specialist), based entirely on his verified professional resume.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Vite**.

![Portfolio Preview](/favicon.svg)

---

## 🌟 Highlights & Features

- **Futuristic Bento Grid Layout**: Organized into modern Bento-style modular cards with glassmorphism, dynamic glow hover effects, and crisp typography.
- **Dark & Light Mode Switcher**: Seamless theme switcher persisted across sessions with `localStorage`.
- **Interactive Developer Console / Terminal**: Built-in interactive Bash-like terminal supporting commands:
  - `help`: Lists all available commands
  - `about` / `whoami`: Professional background & contact
  - `skills`: Categorized technical skill sets
  - `experience`: Career history at AmZetta Technologies
  - `projects`: Deep dive into enterprise systems
  - `education`: Academic degrees and GPA
  - `achievements`: Quantified engineering milestones
  - `contact`: Direct email, phone, and LinkedIn
  - `resume` / `download`: Downloads original resume document
  - `theme`: Toggles Dark/Light mode
  - `clear`: Clears the console output
- **Verified Facts Single Source of Truth**: All information is centrally defined in [`src/data/portfolio.ts`](file:///e:/Anti-G/src/data/portfolio.ts). Easy to modify without touching UI code.
- **Embedded Resume Viewer & Download**: Fullscreen document preview, printable resume view (`window.print()`), and direct download of `Logeshwaran_N_Full-Stack.docx`.
- **Interactive Project Deep Dive**: Clickable project cards opening modal windows with architecture notes, key features, and technical contributions.
- **Modern Contact Hub**: 1-click clipboard copying for email, phone, and LinkedIn, along with an interactive form featuring real-time client-side validation and celebratory confetti.
- **Production Performance**: Zero layout shifts, high-efficiency SVG icons, and lightning-fast Vite bundling.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework & Core** | React 18, TypeScript, Vite 6 |
| **Styling & Theme** | Tailwind CSS v3, PostCSS, Autoprefixer |
| **Motion & Animation** | Framer Motion, Canvas Confetti |
| **Iconography** | Lucide React |
| **Deployment** | Netlify (`netlify.toml` preconfigured) |

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg                   # Custom cybernetic monogram logo
│   ├── Logeshwaran_N_Full-Stack.docx # Original downloadable resume
│   ├── resume.docx                   # Fallback resume alias
│   ├── robots.txt                    # Search crawler directives
│   └── sitemap.xml                   # SEO sitemap
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── NotFound.tsx          # Custom 404 cyber diagnostic screen
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Glassmorphic floating nav & mobile drawer
│   │   │   ├── Footer.tsx            # Footer with contact & quick links
│   │   │   ├── ScrollProgress.tsx    # Header scroll progress bar
│   │   │   └── ThemeToggle.tsx       # Light / Dark mode toggle button
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Rotating titles, summary, CTAs, metrics
│   │   │   ├── About.tsx             # Professional bio, strengths, career highlights
│   │   │   ├── Skills.tsx            # Categorized Bento Grid with search filter
│   │   │   ├── Experience.tsx        # Vertical timeline for AmZetta Technologies
│   │   │   ├── Projects.tsx          # Filterable project cards
│   │   │   ├── ProjectModal.tsx      # Deep dive modal with architecture breakdown
│   │   │   ├── Education.tsx         # BE Computer Science (CGPA 8.23)
│   │   │   ├── Achievements.tsx      # Quantified milestones (35% API speedup, etc.)
│   │   │   ├── ResumeViewer.tsx      # Fullscreen preview & print layout
│   │   │   └── Contact.tsx           # Contact form & 1-click copy cards
│   │   └── ui/
│   │       ├── BackgroundGlow.tsx    # Ambient mesh gradients & cyber grid
│   │       ├── BentoCard.tsx         # Glassmorphic Bento card with glow borders
│   │       ├── SectionHeading.tsx    # Standardized section headings
│   │       ├── Terminal.tsx          # Interactive shell terminal
│   │       └── Badge.tsx             # Cyber status & tag badges
│   ├── context/
│   │   └── ThemeContext.tsx          # Dark / Light theme state management
│   ├── data/
│   │   └── portfolio.ts              # Single source of truth for resume data
│   ├── types/
│   │   └── portfolio.ts              # Strongly-typed TypeScript interfaces
│   ├── utils/
│   │   └── confetti.ts               # Celebration particle effects
│   ├── App.tsx                       # Root view layout
│   ├── main.tsx                      # React root mounting
│   └── index.css                     # Tailwind directives & glass styles
├── index.html                        # SEO meta tags, OpenGraph, JSON-LD schema
├── netlify.toml                      # Netlify build & security headers
├── package.json                      # Dependency manifests & build scripts
├── tailwind.config.js                # Custom palette, animations & fonts
└── tsconfig.json                     # Strict TypeScript compiler options
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd Anti-G

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be live at `http://localhost:5173`.

### Production Build

```bash
# Compile TypeScript and bundle with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 Updating Your Portfolio Data

To update personal details, job roles, achievements, or project descriptions, you **only** need to edit:

👉 [`src/data/portfolio.ts`](file:///e:/Anti-G/src/data/portfolio.ts)

All UI sections dynamically adapt to this file.

---

## 🚀 Netlify Deployment

This repository includes a production-ready [`netlify.toml`](file:///e:/Anti-G/netlify.toml) configured with:
- Single Page Application redirect rules (`/*` -> `/index.html`)
- Immutable caching headers for assets
- Modern security response headers (`X-Frame-Options`, `X-Content-Type-Options`)

### To Deploy:
1. Push this repository to GitHub or GitLab.
2. Link the repository in [Netlify](https://app.netlify.com).
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 📄 License
This portfolio is custom-crafted for Logeshwaran N.
All rights reserved.
