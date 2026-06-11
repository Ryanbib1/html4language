# AutoCoder Landing Page

## Recommended directory structure

```text
app/
  [lang]/
    page.tsx              # localized landing page route: /en, /es, /pt, /fr
  globals.css             # Tailwind CSS 4 entry and design tokens
  layout.tsx              # root metadata and shell
  page.tsx                # redirects visitors to /en
components/
  Header.tsx              # navigation, CTA, functional language switcher
  Hero.tsx                # animated ai app builder hero mockup
  SocialProof.tsx
  FeaturesGrid.tsx
  HowItWorks.tsx
  FinalCTA.tsx
  Footer.tsx
dictionaries/
  en.json                 # English marketing copy
  es.json                 # Spanish marketing copy
  pt.json                 # Portuguese marketing copy
  fr.json                 # French marketing copy
lib/
  i18n.ts                 # locale list, dictionary loader, type helpers
```

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Lucide React icons

Run locally:

```bash
npm install
npm run dev
```
