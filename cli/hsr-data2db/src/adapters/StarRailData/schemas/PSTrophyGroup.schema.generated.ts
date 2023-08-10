import * as z from "zod";

export const TrophyGroupSchema = z.object({
  Hash: z.number(),
});
export type TrophyGroup = z.infer<typeof TrophyGroupSchema>;

export const The10000Schema = z.object({
  PSTrophyGroup: z.number(),
  TrophyGroup: TrophyGroupSchema,
});
export type The10000 = z.infer<typeof The10000Schema>;

export const PsTrophyGroupSchema = z.object({
  "10000": The10000Schema,
});
export type PsTrophyGroup = z.infer<typeof PsTrophyGroupSchema>;
