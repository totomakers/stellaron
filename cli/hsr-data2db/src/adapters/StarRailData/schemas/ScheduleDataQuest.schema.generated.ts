import * as z from 'zod'

export const ScheduleDataQuestValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataQuestValue = z.infer<
  typeof ScheduleDataQuestValueSchema
>
