import * as z from 'zod'

export const ItemMainTypeSchema = z.enum(['Usable'])
export type ItemMainType = z.infer<typeof ItemMainTypeSchema>

export const ItemSubTypeSchema = z.enum(['Book'])
export type ItemSubType = z.infer<typeof ItemSubTypeSchema>

export const RaritySchema = z.enum(['Normal'])
export type Rarity = z.infer<typeof RaritySchema>

export const ItemSchema = z.object({
  Hash: z.number(),
})
export type Item = z.infer<typeof ItemSchema>

export const ItemConfigBookValueSchema = z.object({
  ID: z.number(),
  ItemMainType: ItemMainTypeSchema,
  ItemSubType: ItemSubTypeSchema,
  InventoryDisplayTag: z.number(),
  Rarity: RaritySchema,
  PurposeType: z.number(),
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
  ReturnItemIDList: z.array(z.any()),
})
export type ItemConfigBookValue = z.infer<typeof ItemConfigBookValueSchema>
