import * as z from 'zod'

export const PlayerLevelConfigValueSchema = z.object({
  Level: z.number(),
  StaminaLimit: z.number(),
  PlayerExp: z.union([z.number(), z.null()]).optional(),
  LevelRewardID: z.union([z.number(), z.null()]).optional(),
})
export type PlayerLevelConfigValue = z.infer<
  typeof PlayerLevelConfigValueSchema
>
