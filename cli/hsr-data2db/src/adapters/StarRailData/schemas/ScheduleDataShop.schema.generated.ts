import * as z from "zod";

export const ScheduleDataShopValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataShopValue = z.infer<typeof ScheduleDataShopValueSchema>;
