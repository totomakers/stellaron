import * as z from 'zod'

export const AvatarHeadIconSchema = z.enum([
  '',
  'SpriteOutput/AvatarShopIcon/1013.png',
  'SpriteOutput/AvatarShopIcon/1106.png',
])
export type AvatarHeadIcon = z.infer<typeof AvatarHeadIconSchema>

export const TalkDataTextSchema = z.object({
  Hash: z.number(),
})
export type TalkDataText = z.infer<typeof TalkDataTextSchema>

export const TutorialGuideTalkDataValueSchema = z.object({
  ID: z.number(),
  AvatarHeadIcon: AvatarHeadIconSchema,
  TalkDataText: TalkDataTextSchema,
})
export type TutorialGuideTalkDataValue = z.infer<
  typeof TutorialGuideTalkDataValueSchema
>
