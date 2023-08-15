import * as z from 'zod'

export const GroupTypeSchema = z.enum(['Rotate'])
export type GroupType = z.infer<typeof GroupTypeSchema>

export const ShopItemGroupConfigValueSchema = z.object({
  GroupID: z.number(),
  ItemID: z.number(),
  GroupType: GroupTypeSchema,
  RotateOrder: z.number(),
})
export type ShopItemGroupConfigValue = z.infer<
  typeof ShopItemGroupConfigValueSchema
>
