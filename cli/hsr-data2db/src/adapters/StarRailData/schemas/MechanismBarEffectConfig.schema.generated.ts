import * as z from 'zod'

export const MechanismBarEffectConfigValueSchema = z.object({
  ID: z.number(),
  Phase: z.number(),
  MazeBuffList: z.array(z.number()),
  MazeLevelGraph: z.string(),
  BattlePlayerAbilityList: z.array(z.string()),
  BattleEnemyAbilityList: z.array(z.string()),
  ValueThresh: z.union([z.number(), z.null()]).optional(),
})
export type MechanismBarEffectConfigValue = z.infer<
  typeof MechanismBarEffectConfigValueSchema
>
