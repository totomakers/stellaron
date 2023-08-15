import * as z from "zod";

export const ScheduleDataBattlePassValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataBattlePassValue = z.infer<
  typeof ScheduleDataBattlePassValueSchema
>;
