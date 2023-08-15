import * as z from 'zod'

export const ItemIconPathSchema = z.enum([
  'SpriteOutput/ItemIcon/11001.png',
  'SpriteOutput/ItemIcon/11003.png',
  'SpriteOutput/ItemIcon/18001.png',
  'SpriteOutput/ItemIcon/18003.png',
])
export type ItemIconPath = z.infer<typeof ItemIconPathSchema>

export const ItemMainTypeSchema = z.enum(['Material'])
export type ItemMainType = z.infer<typeof ItemMainTypeSchema>

export const ItemSubTypeSchema = z.enum(['Eidolon'])
export type ItemSubType = z.infer<typeof ItemSubTypeSchema>

export const RaritySchema = z.enum(['SuperRare', 'VeryRare'])
export type Rarity = z.infer<typeof RaritySchema>

export const ItemSchema = z.object({
  Hash: z.number(),
})
export type Item = z.infer<typeof ItemSchema>

export const ItemConfigAvatarRankValueSchema = z.object({
  ID: z.number(),
  ItemMainType: ItemMainTypeSchema,
  ItemSubType: ItemSubTypeSchema,
  InventoryDisplayTag: z.number(),
  Rarity: RaritySchema,
  ItemName: ItemSchema,
  ItemDesc: ItemSchema,
  ItemBGDesc: ItemSchema,
  ItemIconPath: ItemIconPathSchema,
  ItemFigureIconPath: ItemIconPathSchema,
  ItemCurrencyIconPath: ItemIconPathSchema,
  ItemAvatarIconPath: z.string(),
  PileLimit: z.number(),
  CustomDataList: z.array(z.any()),
  ReturnItemIDList: z.array(z.any()),
})
export type ItemConfigAvatarRankValue = z.infer<
  typeof ItemConfigAvatarRankValueSchema
>
