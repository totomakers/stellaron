import * as z from 'zod'

export const The1Schema = z.object({
  ID: z.number(),
  Order: z.number(),
  Type: z.number(),
  ImagePath: z.string(),
  NameText: z.string(),
})
export type The1 = z.infer<typeof The1Schema>

export const RecommendConfigSchema = z.object({
  '1': The1Schema,
})
export type RecommendConfig = z.infer<typeof RecommendConfigSchema>
