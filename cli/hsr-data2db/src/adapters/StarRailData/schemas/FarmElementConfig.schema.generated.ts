import * as z from 'zod'

export const DamageTypeSchema = z.enum([
  'Fire',
  'Ice',
  'Imaginary',
  'Physical',
  'Quantum',
  'Thunder',
  'Wind',
])
export type DamageType = z.infer<typeof DamageTypeSchema>

export const BuffDescSchema = z.object({
  Hash: z.number(),
})
export type BuffDesc = z.infer<typeof BuffDescSchema>

export const FarmElementConfigValueSchema = z.object({
  ID: z.number(),
  WorldLevel: z.number(),
  MappingInfoID: z.number(),
  DropList: z.array(z.number()),
  StaminaCost: z.number(),
  DamageType: z.array(DamageTypeSchema),
  BuffDesc: BuffDescSchema,
  ParamList: z.array(z.any()),
  AutoObtainDamageType: z.union([z.boolean(), z.null()]).optional(),
})
export type FarmElementConfigValue = z.infer<
  typeof FarmElementConfigValueSchema
>
