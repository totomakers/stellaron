import * as z from 'zod'

export const CurrencyDisplayConfigValueSchema = z.object({
  CurrencyID: z.number(),
  GotoID: z.union([z.number(), z.null()]).optional(),
})
export type CurrencyDisplayConfigValue = z.infer<
  typeof CurrencyDisplayConfigValueSchema
>
