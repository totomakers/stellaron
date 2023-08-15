import * as z from 'zod'

export const DescOsSchema = z.object({
  Hash: z.number(),
})
export type DescOs = z.infer<typeof DescOsSchema>

export const IntroDataValueSchema = z.object({
  ID: z.number(),
  Title: z.string(),
  Desc: z.string(),
  Desc_Os: DescOsSchema,
})
export type IntroDataValue = z.infer<typeof IntroDataValueSchema>
