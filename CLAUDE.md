# ERM / Coleman Design System 3.0 — Angular — Claude Code Guide

## What this project is

A static design system documentation website for ERM/Coleman, hosted on GitHub Pages.
It documents design tokens (colors, typography, spacing, radius, effects) and component
patterns (buttons, inputs, icons).

This is the **Angular 20 + Nx** implementation. It was migrated from an earlier
**React + Vite** version (the original still lives at
`/Users/robin.park/Desktop/DesignSystem3.0`). The React code is also preserved on the
`react-archive` branch of the GitHub repo. All active work happens here.

## Tech stack

- **Angular 20** (standalone components, no NgModules)
- **Nx 22** monorepo (`apps/` + `libs/`)
- **TypeScript 5.9**
- **SCSS** for component/global styles (no Tailwind)
- **CSS custom properties** for design tokens (loaded as global styles)
- **pnpm 10** (package manager — see `packageManager` field in package.json)
- **Node 22** (use `nvm use 22`)
- **lucide-angular** (icons), **@ngx-translate** (i18n scaffolding), **Jest** (tests)

## Conventions (follow these)

- **Standalone components only** — declare deps in the `imports: []` array, no NgModules.
- **OnPush everywhere** — every component sets
  `changeDetection: ChangeDetectionStrategy.OnPush`.
- **Signals for inputs/state** — `input.required<T>()`, `input<T>()`, `signal()`.
  See `shared/section-header/section-header.component.ts` for the input pattern.
- **Lazy-loaded routes** — each section is `loadComponent: () => import(...)`.
- **Selectors** are prefixed `app-` (root) / `docs-` (shared components, e.g. `docs-sidebar`).
- **Hash routing** (`withHashLocation()`) — required so GitHub Pages serves the SPA from a
  subpath without a 404 fallback. Don't switch to path routing without adding a Pages
  404.html workaround.

## Project structure

```
apps/docs/                          # the Angular application
  project.json                      # Nx targets (build/serve/test/lint) + global styles list
  src/
    main.ts                         # client bootstrap (SPA — no SSR)
    index.html                      # <app-root>, Google Fonts (Roboto, Source Sans 3)
    styles.scss                     # @use 'styles/main'
    styles/main.scss                # reset + global base (html/body, box-sizing, body font)
    app/
      app.ts / app.html / app.scss  # root shell: <docs-sidebar/> + <main><router-outlet/></main>
      app.config.ts                 # providers: router, http, animations, translate
      app.routes.ts                 # all 8 sections, lazy-loaded
      shared/
        sidebar/                    # left nav (RouterLink/RouterLinkActive), ERM logo mark
        section-header/             # title + optional description at top of each section
      sections/                     # one folder per doc section (.ts/.html/.scss each)
        colors/  typography/  spacing/  border-radius/
        effects/  icons/  buttons/  input-fields/
  public/
    favicon.ico
    assets/i18n/en.json             # translate loader target (currently empty {})

libs/design-system/                 # shared library (alias: @design-system3.0-angular/design-system)
  src/index.ts                      # public API barrel (empty for now)
  src/lib/tokens/                   # design tokens as CSS custom properties
    colors.css typography.css spacing.css radius.css shadows.css
    _index.scss                     # SCSS re-export stub
  src/lib/components/               # (empty) future shared components go here
```

## Design tokens

Tokens are **CSS custom properties** in `libs/design-system/src/lib/tokens/*.css`.
They are loaded as **global styles** via the `styles` array in `apps/docs/project.json`
(NOT via SCSS `@import` — Dart Sass treats `@import 'x.css'` as a literal passthrough,
which broke the build, so the CSS files are listed directly in `project.json`).

To change a token value, edit the relevant file in `libs/design-system/src/lib/tokens/`.
Naming uses dash notation: `--grey-25`, `--coleman-blue-500`, `--red-400`, `--radius-4`,
`--spacing-2`, `--shadow-xs`, etc.

## Common tasks

### Run locally

```bash
nvm use 22
pnpm install
pnpm exec nx serve docs          # dev server at http://localhost:4200 (Vite, base href "/")
```

### Build

```bash
pnpm exec nx build docs --configuration=development   # fast, unminified
pnpm exec nx build docs --configuration=production    # what CI deploys; base href "/DesignSystem3.0/"
```

Production output: `dist/apps/docs/browser/`

### Test / lint

```bash
pnpm exec nx test docs
pnpm exec nx lint docs
```

### Add a new section

1. `pnpm exec nx g @nx/angular:component --name=<name> --path=apps/docs/src/app/sections/<name>/<name>`
   (use OnPush; import `SectionHeaderComponent`)
2. Add a lazy route to `app.routes.ts`
3. Add the nav link to `shared/sidebar/sidebar.component.html`

## Deployment (GitHub Pages)

- Repo: **https://github.com/robindevs1/DesignSystem3.0** (`main` branch)
- Live URL: **https://robindevs1.github.io/DesignSystem3.0/**
- Workflow: `.github/workflows/deploy.yml` — on push to `main`, runs
  `pnpm exec nx build docs --configuration=production` and deploys
  `dist/apps/docs/browser` via `actions/deploy-pages`.
- **base href** for Pages is set in `apps/docs/project.json` under the production
  configuration (`"baseHref": "/DesignSystem3.0/"`). The repo name is the URL subpath —
  if the repo is renamed or moved to a custom domain, update this value.
- One-time GitHub setting: Settings → Pages → Source = "GitHub Actions".

## Notes / gotchas

- **No SSR.** The Nx scaffold originally generated SSR/`outputMode: "server"`, which
  caused a `/` → `/colors` → `/#/colors` redirect loop with an empty body. It was removed
  and the app is now a pure client-side SPA. Don't re-add `server`/`ssr`/`outputMode` to
  the build options.
- **Pre-commit hook** runs `pnpm exec lint-staged` (ESLint + Prettier on staged files).
  Config lives under `lint-staged` in `package.json`.
- **`provideAnimationsAsync()`** requires the `@angular/animations` package (it's installed).
- The `nx-welcome` scaffold component was deleted; `app.spec.ts` was rewritten to assert the
  sidebar renders.

## Source of truth (Figma Make)

Original design: **https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0**

To read source token values via the Figma MCP:

1. Call `get_design_context` with `fileKey: "x2nmf0sfIjp9dG6RYKUMHN"` and `nodeId: "0:1"`
2. Read the returned resource_links for the exact token values and component styles.
