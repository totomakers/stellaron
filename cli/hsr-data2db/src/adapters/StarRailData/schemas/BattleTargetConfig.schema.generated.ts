import * as z from 'zod'

export const TargetNameSchema = z.object({
  Hash: z.number(),
})
export type TargetName = z.infer<typeof TargetNameSchema>

export const BattleTargetConfigValueSchema = z.object({
  ID: z.number(),
  AbilityName: z.string(),
  ParamType: z.string(),
  TargetParam: z.number(),
  HintStep: z.array(z.number()),
  IsFixableHeight: z.boolean(),
  TargetName: TargetNameSchema,
  TargetNameSimple: TargetNameSchema,
})
export type BattleTargetConfigValue = z.infer<
  typeof BattleTargetConfigValueSchema
>
