import * as z from 'zod'

export const SpecialModeValueSchema = z.object({
  SpecialModeID: z.number(),
  Title: z.string(),
  Desc01: z.string(),
  Desc02: z.string(),
  Desc03: z.string(),
  IsUImode: z.union([z.boolean(), z.null()]).optional(),
  PuzzleType: z.union([z.number(), z.null()]).optional(),
})
export type SpecialModeValue = z.infer<typeof SpecialModeValueSchema>
