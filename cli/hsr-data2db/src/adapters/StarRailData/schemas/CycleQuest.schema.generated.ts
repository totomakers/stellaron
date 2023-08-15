import * as z from "zod";

export const CycleQuestValueSchema = z.object({
  CycleID: z.number(),
  QuestList: z.array(z.number()),
  MinLevel: z.number(),
  MaxLevel: z.number(),
  Cycledays: z.number(),
  WeekDayList: z.array(z.number()),
  ScheduleDataID: z.union([z.number(), z.null()]).optional(),
  ActivityModuleID: z.union([z.number(), z.null()]).optional(),
  FinishedTimes: z.union([z.number(), z.null()]).optional(),
});
export type CycleQuestValue = z.infer<typeof CycleQuestValueSchema>;
