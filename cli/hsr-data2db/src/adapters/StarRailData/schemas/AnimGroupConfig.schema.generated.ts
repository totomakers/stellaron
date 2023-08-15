import * as z from 'zod'

export const AnimGroupConfigValueSchema = z.object({
  ID: z.number(),
  AnimGroupConfig: z.string(),
  AnimOptionConfig: z.string(),
  PrefabPath: z.string(),
})
export type AnimGroupConfigValue = z.infer<typeof AnimGroupConfigValueSchema>
