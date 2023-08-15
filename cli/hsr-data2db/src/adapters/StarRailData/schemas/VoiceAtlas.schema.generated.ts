import * as z from 'zod'

export const UnlockDescSchema = z.object({
  Hash: z.number(),
})
export type UnlockDesc = z.infer<typeof UnlockDescSchema>

export const VoiceAtlasValueSchema = z.object({
  AvatarID: z.number(),
  VoiceID: z.number(),
  VoiceTitle: UnlockDescSchema,
  Voice_M: UnlockDescSchema,
  Voice_F: UnlockDescSchema,
  AudioID: z.union([z.number(), z.null()]).optional(),
  AudioEvent: z.string(),
  MouthAnimPath: z.string(),
  UnlockDesc: UnlockDescSchema,
  IsBattleVoice: z.union([z.boolean(), z.null()]).optional(),
  Unlock: z.union([z.number(), z.null()]).optional(),
})
export type VoiceAtlasValue = z.infer<typeof VoiceAtlasValueSchema>
