import * as z from 'zod'

export const NatureSchema = z.enum([
  'Fire',
  'Ice',
  'Imaginary',
  'Physical',
  'Quantum',
  'Thunder',
  'Wind',
])
export type Nature = z.infer<typeof NatureSchema>

export const TypeSchema = z.enum(['Easy', 'Normal'])
export type Type = z.infer<typeof TypeSchema>

export const SpecialRogueBuffIdListSchema = z.object({
  BuffID: z.number(),
  Level: z.number(),
})
export type SpecialRogueBuffIdList = z.infer<
  typeof SpecialRogueBuffIdListSchema
>

export const DisplayMonsterNameSchema = z.object({
  Hash: z.number(),
})
export type DisplayMonsterName = z.infer<typeof DisplayMonsterNameSchema>

export const EasySchema = z.object({
  LevelID: z.number(),
  Type: TypeSchema,
  WorldLevel: z.number(),
  StageID: z.number(),
  PlaneID: z.number(),
  FloorID: z.number(),
  BattleAreaGroupID: z.number(),
  BattleAreaID: z.number(),
  SpecialAvatarIDList: z.array(z.number()),
  SpecialRogueBuffIDList: z.array(SpecialRogueBuffIdListSchema),
  DisplayMonsterMap: z.record(z.string(), z.number()),
  MonsterImage: z.string(),
  ExtraEffect: DisplayMonsterNameSchema,
  RecommendLevel: z.number(),
  RecommendNature: z.array(NatureSchema),
  ChallengeGoalIDList: z.array(z.number()),
  ResultHintIDList: z.array(z.number()),
  DisplayMonsterName: DisplayMonsterNameSchema,
  DisplayMonsterNature: z.array(NatureSchema),
  TutorialGuideGroupID: z.union([z.number(), z.null()]).optional(),
})
export type Easy = z.infer<typeof EasySchema>

export const RogueChallengeLevelConfigValueSchema = z.object({
  Easy: z.record(z.string(), EasySchema),
  Normal: z.record(z.string(), EasySchema),
})
export type RogueChallengeLevelConfigValue = z.infer<
  typeof RogueChallengeLevelConfigValueSchema
>
