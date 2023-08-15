import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const CityShopConfigValueSchema = z.object({
  ShopID: z.number(),
  RewardListGroupID: z.number(),
  ItemID: z.number(),
  MaxLevel: z.number(),
  WorldID: z.number(),
  WorldImgPath: z.string(),
  Name: NameSchema,
  HintOverNum: z.number(),
})
export type CityShopConfigValue = z.infer<typeof CityShopConfigValueSchema>
