import * as z from 'zod'

export const DailyActiveConfigValueSchema = z.object({
  WorldLevel: z.number(),
  Level: z.number(),
  DailyActivePoint: z.number(),
  DailyActiveReward: z.number(),
})
export type DailyActiveConfigValue = z.infer<
  typeof DailyActiveConfigValueSchema
>
