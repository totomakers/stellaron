import * as z from 'zod'

export const GuideResConfigValueSchema = z.object({
  ID: z.number(),
  PrefabPath: z.string(),
})
export type GuideResConfigValue = z.infer<typeof GuideResConfigValueSchema>
