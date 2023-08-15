import * as z from 'zod'

export const StanceLevelEffectClassSchema = z.object({
  Value: z.number(),
})
export type StanceLevelEffectClass = z.infer<
  typeof StanceLevelEffectClassSchema
>

export const StanceLevelEffectValueSchema = z.object({
  ID: z.number(),
  LevelDifference: z.union([z.number(), z.null()]).optional(),
  StanceLevelEffect: StanceLevelEffectClassSchema,
})
export type StanceLevelEffectValue = z.infer<
  typeof StanceLevelEffectValueSchema
>
