import * as z from 'zod'

export const ScheduleDataMissionValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataMissionValue = z.infer<
  typeof ScheduleDataMissionValueSchema
>
