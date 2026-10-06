/**
 * Google reviews – reserved.
 *
 * The client's Google Business Profile shows 5.0 from 42 reviews (2026-10-01).
 * Review TEXT has not been supplied, so this list is intentionally empty and
 * the reviews section renders nothing. Add verbatim reviews only from a real
 * export, with the reviewer's public display name and the review date.
 */

export interface Review {
  author: string;
  date: string; // ISO yyyy-mm-dd
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  sourceUrl?: string;
}

export const reviews: Review[] = [];
