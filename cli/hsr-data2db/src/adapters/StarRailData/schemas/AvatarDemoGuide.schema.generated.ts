import * as z from 'zod'

export const AvatarDemoIntroductionSchema = z.object({
  Hash: z.number(),
})
export type AvatarDemoIntroduction = z.infer<
  typeof AvatarDemoIntroductionSchema
>

export const AvatarDemoGuideValueSchema = z.object({
  StageID: z.number(),
  Index: z.number(),
  AvatarDemoIntroduction: AvatarDemoIntroductionSchema,
  Type: z.union([z.number(), z.null()]).optional(),
})
export type AvatarDemoGuideValue = z.infer<typeof AvatarDemoGuideValueSchema>
