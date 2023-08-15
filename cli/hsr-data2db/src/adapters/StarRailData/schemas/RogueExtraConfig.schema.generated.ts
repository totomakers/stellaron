import * as z from 'zod'

export const ExtraEffectIconPathSchema = z.enum([
  'SpriteOutput/BuffIcon/Inlevel/IconBuffCommon.png',
])
export type ExtraEffectIconPath = z.infer<typeof ExtraEffectIconPathSchema>

export const ExtraEffectSchema = z.object({
  Hash: z.number(),
})
export type ExtraEffect = z.infer<typeof ExtraEffectSchema>

export const DescParamListSchema = z.object({
  Value: z.number(),
})
export type DescParamList = z.infer<typeof DescParamListSchema>

export const RogueExtraConfigValueSchema = z.object({
  ExtraEffectID: z.number(),
  ExtraEffectName: ExtraEffectSchema,
  ExtraEffectDesc: ExtraEffectSchema,
  DescParamList: z.array(DescParamListSchema),
  ExtraEffectIconPath: ExtraEffectIconPathSchema,
  ExtraEffectType: z.number(),
})
export type RogueExtraConfigValue = z.infer<typeof RogueExtraConfigValueSchema>
