import * as z from 'zod'

export const ShowTypeSchema = z.enum(['ItemRecycleShow_Time'])
export type ShowType = z.infer<typeof ShowTypeSchema>

export const TipsSchema = z.object({
  Hash: z.number(),
})
export type Tips = z.infer<typeof TipsSchema>

export const ItemRecycleValueSchema = z.object({
  ItemID: z.number(),
  RecycleTime: z.string(),
  Tips: TipsSchema,
  ShowType: ShowTypeSchema,
  ShowTimeType: z.union([z.boolean(), z.null()]).optional(),
})
export type ItemRecycleValue = z.infer<typeof ItemRecycleValueSchema>
