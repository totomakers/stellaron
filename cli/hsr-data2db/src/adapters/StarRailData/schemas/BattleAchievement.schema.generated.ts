import * as z from 'zod'

export const BattleAchievementValueSchema = z.object({
  BattleAchievementID: z.number(),
  AbilityName: z.string(),
  NeedTagList: z.array(z.string()),
  ExcludeTagList: z.array(z.string()),
  GameModeGroup: z.union([z.number(), z.null()]).optional(),
})
export type BattleAchievementValue = z.infer<
  typeof BattleAchievementValueSchema
>
