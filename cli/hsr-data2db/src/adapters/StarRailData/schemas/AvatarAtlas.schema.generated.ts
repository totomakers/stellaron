import * as z from 'zod'

export const CvSchema = z.object({
  Hash: z.number(),
})
export type Cv = z.infer<typeof CvSchema>

export const AvatarAtlasValueSchema = z.object({
  AvatarID: z.number(),
  DefaultUnlock: z.union([z.boolean(), z.null()]).optional(),
  CV_CN: CvSchema,
  CV_JP: CvSchema,
  CV_KR: CvSchema,
  CV_EN: CvSchema,
  CampID: z.number(),
})
export type AvatarAtlasValue = z.infer<typeof AvatarAtlasValueSchema>
