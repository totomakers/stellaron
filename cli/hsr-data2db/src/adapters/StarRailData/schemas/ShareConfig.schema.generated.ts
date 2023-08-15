import * as z from 'zod'

export const FalseSchema = z.object({
  PlatformType: z.number(),
  IsOverSea: z.boolean(),
  ShareChannelList: z.array(z.number()),
})
export type False = z.infer<typeof FalseSchema>

export const ShareConfigValueSchema = z.object({
  False: FalseSchema,
  True: FalseSchema,
})
export type ShareConfigValue = z.infer<typeof ShareConfigValueSchema>
