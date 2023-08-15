import * as z from 'zod'

export const NounDescSchema = z.object({
  Hash: z.number(),
})
export type NounDesc = z.infer<typeof NounDescSchema>

export const NounAtlasValueSchema = z.object({
  ID: z.number(),
  Type: z.number(),
  NounTitle: NounDescSchema,
  NounDesc: NounDescSchema,
  RelatedTerms: z.array(z.number()),
  IsIntroPage: z.union([z.boolean(), z.null()]).optional(),
  UnlockDesc: NounDescSchema,
  SortID: z.union([z.number(), z.null()]).optional(),
})
export type NounAtlasValue = z.infer<typeof NounAtlasValueSchema>
