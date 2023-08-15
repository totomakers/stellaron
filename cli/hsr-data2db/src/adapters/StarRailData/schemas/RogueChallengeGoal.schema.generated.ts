import * as z from 'zod'

export const TypeSchema = z.enum([
  'ChallengeGoal',
  'EnemyRemainHpPercent',
  'RemainTurnNum',
])
export type Type = z.infer<typeof TypeSchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const GoalDescSchema = z.object({
  Hash: z.number(),
})
export type GoalDesc = z.infer<typeof GoalDescSchema>

export const RogueChallengeGoalValueSchema = z.object({
  GoalID: z.number(),
  GoalDesc: GoalDescSchema,
  GoalDesc2: GoalDescSchema,
  GoalDescParam: z.array(z.string()),
  Type: TypeSchema,
  AbilityName: z.string(),
  ParamList: z.array(ParamListSchema),
  MaxProgress: z.number(),
  ProgressScore: z.number(),
})
export type RogueChallengeGoalValue = z.infer<
  typeof RogueChallengeGoalValueSchema
>
