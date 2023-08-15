import * as z from "zod";

export const BattlePassConfigValueSchema = z.object({
  ID: z.number(),
  GroupID: z.number(),
  NextID: z.union([z.number(), z.null()]).optional(),
  ScheduleDataID: z.number(),
  DailyQuestList: z.array(z.number()),
  WeekQuestList: z.array(z.number()),
  WeekOrder1: z.array(z.number()),
  WeekOrder2: z.array(z.any()),
  VersionQuestList: z.array(z.number()),
  RewardID: z.number(),
  RewardShow68: z.array(z.number()),
  RewardShow128: z.array(z.number()),
});
export type BattlePassConfigValue = z.infer<typeof BattlePassConfigValueSchema>;
