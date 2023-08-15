import * as z from 'zod'

export const ShareChannelConfigValueSchema = z.object({
  ShareChannelID: z.number(),
  IconPath: z.string(),
  Platform: z.string(),
  DisplayLanguageList: z.array(z.string()),
  Title: z.string(),
  Content: z.string(),
  UrlTitle: z.string(),
  Forum: z.string(),
  Topics: z.array(z.any()),
  ShareByNative: z.union([z.boolean(), z.null()]).optional(),
})
export type ShareChannelConfigValue = z.infer<
  typeof ShareChannelConfigValueSchema
>
