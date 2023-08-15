import * as z from 'zod'

export const DescSchema = z.object({
  Hash: z.number(),
})
export type Desc = z.infer<typeof DescSchema>

export const ScoringConfigValueSchema = z.object({
  ScoringID: z.number(),
  AbilityName: z.string(),
  DisplayTypeList: z.array(z.any()),
  BonusDesc: DescSchema,
  BonusSimpleDesc: DescSchema,
  ParamList: z.array(z.any()),
  ScoreRuleDesc: DescSchema,
  GameModeGroup: z.union([z.number(), z.null()]).optional(),
})
export type ScoringConfigValue = z.infer<typeof ScoringConfigValueSchema>
