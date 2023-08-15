import * as z from 'zod'

export const ScheduleDataShopValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataShopValue = z.infer<typeof ScheduleDataShopValueSchema>
