import * as z from 'zod'

export const SfxTypeSchema = z.enum(['Story', 'StoryWithFade'])
export type SfxType = z.infer<typeof SfxTypeSchema>

export const SfxConfigValueSchema = z.object({
  SFXID: z.number(),
  SFXPath: z.string(),
  IsPlayerInvolved: z.union([z.boolean(), z.null()]).optional(),
  SFXType: z.union([SfxTypeSchema, z.null()]).optional(),
})
export type SfxConfigValue = z.infer<typeof SfxConfigValueSchema>
