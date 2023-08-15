import * as z from 'zod'

export const CharacterTypeSchema = z.enum(['NPCMonster'])
export type CharacterType = z.infer<typeof CharacterTypeSchema>

export const RankSchema = z.enum(['Elite', 'LittleBoss', 'Minion', 'MinionLv2'])
export type Rank = z.infer<typeof RankSchema>

export const SubTypeSchema = z.enum(['Monster'])
export type SubType = z.infer<typeof SubTypeSchema>

export const NpcSchema = z.object({
  Hash: z.number(),
})
export type Npc = z.infer<typeof NpcSchema>

export const NpcMonsterDataValueSchema = z.object({
  ID: z.number(),
  NPCName: NpcSchema,
  ConfigEntityPath: z.string(),
  NPCIconPath: z.string(),
  NPCTitle: NpcSchema,
  BoardShowList: z.array(z.number()),
  JsonPath: z.string(),
  DefaultAIPath: z.string(),
  CharacterType: CharacterTypeSchema,
  SubType: SubTypeSchema,
  MiniMapIconType: z.number(),
  Rank: RankSchema,
  IsMazeLink: z.boolean(),
  PrototypeID: z.number(),
  MappingInfoID: z.union([z.number(), z.null()]).optional(),
})
export type NpcMonsterDataValue = z.infer<typeof NpcMonsterDataValueSchema>
