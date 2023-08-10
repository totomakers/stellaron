import * as z from "zod";

export const UnlockTypeSchema = z.enum([
  "AutoUnlock",
  "FinishMission",
  "FinishQuest",
  "ManualUnlock",
]);
export type UnlockType = z.infer<typeof UnlockTypeSchema>;

export const QuestSchema = z.object({
  Hash: z.number(),
});
export type Quest = z.infer<typeof QuestSchema>;

export const QuestDatumSchema = z.object({
  QuestID: z.number(),
  QuestType: z.number(),
  QuestTitle: QuestSchema,
  QuestDisplay: QuestSchema,
  ImagePath: z.string(),
  UnlockType: UnlockTypeSchema,
  UnlockParamList: z.array(z.number()),
  RewardID: z.number(),
  FinishWayID: z.number(),
  GotoID: z.union([z.number(), z.null()]).optional(),
});
export type QuestDatum = z.infer<typeof QuestDatumSchema>;
