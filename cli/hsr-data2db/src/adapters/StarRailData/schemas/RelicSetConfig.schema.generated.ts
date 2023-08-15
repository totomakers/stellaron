import * as z from 'zod'

export const SetNameSchema = z.object({
  Hash: z.number(),
})
export type SetName = z.infer<typeof SetNameSchema>

export const RelicSetConfigValueSchema = z.object({
  SetID: z.number(),
  SetSkillList: z.array(z.number()),
  SetIconPath: z.string(),
  SetIconFigurePath: z.string(),
  SetName: SetNameSchema,
  Release: z.union([z.boolean(), z.null()]).optional(),
  IsPlanarSuit: z.union([z.boolean(), z.null()]).optional(),
})
export type RelicSetConfigValue = z.infer<typeof RelicSetConfigValueSchema>
