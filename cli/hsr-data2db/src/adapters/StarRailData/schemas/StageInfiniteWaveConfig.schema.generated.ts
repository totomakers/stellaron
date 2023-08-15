import * as z from 'zod'

export const AbilitySchema = z.enum(['', 'FantasticStory_Wave_Ability_0001'])
export type Ability = z.infer<typeof AbilitySchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const StageInfiniteWaveConfigValueSchema = z.object({
  InfiniteWaveID: z.number(),
  MonsterGroupIDList: z.array(z.number()),
  MaxMonsterCount: z.number(),
  MaxTeammateCount: z.number(),
  Ability: AbilitySchema,
  ParamList: z.array(ParamListSchema),
  ClearPreviousAbility: z.boolean(),
})
export type StageInfiniteWaveConfigValue = z.infer<
  typeof StageInfiniteWaveConfigValueSchema
>
