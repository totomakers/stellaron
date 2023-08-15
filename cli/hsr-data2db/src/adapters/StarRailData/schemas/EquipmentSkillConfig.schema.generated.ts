import * as z from 'zod'

export const PropertyTypeSchema = z.enum([
  'AllDamageTypeAddedRatio',
  'AttackAddedRatio',
  'BreakDamageAddedRatioBase',
  'CriticalChanceBase',
  'CriticalDamageBase',
  'DefenceAddedRatio',
  'HealRatioBase',
  'HPAddedRatio',
  'SPRatioBase',
  'StatusProbabilityBase',
  'StatusResistanceBase',
])
export type PropertyType = z.infer<typeof PropertyTypeSchema>

export const SkillSchema = z.object({
  Hash: z.number(),
})
export type Skill = z.infer<typeof SkillSchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const AbilityPropertySchema = z.object({
  PropertyType: PropertyTypeSchema,
  Value: ParamListSchema,
})
export type AbilityProperty = z.infer<typeof AbilityPropertySchema>

export const EquipmentSkillConfigValueSchema = z.object({
  SkillID: z.number(),
  SkillName: SkillSchema,
  SkillDesc: SkillSchema,
  Level: z.number(),
  AbilityName: z.string(),
  ParamList: z.array(ParamListSchema),
  AbilityProperty: z.array(AbilityPropertySchema),
})
export type EquipmentSkillConfigValue = z.infer<
  typeof EquipmentSkillConfigValueSchema
>
