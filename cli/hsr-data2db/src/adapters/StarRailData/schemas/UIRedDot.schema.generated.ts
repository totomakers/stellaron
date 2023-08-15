import * as z from 'zod'

export const UiRedDotValueSchema = z.object({
  RedDot: z.string(),
  RedDotChildren: z.array(z.string()),
  Type: z.union([z.number(), z.null()]).optional(),
  Weight: z.array(z.number()),
  UnlockID: z.union([z.number(), z.null()]).optional(),
})
export type UiRedDotValue = z.infer<typeof UiRedDotValueSchema>
