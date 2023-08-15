import * as z from 'zod'

export const PriceSchema = z.object({
  '1': z.number(),
})
export type Price = z.infer<typeof PriceSchema>

export const StaminaSaleConfigValueSchema = z.object({
  Times: z.number(),
  Price: PriceSchema,
  ToStamina: z.number(),
})
export type StaminaSaleConfigValue = z.infer<
  typeof StaminaSaleConfigValueSchema
>
