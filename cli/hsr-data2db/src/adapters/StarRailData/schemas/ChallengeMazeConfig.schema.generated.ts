import * as z from 'zod'

export const DamageTypeSchema = z.enum([
  'Fire',
  'Ice',
  'Imaginary',
  'Physical',
  'Quantum',
  'Thunder',
  'Wind',
])
export type DamageType = z.infer<typeof DamageTypeSchema>

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const ChallengeMazeConfigValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  GroupID: z.number(),
  MapEntranceID: z.number(),
  PreLevel: z.number(),
  RewardID: z.number(),
  DamageType1: z.array(DamageTypeSchema),
  DamageType2: z.array(DamageTypeSchema),
  ChallengeTargetID: z.array(z.number()),
  StageNum: z.number(),
  MonsterID1: z.array(z.any()),
  MonsterID2: z.array(z.any()),
  ChallengeCountDown: z.number(),
  MazeGroupID1: z.number(),
  ConfigList1: z.array(z.number()),
  NpcMonsterIDList1: z.array(z.number()),
  EventIDList1: z.array(z.number()),
  ConfigList2: z.array(z.number()),
  NpcMonsterIDList2: z.array(z.number()),
  EventIDList2: z.array(z.number()),
  MazeBuffID: z.number(),
  PreChallengeMazeID: z.union([z.number(), z.null()]).optional(),
  MazeGroupID2: z.union([z.number(), z.null()]).optional(),
})
export type ChallengeMazeConfigValue = z.infer<
  typeof ChallengeMazeConfigValueSchema
>
