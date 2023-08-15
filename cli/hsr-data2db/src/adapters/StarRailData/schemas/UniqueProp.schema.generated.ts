import * as z from 'zod'

export const UniquePropValueSchema = z.object({
  UniqueName: z.string(),
  PropID: z.string(),
})
export type UniquePropValue = z.infer<typeof UniquePropValueSchema>
