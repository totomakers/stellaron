import * as z from "zod";

export const ScheduleDataRogueValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataRogueValue = z.infer<
  typeof ScheduleDataRogueValueSchema
>;
