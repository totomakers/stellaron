import * as z from 'zod'

export const DescSchema = z.object({
  Hash: z.number(),
})
export type Desc = z.infer<typeof DescSchema>

export const StaminaItemListValueSchema = z.object({
  ItemID: z.number(),
  IsAlwaysShown: z.union([z.boolean(), z.null()]).optional(),
  SortWeight: z.number(),
  Desc: DescSchema,
})
export type StaminaItemListValue = z.infer<typeof StaminaItemListValueSchema>
