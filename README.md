# Synergy College of Nursing — Website

Modern, responsive website for Synergy College of Nursing, Miraj (Sangli, Maharashtra) — a part of Uma Trust & Synergy Hospital, Miraj, affiliated to MUHS, Nashik.

All college information, images and MUHS mandate documents are sourced from the official website: https://synergynursingcollege.in/

## Tech Stack

- React 19 + Vite
- Tailwind CSS 3
- Zero runtime UI dependencies (hand-rolled components + inline SVG icons)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # oxlint
```

## Structure

```
src/
├── components/    # Navbar, Hero, About, Courses, Facilities, Gallery,
│                  # Admissions, Notices, Contact, Footer, etc.
├── data/
│   └── siteContent.js   # All college facts in one place
├── hooks/
│   └── useReveal.js     # Scroll-reveal animation hook
├── App.jsx
└── main.jsx
```
