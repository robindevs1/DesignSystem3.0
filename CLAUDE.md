# Coleman Design System 3.0 — Claude Code Guide

## What this project is

A static design system documentation website for Coleman, hosted on GitHub Pages.
It documents design tokens (colors, typography, spacing, etc.) and component patterns.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** (styling)
- **Lucide React** (icons)

## Project structure

```
src/
  app/
    App.tsx                     # Root — manages active section state
    components/
      Logo.tsx                  # Coleman brand mark in the sidebar
      Sidebar.tsx               # Left nav with section links
      SectionHeader.tsx         # Title + description at top of each section
      sections/
        ColorsSection.tsx       # Color palette
        TypographySection.tsx   # Type scale
        SpacingSection.tsx      # Spacing tokens
        ButtonsSection.tsx      # Button variants/sizes/states
        IconsSection.tsx        # Icon library
        InputFieldsSection.tsx  # Form input variants
        EffectsSection.tsx      # Shadows & blurs
        BorderRadiusSection.tsx # Corner radius scale
  lib/
    utils.ts                    # cn() utility (clsx + tailwind-merge)
  styles/
    index.css                   # Tailwind base + CSS variables (design tokens)
```

## The Figma Make source of truth

The design lives at:
**https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0**

To read the original source files, use the Figma MCP:
1. Call `get_design_context` with `fileKey: "x2nmf0sfIjp9dG6RYKUMHN"` and `nodeId: "0:1"`
2. This returns resource_links for every source file (App.tsx, section components, CSS, etc.)
3. Read those resource links to get the exact token values, styles, and component implementations

## Populating token values from Figma Make

All section components currently have placeholder data with `// TODO (Claude Code):` comments.
To fill in the real values:
1. Read the corresponding file from Figma Make (e.g., `src/app/components/sections/ColorsSection.tsx`)
2. Copy the token values (colors, sizes, font stacks, etc.) into the local component
3. Update `src/styles/index.css` CSS variables to match the Figma Make `src/styles/globals.css` and `src/styles/theme.css`

## Common tasks

### Run locally
```bash
npm install
npm run dev
```

### Build for production
```bash
npm run build
```

### Add a new section
1. Create `src/app/components/sections/NewSection.tsx`
2. Add the section ID and label to the `SECTIONS` array in `App.tsx`
3. Add the case to `renderSection()` in `App.tsx`

### Change the GitHub repo base path
Update `BASE_PATH` in `vite.config.ts` to match your repo name (e.g., `'/my-repo-name/'`).
If using a custom domain, set it to `'/'`.

## Deployment (GitHub Pages)

Push to `main` and GitHub Actions will auto-build and deploy.
Setup steps (one-time, done in GitHub repo settings):
1. Go to Settings → Pages
2. Set Source to "GitHub Actions"

The workflow file is at `.github/workflows/deploy.yml`.

## Style conventions

- Use Tailwind utility classes for all styling — no inline styles except for dynamic values (e.g., color swatches)
- Use `cn()` from `@/lib/utils` for conditional class merging
- CSS variables are in `src/styles/index.css` under `:root` — update these to match Coleman's actual tokens
- All text content and token values live in the section component files, not in separate data files
