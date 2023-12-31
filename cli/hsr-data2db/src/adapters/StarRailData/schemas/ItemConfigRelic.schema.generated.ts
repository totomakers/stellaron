import * as z from 'zod'

export const ItemTypeSchema = z.enum(['Relic'])
export type ItemType = z.infer<typeof ItemTypeSchema>

export const RaritySchema = z.enum([
  'NotNormal',
  'Rare',
  'SuperRare',
  'VeryRare',
])
export type Rarity = z.infer<typeof RaritySchema>

export const SellTypeSchema = z.enum(['Sell'])
export type SellType = z.infer<typeof SellTypeSchema>

export const ReturnItemIdListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
})
export type ReturnItemIdList = z.infer<typeof ReturnItemIdListSchema>

export const ItemSchema = z.object({
  Hash: z.number(),
})
export type Item = z.infer<typeof ItemSchema>

export const ItemConfigRelicValueSchema = z.object({
  ID: z.number(),
  ItemMainType: ItemTypeSchema,
  ItemSubType: ItemTypeSchema,
  InventoryDisplayTag: z.number(),
  Rarity: RaritySchema,
  isVisible: z.boolean(),
  ItemName: ItemSchema,
  ItemDesc: ItemSchema,
  ItemBGDesc: ItemSchema,
  ItemIconPath: z.string(),
  ItemFigureIconPath: z.string(),
  ItemCurrencyIconPath: z.string(),
  ItemAvatarIconPath: z.string(),
  PileLimit: z.number(),
  CustomDataList: z.array(z.any()),
  IsSellable: z.boolean(),
  ReturnItemIDList: z.array(ReturnItemIdListSchema),
  SellType: SellTypeSchema,
})
export type ItemConfigRelicValue = z.infer<typeof ItemConfigRelicValueSchema>
