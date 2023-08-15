import * as z from 'zod'

export const EventSubTypeSchema = z.enum([
  'AssistEvent',
  'ChallengerEvent',
  'EnterStage',
  'Item',
  'TurnPrompt',
])
export type EventSubType = z.infer<typeof EventSubTypeSchema>

export const TeamSchema = z.enum(['TeamDark', 'TeamLight', 'TeamNeutral'])
export type Team = z.infer<typeof TeamSchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const OverridePropertySchema = z.object({
  PropertyType: z.string(),
  Value: z.union([ParamListSchema, z.null()]).optional(),
})
export type OverrideProperty = z.infer<typeof OverridePropertySchema>

export const BattleEventConfigValueSchema = z.object({
  BattleEventID: z.number(),
  Team: TeamSchema,
  EventSubType: EventSubTypeSchema,
  BattleEventName: z.string(),
  HeadIcon: z.string(),
  AbilityList: z.array(z.string()),
  OverrideProperty: z.array(OverridePropertySchema),
  Speed: z.union([ParamListSchema, z.null()]).optional(),
  HardLevel: z.union([z.boolean(), z.null()]).optional(),
  DescrptionText: z.string(),
  ParamList: z.array(ParamListSchema),
  AssetPackName: z.string(),
  EliteGroup: z.union([z.boolean(), z.null()]).optional(),
})
export type BattleEventConfigValue = z.infer<
  typeof BattleEventConfigValueSchema
>
