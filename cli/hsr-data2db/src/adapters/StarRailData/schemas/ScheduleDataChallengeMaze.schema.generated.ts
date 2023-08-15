import * as z from "zod";

export const ScheduleDataChallengeMazeValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.string(),
  EndTime: z.string(),
});
export type ScheduleDataChallengeMazeValue = z.infer<
  typeof ScheduleDataChallengeMazeValueSchema
>;
