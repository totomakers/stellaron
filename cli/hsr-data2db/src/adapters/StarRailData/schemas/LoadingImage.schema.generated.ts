import * as z from 'zod'

export const LoadingImageValueSchema = z.object({
  ID: z.number(),
  MinLevel: z.number(),
  MaxLevel: z.number(),
  ImagePath: z.string(),
})
export type LoadingImageValue = z.infer<typeof LoadingImageValueSchema>
