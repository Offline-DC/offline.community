# Month Offline — Project Context

## What this is
A static website for the Month Offline project: an info site, a directory of independently-organized local cohorts, and a DIY guide for starting a new cohort.

## Status
Greenfield project — nothing has been created yet. This file applies from the very first session.

## Stack
- Astro, static output
- Page content (the cohort directory) is sourced from a Google Sheet via the Sheets API, fetched at **build time**, not client-side
- Plain CSS — no Tailwind or other CSS framework unless I explicitly ask for one
- No JS framework (React/Vue/etc.) — stick to Astro's built-in templating unless a specific piece of UI genuinely needs client-side interactivity
- Deployment (Netlify) and the Sheets → build-hook automation are **not** part of this phase. Get the site running locally first. Don't set these up unless I ask.

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
One row per cohort. Columns:
- City
- State
- Organizer name(s)
- Sign-up form link
- Start date

A non-technical teammate edits this sheet directly to add or update cohorts — no admin UI needed on the site itself.

## Commands
(Standard Astro scripts — confirm these against package.json once the project actually exists)
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Data source URL
The cohort data is published from Google Sheets as a CSV (File → Share → Publish to web → CSV). The resulting URL lives in `.env` as `SHEET_CSV_URL` — read it via `import.meta.env.SHEET_CSV_URL`, don't hardcode it or ask me to paste it into the conversation.

## Workflow
- No git repo yet. Don't run git commands or assume version control is set up — I'll add this to GitHub myself once the project is in a state I'm happy with. Feel free to flag if it'd be a good point to start tracking changes, but don't set it up unilaterally.
- Any credentials for the Google Sheets API go in `.env`, never hardcoded directly in source files. Add `.env` to `.gitignore` from the start, in case I forget once git is set up.
