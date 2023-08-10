import * as z from "zod";

export const TextSchema = z.object({
  Hash: z.number(),
});
export type Text = z.infer<typeof TextSchema>;

export const ASchema = z.object({
  ID: z.string(),
  Text: TextSchema,
  CommonRankIconPath: z.string(),
});
export type A = z.infer<typeof ASchema>;

export const ActivityRankIconSchema = z.object({
  S: ASchema,
  A: ASchema,
  B: ASchema,
  C: ASchema,
});
export type ActivityRankIcon = z.infer<typeof ActivityRankIconSchema>;
