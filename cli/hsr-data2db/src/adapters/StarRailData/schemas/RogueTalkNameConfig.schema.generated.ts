import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const RogueTalkNameConfigValueSchema = z.object({
  TalkNameID: z.number(),
  Name: NameSchema,
  SubName: NameSchema,
  IconPath: z.string(),
  ImgPath: z.string(),
})
export type RogueTalkNameConfigValue = z.infer<
  typeof RogueTalkNameConfigValueSchema
>
