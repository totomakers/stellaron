import * as z from 'zod'

export const ItemHintSpecialValueSchema = z.object({
  JCLJAKNLAKF: z.number(),
  BDJDAGPDCJM: z.union([z.boolean(), z.null()]).optional(),
})
export type ItemHintSpecialValue = z.infer<typeof ItemHintSpecialValueSchema>
