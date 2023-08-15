import * as z from 'zod'

export const ScheduleDataChallengeMazeValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataChallengeMazeValue = z.infer<
  typeof ScheduleDataChallengeMazeValueSchema
>
