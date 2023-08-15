import * as z from 'zod'

export const PromotionCostListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
})
export type PromotionCostList = z.infer<typeof PromotionCostListSchema>

export const AttackAddSchema = z.object({
  Value: z.number(),
})
export type AttackAdd = z.infer<typeof AttackAddSchema>

export const AvatarPromotionConfigTrialValueSchema = z.object({
  AvatarID: z.number(),
  Promotion: z.number(),
  PromotionCostList: z.array(PromotionCostListSchema),
  MaxLevel: z.number(),
  PlayerLevelRequire: z.union([z.number(), z.null()]).optional(),
  AttackBase: AttackAddSchema,
  AttackAdd: AttackAddSchema,
  DefenceBase: AttackAddSchema,
  DefenceAdd: AttackAddSchema,
  HPBase: AttackAddSchema,
  HPAdd: AttackAddSchema,
  SpeedBase: AttackAddSchema,
  CriticalChance: AttackAddSchema,
  CriticalDamage: AttackAddSchema,
  BaseAggro: AttackAddSchema,
  WorldLevelRequire: z.union([z.number(), z.null()]).optional(),
})
export type AvatarPromotionConfigTrialValue = z.infer<
  typeof AvatarPromotionConfigTrialValueSchema
>
