// cohorts.js — load the cohort directory from the published Google Sheet.
//
// The sheet is published as a CSV (File → Share → Publish to web → CSV), and
// its URL lives in .env as SHEET_CSV_URL. This runs at BUILD time (it's called
// from the Home page's frontmatter), so the cohort data is baked into the
// static HTML — the browser never fetches the sheet.

import Papa from 'papaparse';

// The sheet has one row per cohort. Header names are normalized to UPPERCASE
// (see transformHeader below) so a stray capitalization or space in the sheet
// won't silently blank out a column. Current headers in the sheet:
//   CITY | STATE | ORGANIZER | FORM | MONTH
const COLUMNS = {
  city: 'CITY',
  state: 'STATE',
  organizer: 'ORGANIZER',
  signupUrl: 'FORM',
  startDate: 'MONTH',
};

/**
 * Fetch + parse the sheet, returning an array of cohort objects shaped for
 * the CohortRow component:
 *   { location, date, organizer, href }
 *
 * If SHEET_CSV_URL isn't set yet, returns an empty array (and warns), so the
 * site still builds before the sheet is wired up.
 */
export async function getCohorts() {
  const url = import.meta.env.SHEET_CSV_URL;

  if (!url) {
    console.warn('[cohorts] SHEET_CSV_URL is not set in .env — no live cohort data loaded.');
    return [];
  }

  const res = await fetch(url);
  if (!res.ok) {
    // Fail the build loudly rather than shipping a page with a silently empty
    // directory — a bad URL or unpublished sheet is something we want to catch.
    throw new Error(`[cohorts] Could not fetch the sheet CSV (${res.status} ${res.statusText}). Check SHEET_CSV_URL.`);
  }

  const csv = await res.text();

  // header: true → use the first row as keys; skipEmptyLines → ignore blank rows;
  // transformHeader → normalize keys to UPPERCASE so matching is case/space-tolerant.
  const { data, errors } = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim().toUpperCase(),
  });
  if (errors.length) {
    console.warn('[cohorts] CSV parse warnings:', errors);
  }

  return data
    .map((row) => {
      const city = (row[COLUMNS.city] || '').trim();
      const state = (row[COLUMNS.state] || '').trim();
      return {
        // "City, State" — but tolerate a missing state.
        location: [city, state].filter(Boolean).join(', '),
        date: (row[COLUMNS.startDate] || '').trim(),
        organizer: (row[COLUMNS.organizer] || '').trim(),
        href: (row[COLUMNS.signupUrl] || '').trim() || '#',
      };
    })
    // Drop any row without at least a city (e.g. stray blank rows).
    .filter((cohort) => cohort.location);
}
