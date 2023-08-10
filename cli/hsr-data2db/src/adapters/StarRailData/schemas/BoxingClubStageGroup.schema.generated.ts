import * as z from "zod";

export const BoxingClubStageGroupValueSchema = z.object({
  StageGroupID: z.number(),
  EventIDList: z.array(z.number()),
  Weight: z.union([z.number(), z.null()]).optional(),
  MonsterIDList: z.array(z.number()),
  DisplayEventIDList: z.array(z.number()),
  DisplayIndexList: z.array(z.number()),
});
export type BoxingClubStageGroupValue = z.infer<
  typeof BoxingClubStageGroupValueSchema
>;
