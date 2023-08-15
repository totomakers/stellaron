import * as z from 'zod'

export const VideoConfigValueSchema = z.object({
  VideoID: z.number(),
  VideoPath: z.string(),
  IsPlayerInvolved: z.union([z.boolean(), z.null()]).optional(),
  CaptionPath: z.string(),
  Encryption: z.boolean(),
})
export type VideoConfigValue = z.infer<typeof VideoConfigValueSchema>
