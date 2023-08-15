import * as z from 'zod'

export const RankSchema = z.enum([
  'BigBoss',
  'Elite',
  'LittleBoss',
  'Minion',
  'MinionLv2',
])
export type Rank = z.infer<typeof RankSchema>

export const MonsterNameSchema = z.object({
  Hash: z.number(),
})
export type MonsterName = z.infer<typeof MonsterNameSchema>

export const AttackBaseSchema = z.object({
  Value: z.number(),
})
export type AttackBase = z.infer<typeof AttackBaseSchema>

export const AiSkillSequenceSchema = z.object({
  MNMACAIHJCE: z.number(),
})
export type AiSkillSequence = z.infer<typeof AiSkillSequenceSchema>

export const MonsterTemplateConfigValueSchema = z.object({
  MonsterTemplateID: z.number(),
  MonsterName: MonsterNameSchema,
  MonsterBaseType: z.string(),
  Rank: RankSchema,
  JsonConfig: z.string(),
  IconPath: z.string(),
  RoundIconPath: z.string(),
  ImagePath: z.string(),
  PrefabPath: z.string(),
  ManikinPrefabPath: z.string(),
  ManikinConfigPath: z.string(),
  ManikinImagePath: z.string(),
  NatureID: z.number(),
  AttackBase: AttackBaseSchema,
  DefenceBase: AttackBaseSchema,
  HPBase: AttackBaseSchema,
  SpeedBase: z.union([AttackBaseSchema, z.null()]).optional(),
  StanceBase: z.union([AttackBaseSchema, z.null()]).optional(),
  CriticalDamageBase: AttackBaseSchema,
  StatusResistanceBase: z.union([AttackBaseSchema, z.null()]).optional(),
  MinimumFatigueRatio: AttackBaseSchema,
  AIPath: z.string(),
  StanceCount: z.union([z.number(), z.null()]).optional(),
  InitialDelayRatio: AttackBaseSchema,
  AISkillSequence: z.array(AiSkillSequenceSchema),
  NPCMonsterList: z.array(z.number()),
  TemplateGroupID: z.union([z.number(), z.null()]).optional(),
  AtlasSortID: z.union([z.number(), z.null()]).optional(),
  MonsterCampID: z.union([z.number(), z.null()]).optional(),
})
export type MonsterTemplateConfigValue = z.infer<
  typeof MonsterTemplateConfigValueSchema
>
