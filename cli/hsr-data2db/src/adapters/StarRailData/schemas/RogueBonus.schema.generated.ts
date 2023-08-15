import * as z from 'zod'

export const BonusSchema = z.object({
  Hash: z.number(),
})
export type Bonus = z.infer<typeof BonusSchema>

export const RogueBonusValueSchema = z.object({
  BonusID: z.number(),
  BonusEvent: z.number(),
  BonusTitle: BonusSchema,
  BonusDesc: BonusSchema,
  BonusTag: BonusSchema,
  BonusIcon: z.string(),
})
export type RogueBonusValue = z.infer<typeof RogueBonusValueSchema>
