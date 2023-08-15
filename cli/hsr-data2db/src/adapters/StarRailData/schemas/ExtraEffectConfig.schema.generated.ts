import * as z from 'zod'

export const ExtraEffectIconPathSchema = z.enum([
  'SpriteOutput/BuffIcon/Inlevel/IconBuffCommon.png',
])
export type ExtraEffectIconPath = z.infer<typeof ExtraEffectIconPathSchema>

export const ExtraEffectSchema = z.object({
  Hash: z.number(),
})
export type ExtraEffect = z.infer<typeof ExtraEffectSchema>

export const ExtraEffectConfigValueSchema = z.object({
  ExtraEffectID: z.number(),
  ExtraEffectName: ExtraEffectSchema,
  ExtraEffectDesc: ExtraEffectSchema,
  DescParamList: z.array(z.any()),
  ExtraEffectIconPath: ExtraEffectIconPathSchema,
  ExtraEffectType: z.number(),
})
export type ExtraEffectConfigValue = z.infer<
  typeof ExtraEffectConfigValueSchema
>
