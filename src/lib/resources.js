// resources.js — look up Resource Library items by id.
//
// Every resource lives once, in src/content/resources/library.md. The DIY
// subpages don't copy titles/descriptions; their content files just list ids
// (e.g. `- flyers`), and this turns those ids back into full items at BUILD
// time, so the finished HTML is the same as if the copy were written inline.

import { getEntry } from 'astro:content';

/**
 * Returns the library items for the given ids, in the order given.
 * An unknown id stops the build with a clear error (usually a typo, or an
 * id that was renamed in library.md) instead of quietly dropping the card.
 */
export async function getResourcesByIds(ids) {
  const { data } = await getEntry('resources', 'library');
  return ids.map((id) => {
    const item = data.items.find((i) => i.id === id);
    if (!item) {
      throw new Error(`Unknown resource id "${id}" — check src/content/resources/library.md for the right id.`);
    }
    return item;
  });
}
