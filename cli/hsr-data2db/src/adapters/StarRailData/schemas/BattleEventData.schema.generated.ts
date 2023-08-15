import * as z from 'zod'

export const BasePointSchema = z.enum([
  'AnchorColossus',
  'BattleEventAnchor_1',
  'Cube1',
  '',
])
export type BasePoint = z.infer<typeof BasePointSchema>

export const LevelAreaPrefabSchema = z.enum([
  '',
  'Level/BattleArea/Test_BattleArea_3_3_3.prefab',
])
export type LevelAreaPrefab = z.infer<typeof LevelAreaPrefabSchema>

export const BattleEventDataValueSchema = z.object({
  BattleEventID: z.number(),
  Config: z.string(),
  Prefab: z.string(),
  LevelAreaPrefab: LevelAreaPrefabSchema,
  BasePoint: BasePointSchema,
  SkillIDList: z.array(z.number()),
  IsSPReserved: z.union([z.boolean(), z.null()]).optional(),
})
export type BattleEventDataValue = z.infer<typeof BattleEventDataValueSchema>
