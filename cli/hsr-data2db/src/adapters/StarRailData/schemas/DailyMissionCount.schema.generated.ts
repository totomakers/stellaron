import * as z from "zod";

export const The1Schema = z.object({
  ID: z.number(),
  DailyMissionType: z.number(),
  DailyCount: z.number(),
});
export type The1 = z.infer<typeof The1Schema>;

export const DailyMissionCountSchema = z.object({
  "1": The1Schema,
});
export type DailyMissionCount = z.infer<typeof DailyMissionCountSchema>;
