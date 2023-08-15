import * as z from 'zod'

export const CocoonTypeSchema = z.enum([
  'TYPE_NORMAL',
  'TYPE_RELIC',
  'TYPE_WEEK',
])
export type CocoonType = z.infer<typeof CocoonTypeSchema>

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

export const FarmTypeSchema = z.enum(['COCOON', 'COCOON2', 'COCOON3', 'RELIC'])
export type FarmType = z.infer<typeof FarmTypeSchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const BuffDescSchema = z.object({
  Hash: z.number(),
})
export type BuffDesc = z.infer<typeof BuffDescSchema>

export const CocoonConfigValueSchema = z.object({
  ID: z.number(),
  WorldLevel: z.number(),
  PropID: z.number(),
  CocoonType: CocoonTypeSchema,
  MappingInfoID: z.number(),
  StageID: z.union([z.number(), z.null()]).optional(),
  StageIDList: z.array(z.number()),
  BuffDesc: BuffDescSchema,
  ParamList: z.array(ParamListSchema),
  DropList: z.array(z.number()),
  StaminaCost: z.number(),
  MaxWave: z.number(),
  OpenDate: z.array(z.any()),
  DamageType: z.array(DamageTypeSchema),
  FarmType: FarmTypeSchema,
})
export type CocoonConfigValue = z.infer<typeof CocoonConfigValueSchema>
