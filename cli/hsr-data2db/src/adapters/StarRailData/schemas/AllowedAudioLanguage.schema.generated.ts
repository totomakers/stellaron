import * as z from 'zod'

export const ShowStringSchema = z.object({
  Hash: z.number(),
})
export type ShowString = z.infer<typeof ShowStringSchema>

export const CnSchema = z.object({
  AudioLanguageKey: z.string(),
  ShowString: ShowStringSchema,
  WwiseLanguageKey: z.string(),
  AudioTrackIndex: z.union([z.number(), z.null()]).optional(),
})
export type Cn = z.infer<typeof CnSchema>

export const AllowedAudioLanguageSchema = z.object({
  cn: CnSchema,
  en: CnSchema,
  jp: CnSchema,
  kr: CnSchema,
})
export type AllowedAudioLanguage = z.infer<typeof AllowedAudioLanguageSchema>
