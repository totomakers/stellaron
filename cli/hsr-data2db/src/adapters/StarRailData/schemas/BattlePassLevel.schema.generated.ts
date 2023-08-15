import * as z from 'zod'

export const The1Schema = z.object({
  GroupID: z.number(),
  Level: z.number(),
  FreeReward: z.number(),
  PremiumFixedReward1: z.number(),
  PremiumFixedReward2: z.union([z.number(), z.null()]).optional(),
  SpeicalPoint: z.union([z.boolean(), z.null()]).optional(),
  PremiumOptional: z.union([z.number(), z.null()]).optional(),
})
export type The1 = z.infer<typeof The1Schema>

export const BattlePassLevelSchema = z.object({
  '1': z.record(z.string(), The1Schema),
})
export type BattlePassLevel = z.infer<typeof BattlePassLevelSchema>
