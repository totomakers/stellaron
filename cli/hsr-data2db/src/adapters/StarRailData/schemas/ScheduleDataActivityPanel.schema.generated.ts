import * as z from 'zod'

export const ScheduleDataActivityPanelValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataActivityPanelValue = z.infer<
  typeof ScheduleDataActivityPanelValueSchema
>
