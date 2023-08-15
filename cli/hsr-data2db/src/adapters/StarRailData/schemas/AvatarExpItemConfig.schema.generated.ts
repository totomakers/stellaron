import * as z from 'zod'

export const AvatarExpItemConfigValueSchema = z.object({
  ItemID: z.number(),
  Exp: z.number(),
})
export type AvatarExpItemConfigValue = z.infer<
  typeof AvatarExpItemConfigValueSchema
>
