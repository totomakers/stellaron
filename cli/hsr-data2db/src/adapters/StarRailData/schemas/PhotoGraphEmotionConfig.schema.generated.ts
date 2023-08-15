import * as z from 'zod'

export const EmotionIconPathSchema = z.enum([
  'SpriteOutput/CameraIcon/CameraPic/CameraEmoji0001.png',
  'SpriteOutput/CameraIcon/CameraPic/CameraEmoji0002.png',
  'SpriteOutput/CameraIcon/CameraPic/CameraEmoji0003.png',
  'SpriteOutput/CameraIcon/CameraPic/CameraEmoji0004.png',
  'SpriteOutput/CameraIcon/CameraPic/CameraEmoji0005.png',
  'SpriteOutput/CameraIcon/CameraPic/CameraEmoji0006.png',
])
export type EmotionIconPath = z.infer<typeof EmotionIconPathSchema>

export const EmotionNameSchema = z.object({
  Hash: z.number(),
})
export type EmotionName = z.infer<typeof EmotionNameSchema>

export const PhotoGraphEmotionConfigValueSchema = z.object({
  EmotionID: z.number(),
  EmotionName: EmotionNameSchema,
  EmotionIconPath: EmotionIconPathSchema,
  EmotionClipPath: z.string(),
  BrowClipName: z.string(),
  EyeClipName: z.string(),
  MouthClipName: z.string(),
})
export type PhotoGraphEmotionConfigValue = z.infer<
  typeof PhotoGraphEmotionConfigValueSchema
>
