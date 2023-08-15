import * as z from "zod";

export const DailyQuestValueSchema = z.object({
  DailyID: z.number(),
  QuestList: z.array(z.number()),
  MinLevel: z.number(),
  MaxLevel: z.number(),
});
export type DailyQuestValue = z.infer<typeof DailyQuestValueSchema>;
