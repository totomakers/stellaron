import * as z from 'zod'

export const DisplayItemListSchema = z.object({
  ItemID: z.number(),
})
export type DisplayItemList = z.infer<typeof DisplayItemListSchema>

export const MonsterDropValueSchema = z.object({
  MonsterTemplateID: z.number(),
  WorldLevel: z.number(),
  AvatarExpReward: z.union([z.number(), z.null()]).optional(),
  DisplayItemList: z.array(DisplayItemListSchema),
})
export type MonsterDropValue = z.infer<typeof MonsterDropValueSchema>
