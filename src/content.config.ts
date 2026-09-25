// content.config.ts — defines the shape of every page's copy file under
// src/content/. Astro validates each Markdown file's frontmatter against
// the matching schema at build time: a missing or mistyped field fails the
// build with a specific error, instead of silently shipping blank text.
//
// Each page gets its own collection (a folder with one file in it) because
// each page's copy has a genuinely different shape — there's no single
// schema that fits Home and the DIY subpages equally well.
//
// To add a new page: create `src/content/<name>/<file>.md`, add a
// `defineCollection` below for it, export it, and read it in that page's
// frontmatter the same way the others do (see e.g. src/pages/index.astro).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A snippet of body copy that may contain inline HTML (<u>, <em>, <a href>)
// written directly by hand in the Markdown file — see the "Formatting"
// note in each page's frontmatter comments for what's supported.
const htmlString = z.string();

const home = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/home' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    intro: z.object({
      tagline: z.string(),
      headline: z.string(),
      coda: z.string(),
      paragraph: htmlString,
    }),
    press: z.object({
      sectionLabel: z.string(),
      items: z.array(z.object({ headline: z.string(), outlet: z.string(), href: z.string() })),
    }),
    howItWorks: z.object({
      sectionLabel: z.string(),
      intro: htmlString,
      groups: z.array(z.object({ heading: z.string(), bullets: z.array(htmlString) })),
    }),
    locations: z.object({
      sectionLabel: z.string(),
      blurb: htmlString,
      emptyState: z.string(),
    }),
    ctaDiy: z.object({ heading: z.string(), blurb: z.string() }),
    ctaNotify: z.object({ heading: z.string(), blurb: z.string() }),
  }),
});

const diyIndex = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/diy-index' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    guideLinkLabels: z.array(z.string()).length(5),
    letter: z.object({
      salutation: z.string(),
      paragraph1: htmlString,
      paragraph2: htmlString,
      paragraph3: htmlString,
      paragraph4: htmlString,
      signoff: htmlString,
    }),
    audio: z.object({ title: z.string(), byline: z.string() }),
    basicsSectionLabel: z.string(),
    basics: z.object({ intro1: htmlString, intro2: htmlString }),
    program: z.array(z.object({ title: z.string(), question: htmlString })).length(6),
    ringRingSectionLabel: z.string(),
    ringRing: z.object({ paragraph: htmlString, buttonLabel: z.string() }),
    nextLinkLabel: z.string(),
  }),
});

// The Resource Library: every resource on the site, in one list. The
// /resources page shows them all; DIY subpages pick theirs by `id` (their
// `resources` field is just a list of ids — see src/lib/resources.js).
const PHASES = ['invite', 'orient', 'meetup', 'graduate'] as const;
const resources = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    sectionLabel: z.string(),
    intro: htmlString,
    // One display label per phase, e.g. `meetup: Meetup`.
    phases: z.object({ invite: z.string(), orient: z.string(), meetup: z.string(), graduate: z.string() }),
    items: z.array(z.object({
      id: z.string(),
      phase: z.enum(PHASES),
      // Optional: missing means "not in the Field Kit".
      fieldKit: z.boolean().default(false),
      title: z.string(),
      description: z.string(),
      href: z.string(),
    })),
  }),
});

const diyGatherParticipants = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/diy-gather-participants' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    sectionLabel: z.string(),
    subheading1: z.string(),
    paragraph1: htmlString,
    paragraph2: htmlString,
    paragraph3: htmlString,
    paragraph4: htmlString,
    paragraph5: htmlString,
    subheading2: z.string(),
    paragraph6: htmlString,
    paragraph7: htmlString,
    paragraph8: htmlString,
    paragraph9: htmlString,
    resourcesSectionLabel: z.string(),
    resources: z.array(z.string()).length(3),
    nextLinkLabel: z.string(),
  }),
});

const diyGetDumbphones = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/diy-get-dumbphones' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    sectionLabel: z.string(),
    subheading1: z.string(),
    paragraph1: htmlString,
    paragraph2: htmlString,
    subheading2: z.string(),
    paragraph3: htmlString,
    paragraph4: htmlString,
    options: z.array(htmlString).length(3),
    paragraph5: htmlString,
    paragraph6: htmlString,
    ringRingSectionLabel: z.string(),
    ringRing: z.object({ paragraph: htmlString, buttonLabel: z.string() }),
    nextLinkLabel: z.string(),
  }),
});

const diyFacilitateMeetups = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/diy-facilitate-meetups' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    sectionLabel: z.string(),
    subheadings: z.array(z.string()).length(5),
    bringItems: z.array(htmlString).length(7),
    audioTitle: z.string(),
    segments: z.array(htmlString).length(4),
    callout: z.string(),
    resourcesSectionLabel: z.string(),
    resources: z.array(z.string()).length(7),
    nextLinkLabel: z.string(),
    paragraph1: htmlString,
    paragraph2: htmlString,
    paragraph3: htmlString,
    paragraph4: htmlString,
    paragraph5: htmlString,
    paragraph6: htmlString,
    paragraph7: htmlString,
    paragraph8: htmlString,
    paragraph9: htmlString,
    paragraph10: htmlString,
    paragraph11: htmlString,
    paragraph12: htmlString,
    paragraph13: htmlString,
  }),
});

const diyHostExhibition = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/diy-host-exhibition' }),
  schema: z.object({
    title: z.string(),
    masthead: z.string(),
    sectionLabel: z.string(),
    subheadings: z.array(z.string()).length(2),
    audio: z.object({ title: z.string(), byline: z.string() }),
    nextLinkLabel: z.string(),
    paragraph1: htmlString,
    paragraph2: htmlString,
    paragraph3: htmlString,
    paragraph4: htmlString,
    paragraph5: htmlString,
    paragraph6: htmlString,
    paragraph7: htmlString,
    paragraph8: htmlString,
    paragraph9: htmlString,
  }),
});

export const collections = {
  home,
  'diy-index': diyIndex,
  'diy-gather-participants': diyGatherParticipants,
  'diy-get-dumbphones': diyGetDumbphones,
  'diy-facilitate-meetups': diyFacilitateMeetups,
  'diy-host-exhibition': diyHostExhibition,
  resources,
};
