import * as z from 'zod'

export const PlayerNameSchema = z.object({
  Hash: z.number(),
})
export type PlayerName = z.infer<typeof PlayerNameSchema>

export const AdventurePlayerValueSchema = z.object({
  ID: z.number(),
  AvatarID: z.number(),
  PlayerName: PlayerNameSchema,
  PlayerPrefabPath: z.string(),
  PlayerJsonPath: z.string(),
  DefaultAvatarHeadIconPath: z.string(),
  MazeSkillIdList: z.array(z.number()),
})
export type AdventurePlayerValue = z.infer<typeof AdventurePlayerValueSchema>
