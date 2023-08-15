import * as z from 'zod'

export const ConsumeTagSchema = z.enum(['BP', 'HP', 'SP'])
export type ConsumeTag = z.infer<typeof ConsumeTagSchema>

export const UseEffectSchema = z.enum([
  'AvatarItemIcon_Eff_AtkUp',
  'AvatarItemIcon_Eff_Common',
  'AvatarItemIcon_Eff_DefUp',
  'AvatarItemIcon_Eff_Heal',
  'AvatarItemIcon_Eff_Hurt',
  'AvatarItemIcon_Eff_MpGet',
  'AvatarItemIcon_Eff_SkillPoints',
])
export type UseEffect = z.infer<typeof UseEffectSchema>

export const UseSubTypeSchema = z.enum(['Avatar', 'External'])
export type UseSubType = z.infer<typeof UseSubTypeSchema>

export const UseTargetTypeSchema = z.enum(['Alive', 'Dead'])
export type UseTargetType = z.infer<typeof UseTargetTypeSchema>

export const ItemUseBuffDataValueSchema = z.object({
  UseDataID: z.number(),
  ConsumeType: z.number(),
  ConsumeTag: z.array(ConsumeTagSchema),
  UseSubType: UseSubTypeSchema,
  UseTargetType: z.union([UseTargetTypeSchema, z.null()]).optional(),
  MazeBuffID: z.number(),
  MazeBuffParam: z.array(z.any()),
  MazeBuffParam2: z.array(z.any()),
  SatietyValue: z.union([z.number(), z.null()]).optional(),
  UseMultipleMax: z.number(),
  IsCheckHP: z.union([z.boolean(), z.null()]).optional(),
  UseEffect: UseEffectSchema,
  PreviewHPRecoveryPercent: z.union([z.number(), z.null()]).optional(),
  PreviewHPRecoveryValue: z.union([z.number(), z.null()]).optional(),
  IsShowItemDesc: z.boolean(),
  ActivityCount: z.number(),
  MazeBuffID2: z.union([z.number(), z.null()]).optional(),
  PreviewSkillPoint: z.union([z.number(), z.null()]).optional(),
  PreviewPowerPercent: z.union([z.number(), z.null()]).optional(),
})
export type ItemUseBuffDataValue = z.infer<typeof ItemUseBuffDataValueSchema>
