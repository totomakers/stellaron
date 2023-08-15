import * as z from 'zod'

export const LimitType1Schema = z.enum([
  'HasNoRefreshGoods',
  'Level',
  'PreGoods',
])
export type LimitType1 = z.infer<typeof LimitType1Schema>

export const OnShelfType1Schema = z.enum(['MainMission'])
export type OnShelfType1 = z.infer<typeof OnShelfType1Schema>

export const ShopGoodsConfigValueSchema = z.object({
  GoodsID: z.number(),
  ItemID: z.union([z.number(), z.null()]).optional(),
  ItemCount: z.number(),
  CurrencyList: z.array(z.number()),
  CurrencyCostList: z.array(z.number()),
  GoodsSortID: z.number(),
  LimitValue1List: z.array(z.number()),
  LimitValue2List: z.array(z.any()),
  OnShelfValue1List: z.array(z.number()),
  ShopID: z.number(),
  ScheduleDataID: z.number(),
  ItemGroupID: z.union([z.number(), z.null()]).optional(),
  Level: z.union([z.number(), z.null()]).optional(),
  LimitTimes: z.union([z.number(), z.null()]).optional(),
  RefreshType: z.union([z.number(), z.null()]).optional(),
  Rank: z.union([z.number(), z.null()]).optional(),
  IsOnSale: z.union([z.boolean(), z.null()]).optional(),
  TagType: z.union([z.number(), z.null()]).optional(),
  TagParam: z.union([z.number(), z.null()]).optional(),
  LimitType1: z.union([LimitType1Schema, z.null()]).optional(),
  OnShelfType1: z.union([OnShelfType1Schema, z.null()]).optional(),
  IsLimitedTimePurchase: z.union([z.boolean(), z.null()]).optional(),
})
export type ShopGoodsConfigValue = z.infer<typeof ShopGoodsConfigValueSchema>
