import * as z from "zod";

export const SilverWolfQuestConfigValueSchema = z.object({
  QuestID: z.number(),
  IconPath: z.string(),
  FigurePath: z.string(),
  RaidID: z.union([z.number(), z.null()]).optional(),
});
export type SilverWolfQuestConfigValue = z.infer<
  typeof SilverWolfQuestConfigValueSchema
>;
