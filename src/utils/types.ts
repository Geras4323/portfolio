import { type ReactNode } from "react";
import { z } from "zod";

export type WithChildren = {
  children?: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export const point2DSchema = z.object({
  x: z.number(),
  y: z.number(),
});
export type Point2D = z.infer<typeof point2DSchema>;
