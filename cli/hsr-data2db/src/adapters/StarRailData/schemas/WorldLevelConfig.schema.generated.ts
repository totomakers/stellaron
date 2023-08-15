import * as z from 'zod'

export const Breaktips1Schema = z.object({
  Hash: z.number(),
})
export type Breaktips1 = z.infer<typeof Breaktips1Schema>

export const WorldLevelConfigValueSchema = z.object({
  Level: z.number(),
  MaxPlayerLevel: z.number(),
  LevelUpMission: z.union([z.number(), z.null()]).optional(),
  Breaktips1: Breaktips1Schema,
  Breaktips2: Breaktips1Schema,
  LevelUpMissionTips: Breaktips1Schema,
})
export type WorldLevelConfigValue = z.infer<typeof WorldLevelConfigValueSchema>
