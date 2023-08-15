import * as z from 'zod'

export const DailyMissionRandomDataSchema = z.object({})
export type DailyMissionRandomData = z.infer<
  typeof DailyMissionRandomDataSchema
>
