import * as z from 'zod'

export const NormalModeValueSchema = z.object({
  NormalModeID: z.number(),
  Title: z.string(),
  Desc01: z.string(),
  Desc02: z.string(),
  Desc03: z.string(),
})
export type NormalModeValue = z.infer<typeof NormalModeValueSchema>
