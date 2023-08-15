import * as z from 'zod'

export const AbilityNameSchema = z.enum([
  'Avatar_DanHengIL_00_SkillTree02',
  'Avatar_DanHengIL_00_SkillTree03',
  'Avatar_Jingliu_SkillTree03',
  'Avatar_Kafka_SkillTree01',
  'Avatar_Kafka_SkillTree02',
  'Avatar_Silwolf_SkillTree01',
  '',
])
export type AbilityName = z.infer<typeof AbilityNameSchema>

export const StatusAddListSchema = z.object({
  PropertyType: z.string(),
  Value: ParamListSchema,
})
export type StatusAddList = z.infer<typeof StatusAddListSchema>

export const PointTriggerKeySchema = z.object({
  Hash: z.number(),
})
export type PointTriggerKey = z.infer<typeof PointTriggerKeySchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const MaterialListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
})
export type MaterialList = z.infer<typeof MaterialListSchema>

export const AvatarSkillTreeConfigTrialValueSchema = z.object({
  PointID: z.number(),
  Level: z.number(),
  AvatarID: z.number(),
  PointType: z.number(),
  Anchor: z.string(),
  MaxLevel: z.number(),
  DefaultUnlock: z.union([z.boolean(), z.null()]).optional(),
  PrePoint: z.array(z.number()),
  StatusAddList: z.array(StatusAddListSchema),
  MaterialList: z.array(MaterialListSchema),
  LevelUpSkillID: z.array(z.number()),
  IconPath: z.string(),
  PointName: z.string(),
  PointDesc: z.string(),
  AbilityName: AbilityNameSchema,
  PointTriggerKey: PointTriggerKeySchema,
  ParamList: z.array(ParamListSchema),
  AvatarPromotionLimit: z.union([z.number(), z.null()]).optional(),
  AvatarLevelLimit: z.union([z.number(), z.null()]).optional(),
})
export type AvatarSkillTreeConfigTrialValue = z.infer<
  typeof AvatarSkillTreeConfigTrialValueSchema
>
