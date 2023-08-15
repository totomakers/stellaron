import * as z from 'zod'

export const NormalSchema = z.object({
  GachaType: z.string(),
  CeilingType: z.string(),
  CeilingNum: z.number(),
  CeilingItemList: z.array(z.number()),
})
export type Normal = z.infer<typeof NormalSchema>

export const GachaCeilingSchema = z.object({
  Normal: NormalSchema,
})
export type GachaCeiling = z.infer<typeof GachaCeilingSchema>
