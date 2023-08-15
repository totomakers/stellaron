import * as z from "zod";

export const PamAnchorValueSchema = z.object({
  ID: z.number(),
  AnchorName: z.string(),
  PamPlaceType: z.string(),
});
export type PamAnchorValue = z.infer<typeof PamAnchorValueSchema>;
