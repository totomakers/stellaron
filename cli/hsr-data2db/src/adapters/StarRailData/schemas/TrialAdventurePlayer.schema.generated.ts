import * as z from 'zod'

export const SkillTreeTemplateSchema = z.enum(['TYPE_INIT', 'TYPE_MAX'])
export type SkillTreeTemplate = z.infer<typeof SkillTreeTemplateSchema>

export const TypeSchema = z.enum(['TYPE_MISSION', 'TYPE_TRIAL'])
export type Type = z.infer<typeof TypeSchema>

export const TrialAdventurePlayerValueSchema = z.object({
  TrialPlayerID: z.number(),
  PlayerID: z.number(),
  Type: TypeSchema,
  Level: z.number(),
  SkillTreeTemplate: SkillTreeTemplateSchema,
  EquipmentLevel: z.union([z.number(), z.null()]).optional(),
  EquipmentRank: z.union([z.number(), z.null()]).optional(),
  AbilityNameList: z.array(z.string()),
  EquipmentID: z.union([z.number(), z.null()]).optional(),
  IsAutoBattle: z.union([z.boolean(), z.null()]).optional(),
  DisableSwitch: z.union([z.boolean(), z.null()]).optional(),
  IsProtected: z.union([z.boolean(), z.null()]).optional(),
  Promotion: z.union([z.number(), z.null()]).optional(),
  EquipmentPromotion: z.union([z.number(), z.null()]).optional(),
})
export type TrialAdventurePlayerValue = z.infer<
  typeof TrialAdventurePlayerValueSchema
>
