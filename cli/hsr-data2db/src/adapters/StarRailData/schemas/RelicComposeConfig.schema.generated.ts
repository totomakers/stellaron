import * as z from 'zod'

export const MaterialCostSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
})
export type MaterialCost = z.infer<typeof MaterialCostSchema>

export const RelicComposeConfigValueSchema = z.object({
  ID: z.number(),
  ItemID: z.number(),
  MaterialCost: z.array(MaterialCostSchema),
  CoinCost: z.number(),
  Type: z.number(),
  Order: z.number(),
  WorldLevelRequire: z.number(),
})
export type RelicComposeConfigValue = z.infer<
  typeof RelicComposeConfigValueSchema
>
