import type { Point2D } from "./types";

export const cn = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

export function distance({ a, b }: { a: Point2D; b: Point2D }) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}
