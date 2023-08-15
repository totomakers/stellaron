import * as z from 'zod'

export const PamSchema = z.object({
  ID: z.string(),
  OptionCount: z.number(),
})
export type Pam = z.infer<typeof PamSchema>

export const RndOptionGroupSchema = z.object({
  Pam: PamSchema,
})
export type RndOptionGroup = z.infer<typeof RndOptionGroupSchema>
