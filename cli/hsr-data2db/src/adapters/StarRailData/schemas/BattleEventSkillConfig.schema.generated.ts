import * as z from 'zod'

export const AttackTypeSchema = z.enum(['BPSkill', 'Normal', 'Ultra'])
export type AttackType = z.infer<typeof AttackTypeSchema>

export const SkillEffectSchema = z.enum([
  'AoEAttack',
  'Impair',
  'Passive',
  'SingleAttack',
  'Support',
])
export type SkillEffect = z.infer<typeof SkillEffectSchema>

export const SkillTriggerKeySchema = z.enum([
  'Skill01',
  'Skill02',
  'Skill03',
  'Skill0301',
  'Skill0302',
  'Skill0303',
  'Skill08',
  'SkillP01',
])
export type SkillTriggerKey = z.infer<typeof SkillTriggerKeySchema>

export const StanceDamageTypeSchema = z.enum([
  'Fire',
  'Imaginary',
  'Physical',
  'Quantum',
])
export type StanceDamageType = z.infer<typeof StanceDamageTypeSchema>

export const SimpleSkillDescSchema = z.object({
  Hash: z.number(),
})
export type SimpleSkillDesc = z.infer<typeof SimpleSkillDescSchema>

export const DelayRatioSchema = z.object({
  Value: z.number(),
})
export type DelayRatio = z.infer<typeof DelayRatioSchema>

export const BattleEventSkillConfigValueSchema = z.object({
  SkillID: z.number(),
  SkillName: SimpleSkillDescSchema,
  SkillTag: SimpleSkillDescSchema,
  SkillTypeDesc: SimpleSkillDescSchema,
  SkillTriggerKey: SkillTriggerKeySchema,
  SkillIcon: z.string(),
  UltraSkillIcon: z.string(),
  SkillDesc: SimpleSkillDescSchema,
  SimpleSkillDesc: SimpleSkillDescSchema,
  ShowStanceList: z.array(DelayRatioSchema),
  SPNeed: z.union([DelayRatioSchema, z.null()]).optional(),
  SPMultipleRatio: DelayRatioSchema,
  BPNeed: z.union([DelayRatioSchema, z.null()]).optional(),
  SkillNeed: SimpleSkillDescSchema,
  DelayRatio: DelayRatioSchema,
  ParamList: z.array(DelayRatioSchema),
  SimpleParamList: z.array(DelayRatioSchema),
  SkillEffect: SkillEffectSchema,
  SkillButtonEffType: z.string(),
  StanceDamageType: z.union([StanceDamageTypeSchema, z.null()]).optional(),
  AttackType: z.union([AttackTypeSchema, z.null()]).optional(),
  SkillComboValueDelta: z.union([DelayRatioSchema, z.null()]).optional(),
  SPBase: z.union([DelayRatioSchema, z.null()]).optional(),
})
export type BattleEventSkillConfigValue = z.infer<
  typeof BattleEventSkillConfigValueSchema
>
