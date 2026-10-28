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

## Planned: Program Application Form

The **Get started** navigation action is planned to lead to a dedicated
application page rather than the programs section or a third-party form. The
page will let prospective participants share what program or service they are
interested in and what they hope to do.

The planned submission flow is:

1. Collect only the details needed to follow up: contact information, program
   or service of interest, goals, preferred timing or delivery format, and
   optional notes.
2. Submit the form to a secure backend that validates the input and stores the
   application in a Supabase database.
3. Notify the administrator by email when a new application is received, using
   an email service such as Resend. The database is the durable record; email
   serves as a notification.

Implementation requirements:

- Keep database and email-service credentials on the server; never expose them
  in the browser.
- Add input validation, spam protection, and a clear privacy notice.
- Consider a separate secure administrator dashboard for reviewing and
  managing applications as a later enhancement.

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