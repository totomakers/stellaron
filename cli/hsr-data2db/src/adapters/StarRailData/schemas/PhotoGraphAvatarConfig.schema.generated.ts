import * as z from 'zod'

export const PhotoGraphAvatarConfigValueSchema = z.object({
  AvatarID: z.number(),
  EmotionConfigList: z.array(z.number()),
})
export type PhotoGraphAvatarConfigValue = z.infer<
  typeof PhotoGraphAvatarConfigValueSchema
>
