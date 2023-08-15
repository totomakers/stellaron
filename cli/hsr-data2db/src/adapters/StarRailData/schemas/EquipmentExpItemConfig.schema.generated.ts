import * as z from 'zod'

export const EquipmentExpItemConfigValueSchema = z.object({
  ItemID: z.number(),
  ExpProvide: z.number(),
  CoinCost: z.number(),
})
export type EquipmentExpItemConfigValue = z.infer<
  typeof EquipmentExpItemConfigValueSchema
>
