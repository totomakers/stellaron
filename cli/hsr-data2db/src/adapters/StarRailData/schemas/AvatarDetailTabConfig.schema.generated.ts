import * as z from 'zod'

export const AvatarDetailTabConfigValueSchema = z.object({
  ID: z.number(),
  IconPath: z.string(),
  TabName: z.string(),
})
export type AvatarDetailTabConfigValue = z.infer<
  typeof AvatarDetailTabConfigValueSchema
>
