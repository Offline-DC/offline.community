# Month Offline — Project Context

## What this is
A static website for the Month Offline project: an info site, a directory of independently-organized local cohorts, and a DIY guide for starting a new cohort.

## Status
Live in production at offline.community. No longer greenfield — treat existing pages, components, and workflow as the baseline to work from, not a starting point to design.

## Stack
- Astro, static output
- The cohort directory is sourced from a Google Sheet via the Sheets API, fetched at **build time**, not client-side
- All other page copy (Home, DIY Guide, and its 4 subpages) lives in Astro Content Collections — plain Markdown files with YAML frontmatter under `src/content/`, one file per page, schema-validated at build time by `src/content.config.ts`. Editing copy means editing those files directly (locally, or via GitHub's web editor) and pushing — there's no external CMS or API involved. Privacy Policy is the one page that's still hand-coded directly in its `.astro` file, not sourced from a content file — see that file's own header comment for why.
- Plain CSS — no Tailwind or other CSS framework unless I explicitly ask for one
- No JS framework (React/Vue/etc.) — stick to Astro's built-in templating unless a specific piece of UI genuinely needs client-side interactivity
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages from this repo (`Offline-DC/offline.community`, `main` branch). The workflow rebuilds on every push to `main`, on manual trigger from the Actions tab, and once a day on a cron schedule — the daily cron exists so a Google Sheet edit goes live even if nobody pushes code or triggers a build by hand. There's a separate Netlify staging setup in a different repo (`diy-mo`) — not this one.

## Audience / code style
I have experience with static HTML/CSS/JS but no framework or build-tool experience. Write code that stays legible at that level:
- Avoid unnecessary abstraction — prefer the obvious way to do something over the clever way
- Comment anything non-obvious, especially Astro-specific syntax or the build-time data fetching
- Explain what you're doing and why as you go. I want to understand this project, not just have it work — walk me through new concepts (frontmatter, props, the Sheets API call, etc.) when you introduce them, not just once at the start.

## Pages
- **Home**: introduction to the Month Offline project, press coverage, and an index of independently-organized cohorts (pulled from the Google Sheet), each linking out to that cohort's own external page
- **DIY Guide**: how to start Month Offline in your city if it isn't listed yet, a link to sign up for upcoming info sessions, and links to four subpages:
  - How to Gather Participants
  - How to Get Dumbphones
  - How to Facilitate Meetups
  - How to Host an Exhibition

  These four subpages are meant to be read in that order. Each one links to the next at the bottom of the page (the last one, "How to Host an Exhibition," doesn't link forward to anything).

## Data source (Google Sheet)
One row per cohort. The live sheet's column headers (matched case-insensitively
in `src/lib/cohorts.js`):
- `CITY`
- `STATE`
- `ORGANIZERS` — organizer name(s)
- `FORM` — sign-up form link
- `MONTH` — start month/date
- `STATUS` — `Upcoming` or `Past`; controls whether the cohort lists under "Month Offline locations" or "Past cohorts" on the Home page

A non-technical teammate edits this sheet directly to add or update cohorts — no admin UI needed on the site itself. New rows appear on the next build (see `getCohorts()` in `src/lib/cohorts.js`).

## Commands
(Standard Astro scripts — confirm these against package.json once the project actually exists)
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Data source URL
The cohort data is published from Google Sheets as a CSV (File → Share → Publish to web → CSV). The resulting URL lives in `.env` as `SHEET_CSV_URL` — read it via `import.meta.env.SHEET_CSV_URL`, don't hardcode it or ask me to paste it into the conversation.

## Workflow
- Git is set up and pushed to GitHub (`Offline-DC/offline.community`) — pushing to `main` triggers a production deploy (see Stack above), so treat `main` accordingly.
- Any credentials (Sheets, or future integrations) go in `.env`, never hardcoded directly in source files. `.env` is gitignored; matching secrets for the GitHub Actions build live in the repo's Actions secrets, not in code.
