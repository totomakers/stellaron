import * as z from "zod";

export const ScheduleDataMissionValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataMissionValue = z.infer<
  typeof ScheduleDataMissionValueSchema
>;
