import * as z from "zod";

export const MainMissionScheduleValueSchema = z.object({
  MainMissionID: z.number(),
  HideRemainTime: z.union([z.boolean(), z.null()]).optional(),
  ActivityModuleID: z.union([z.number(), z.null()]).optional(),
  ScheduleDataID: z.union([z.number(), z.null()]).optional(),
});
export type MainMissionScheduleValue = z.infer<
  typeof MainMissionScheduleValueSchema
>;
