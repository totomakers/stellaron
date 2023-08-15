import * as z from 'zod'

export const AttackTypeSchema = z.enum(['Normal'])
export type AttackType = z.infer<typeof AttackTypeSchema>

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

export const IconPathSchema = z.enum([
  'SpriteOutput/SkillIcons/1001/SkillIcon_1001_Maze.png',
])
export type IconPath = z.infer<typeof IconPathSchema>

export const SkillTriggerKeySchema = z.enum([
  'PassiveSkill01',
  'PassiveSkill02',
  'PassiveSkill03',
  'PassiveSkill04',
  'PassiveSkill05',
  'PassiveSkillInitiate',
  'Skill01',
  'Skill02',
  'Skill03',
  'Skill04',
  'Skill05',
  'Skill06',
  'Skill07',
  'Skill08',
  'Skill09',
  'Skill10',
  'Skill11',
  'Skill12',
  'Skill13',
  'Skill14',
  'SkillP01',
  'SkillP02',
  'SkillP03',
  'SkillPerform01',
])
export type SkillTriggerKey = z.infer<typeof SkillTriggerKeySchema>

export const SkillSchema = z.object({
  Hash: z.number(),
})
export type Skill = z.infer<typeof SkillSchema>

export const DelayRatioSchema = z.object({
  Value: z.number(),
})
export type DelayRatio = z.infer<typeof DelayRatioSchema>

export const MonsterSkillConfigValueSchema = z.object({
  SkillID: z.number(),
  SkillName: SkillSchema,
  IconPath: IconPathSchema,
  SkillDesc: SkillSchema,
  SkillTypeDesc: SkillSchema,
  SkillTag: SkillSchema,
  PhaseList: z.array(z.number()),
  ExtraEffectIDList: z.array(z.any()),
  DamageType: z.union([DamageTypeSchema, z.null()]).optional(),
  SkillTriggerKey: SkillTriggerKeySchema,
  SPHitBase: z.union([DelayRatioSchema, z.null()]).optional(),
  DelayRatio: z.union([DelayRatioSchema, z.null()]).optional(),
  ParamList: z.array(DelayRatioSchema),
  AttackType: AttackTypeSchema,
  AI_CD: z.number(),
  AI_ICD: z.number(),
  IsThreat: z.union([z.boolean(), z.null()]).optional(),
})
export type MonsterSkillConfigValue = z.infer<
  typeof MonsterSkillConfigValueSchema
>
