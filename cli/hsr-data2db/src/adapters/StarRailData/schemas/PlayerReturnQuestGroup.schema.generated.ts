import * as z from "zod";

export const PlayerReturnQuestGroupValueSchema = z.object({
  GroupID: z.number(),
  UnlockTime: z.union([z.number(), z.null()]).optional(),
});
export type PlayerReturnQuestGroupValue = z.infer<
  typeof PlayerReturnQuestGroupValueSchema
>;
