import * as z from "zod";

export const ScheduleDataQuestValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataQuestValue = z.infer<
  typeof ScheduleDataQuestValueSchema
>;
