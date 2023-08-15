import * as z from 'zod'

export const ScheduleDataRogueValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataRogueValue = z.infer<
  typeof ScheduleDataRogueValueSchema
>
