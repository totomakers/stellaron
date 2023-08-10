import * as z from "zod";

export const ScheduleDataActivityPanelValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataActivityPanelValue = z.infer<
  typeof ScheduleDataActivityPanelValueSchema
>;
