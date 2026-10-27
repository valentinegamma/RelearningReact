# Pan African Skill Development Centre

React + JavaScript project built with Vite, Tailwind CSS v4, shadcn/ui conventions, and Motion for React.

## Getting started

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Pages

- `index.html` is the home page.
- `team.html` is the team directory and contact page.
- These are separate Vite HTML entry points, not client-side routes. Add future
  dedicated pages as HTML entry points and link to them from the shared header.

## Color Palette

| Color | Hex | Preview |
|-------|-----|---------|
| Dark Navy | `#001F3F` | ![#001F3F](https://via.placeholder.com/20/001F3F/001F3F) |
| Deep Blue | `#083358` | ![#083358](https://via.placeholder.com/20/083358/083358) |
| Bright Blue | `#0D63A5` | ![#0D63A5](https://via.placeholder.com/20/0D63A5/0D63A5) |
| Golden Yellow | `#FFD717` | ![#FFD717](https://via.placeholder.com/20/FFD717/FFD717) |

## Stack notes

- Tailwind CSS is integrated through the Vite plugin and `src/index.css`.
- `components.json` and the `@/` alias are configured for shadcn/ui components in JSX.
- The starter includes a shadcn-style Button and `cn` utility. Add further components with the shadcn CLI, choosing JavaScript when prompted.
- Motion for React is installed as `motion`; import animations from `motion/react`.