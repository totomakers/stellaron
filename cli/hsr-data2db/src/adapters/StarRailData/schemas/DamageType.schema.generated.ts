import * as z from 'zod'

export const DamageTypeIntroClassSchema = z.object({
  Hash: z.number(),
})
export type DamageTypeIntroClass = z.infer<typeof DamageTypeIntroClassSchema>

export const FireSchema = z.object({
  ID: z.string(),
  DamageTypeName: DamageTypeIntroClassSchema,
  DamageTypeIntro: DamageTypeIntroClassSchema,
  DamageTypeIconPath: z.string(),
  IconNatureForWeakActive: z.string(),
  IconNatureForWeakUnactive: z.string(),
  IconNatureColor: z.string(),
  IconNatureWhite: z.string(),
  SPInfoEffFront: z.string(),
  Color: z.string(),
  ShaderColor: z.string(),
  UnfullColor: z.string(),
  LightColor: z.string(),
  Light1Color: z.string(),
  SkillBtnEff: z.string(),
  SkillTreeLightColor: z.string(),
  SkillTreeDecoColor: z.string(),
  SkillTreeLeftPanelColor: z.string(),
  SPMazeInfoEffFront: z.string(),
  NormalDamage: z.string(),
  CriticalDamage: z.string(),
  SkillTreePanelPath: z.string(),
  MazeEnterBattleWeakIconPath: z.string(),
})
export type Fire = z.infer<typeof FireSchema>

export const DamageTypeSchema = z.object({
  Physical: FireSchema,
  Fire: FireSchema,
  Ice: FireSchema,
  Thunder: FireSchema,
  Wind: FireSchema,
  Quantum: FireSchema,
  Imaginary: FireSchema,
})
export type DamageType = z.infer<typeof DamageTypeSchema>
