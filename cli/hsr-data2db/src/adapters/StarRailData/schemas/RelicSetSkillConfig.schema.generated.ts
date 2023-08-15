import * as z from 'zod'

export const AbilityParamListSchema = z.object({
  Value: z.number(),
})
export type AbilityParamList = z.infer<typeof AbilityParamListSchema>

export const PropertyListSchema = z.object({
  FGBOJAIOFIJ: z.string(),
  LGKGOMNMBAH: AbilityParamListSchema,
})
export type PropertyList = z.infer<typeof PropertyListSchema>

export const RelicSetSkillConfigValueSchema = z.object({
  SetID: z.number(),
  RequireNum: z.number(),
  SkillDesc: z.string(),
  PropertyList: z.array(PropertyListSchema),
  AbilityName: z.string(),
  AbilityParamList: z.array(AbilityParamListSchema),
})
export type RelicSetSkillConfigValue = z.infer<
  typeof RelicSetSkillConfigValueSchema
>
