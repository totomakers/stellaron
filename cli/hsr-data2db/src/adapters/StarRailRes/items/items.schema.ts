import z from 'zod'

export const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  sub_type: z.string(),
  rarity: z.number(),
  icon: z.string(),
})
