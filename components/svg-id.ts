import { useId } from "react";

/**
 * Unique, CSS-safe id prefix per SVG instance. Shared ids break when the first
 * definition sits in a display:none subtree (e.g. the desktop copy on mobile):
 * Chrome then drops every element that references it.
 */
export function useUid(): string {
  return "u" + useId().replace(/[^a-zA-Z0-9]/g, "");
}
