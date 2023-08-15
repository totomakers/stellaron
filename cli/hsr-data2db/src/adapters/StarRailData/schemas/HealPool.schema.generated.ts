import * as z from 'zod'

export const HealPoolValueSchema = z.object({
  PlayerLevel: z.number(),
  MaxHealPool: z.number(),
  RecoverTime: z.number(),
})
export type HealPoolValue = z.infer<typeof HealPoolValueSchema>
