import * as z from 'zod'

export const UnlockCostSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
})
export type UnlockCost = z.infer<typeof UnlockCostSchema>

export const TriggerSchema = z.object({
  Hash: z.number(),
})
export type Trigger = z.infer<typeof TriggerSchema>

export const ParamSchema = z.object({
  Value: z.number(),
})
export type Param = z.infer<typeof ParamSchema>

export const AvatarRankConfigValueSchema = z.object({
  RankID: z.number(),
  Rank: z.number(),
  Trigger: TriggerSchema,
  Name: z.string(),
  Desc: z.string(),
  IconPath: z.string(),
  SkillAddLevelList: z.record(z.string(), z.number()),
  RankAbility: z.array(z.string()),
  UnlockCost: z.array(UnlockCostSchema),
  Param: z.array(ParamSchema),
})
export type AvatarRankConfigValue = z.infer<typeof AvatarRankConfigValueSchema>
