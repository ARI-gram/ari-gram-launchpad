import type { CSSProperties } from "react";

export type RevealKind = "up" | "fade" | "zoom" | "line";

/**
 * Marks an element to animate in when it scrolls into view.
 * Usage: <div {...reveal(120)}>  (delay in ms, for staggering siblings)
 */
export const reveal = (delay = 0, kind: RevealKind = "up") => ({
  "data-reveal": kind,
  style: { "--d": `${delay}ms` } as CSSProperties,
});
