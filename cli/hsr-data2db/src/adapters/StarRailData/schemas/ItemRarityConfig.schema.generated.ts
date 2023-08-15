import * as z from 'zod'

export const NormalSchema = z.object({
  Rarity: z.string(),
  AvatarShowBgPath: z.string(),
  ItemShowBgPath: z.string(),
  FrameItemRarityPath: z.string(),
  FrameIconRarityPath: z.string(),
  FrameItemRarityBgPath: z.string(),
  FrameItemRarityColor: z.string(),
  LineItemRarityColor: z.string(),
  ItemRarityStarImgPath: z.string(),
})
export type Normal = z.infer<typeof NormalSchema>

export const ItemRarityConfigSchema = z.object({
  Normal: NormalSchema,
  NotNormal: NormalSchema,
  Rare: NormalSchema,
  VeryRare: NormalSchema,
  SuperRare: NormalSchema,
})
export type ItemRarityConfig = z.infer<typeof ItemRarityConfigSchema>
