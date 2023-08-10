import * as z from "zod";

export const FantasticStoryBuffIdValueSchema = z.object({
  BuffID: z.number(),
  BuffSlot: z.number(),
  UnlockChapterID: z.number(),
  AvailableBattleID: z.array(z.number()),
  ClientShowAvailableTips: z.union([z.boolean(), z.null()]).optional(),
  ActivityModuleID: z.number(),
  MazebuffID: z.number(),
});
export type FantasticStoryBuffIdValue = z.infer<
  typeof FantasticStoryBuffIdValueSchema
>;
