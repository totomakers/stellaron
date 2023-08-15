import * as z from 'zod'

export const ScheduleDataBattlePassValueSchema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type ScheduleDataBattlePassValue = z.infer<
  typeof ScheduleDataBattlePassValueSchema
>
